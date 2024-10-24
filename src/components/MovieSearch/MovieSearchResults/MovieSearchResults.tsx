import Image from "next/image";
import Link from "next/link";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
}

export interface MovieSearchResultsProps {
  movieResults: Movie[];
}

export const MovieSearchResults = ({
  movieResults,
}: MovieSearchResultsProps) => {
  return (
    <div className="absolute w-full z-10 bg-white top-11 p-[10px] shadow-[0_2px_8px_0_rgba(0,0,0,0.15)] font-montserrat">
      {movieResults?.map((movie: Movie) => (
        <div key={movie.id}>
          <Link
            href={`/movies/${movie.id}`}
            onMouseDown={(e) => e.preventDefault()}
            className="flex items-center py-[10px] border-b border-gray-200"
          >
            <Image
              width={90}
              height={50}
              className="shadow-[0_2px_8px_0_rgba(0,0,0,0.15)]"
              alt={movie.title}
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.backdrop_path}`}
            />
            <p className="text-xs font-medium text-black ml-[10px] hover:text-secondary">
              {movie.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};
