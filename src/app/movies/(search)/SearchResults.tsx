import { MediaCard, MediaCardProps } from "@/components/media-card/MediaCard";
import { getMovieByPath } from "@/utils/movieClient";
import { ReadonlyURLSearchParams } from "next/navigation";

export interface SearchParamsType extends ReadonlyURLSearchParams {
  sort_by: string | null;
  "release_date.gte": string | null;
  "release_date.lte": string | null;
}

interface SearchResultsProps {
  searchParams: SearchParamsType;
  genreId: string;
}

const SearchResults = async ({ searchParams, genreId }: SearchResultsProps) => {
  const { results } = await getMovieByPath({
    path: "/discover/movie",
    params: [
      { key: "sort_by", value: searchParams.sort_by || "" },
      {
        key: "release_date.gte",
        value: searchParams["release_date.gte"] || "",
      },
      {
        key: "release_date.lte",
        value: searchParams["release_date.lte"] || "",
      },
      { key: "with_genres", value: genreId },
    ],
  });

  return (
    <div className="flex flex-wrap gap-7 mt-5 mr-0 mb-7 ml-7">
      {results &&
        results
          .filter((movie: MediaCardProps) => movie.poster_path)
          .map((movie: MediaCardProps) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
            />
          ))}
    </div>
  );
};

export default SearchResults;
