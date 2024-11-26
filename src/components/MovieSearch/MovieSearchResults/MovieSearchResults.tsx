import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
}

export interface MovieSearchResultsProps {
  movieResults: Movie[];
}

export const MovieSearchResults = ({ movieResults }: MovieSearchResultsProps) => {
  return (
    <div className="absolute top-11 z-10 w-full bg-white p-[10px] font-montserrat shadow-[0_2px_8px_0_rgba(0,0,0,0.15)]">
      {movieResults?.map((movie: Movie) => (
        <div key={movie.id}>
          <Link
            href={`/movies/${movie.id}` as Route}
            onMouseDown={(e) => e.preventDefault()}
            className="flex items-center border-b border-gray-200 py-[10px]"
          >
            <Image
              width={90}
              height={50}
              className="shadow-[0_2px_8px_0_rgba(0,0,0,0.15)]"
              alt={movie.title}
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.backdrop_path}`}
            />
            <p className="ml-[10px] text-xs font-medium text-black hover:text-secondary">{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
