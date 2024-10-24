import { getMovieByPath } from "@/utils/movieClient";
import { MediaCard, MediaCardProps } from "../media-card/MediaCard";

export type SimilarMoviesProps = {
  movieId: number;
};

export const SimilarMovies = async ({ movieId }: SimilarMoviesProps) => {
  const { results } = await getMovieByPath({
    path: `/movie/${movieId}/similar`,
    params: [],
  });
  return (
    <div className="flex justify-center">
      <div className="flex gap-5 mt-7 mb-12 mx-0">
        {results &&
          results
            .slice(0, 6)
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
    </div>
  );
};
