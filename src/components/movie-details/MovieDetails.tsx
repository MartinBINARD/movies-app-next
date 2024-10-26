import Image from 'next/image';
import { Suspense } from 'react';
import { MovieCredits } from '../movie-credits/MovieCredits';

interface MovieDetailsProps {
  movie: {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    overview: string;
    prodcution_companies: { name: string }[];
  };
}

export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  return (
    <div className="relative min-h-[60vh] w-full">
      <div className="absolute inset-0 after:absolute after:inset-0 after:z-20 after:bg-[#041226]/80">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-30 flex justify-center gap-12 px-0 py-12">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
          width={250}
          height={400}
          alt={movie.title}
        />
        <div className="flex flex-[0.6] flex-col font-montserrat text-white">
          <h1 className="m-0 text-2xl font-bold">
            {movie.title} <span className="text-xl text-grey">({new Date(movie.release_date).toLocaleDateString('fr-FR')})</span>
          </h1>
          <p className="text-sm">
            Production : <span>{movie.prodcution_companies && movie.prodcution_companies.map((company) => company.name).join(', ')}</span>
          </p>
          <h2 className="my-0 ml-2 mr-0 text-xl font-medium text-white">Synopsis</h2>
          <p className="overflow-hidden text-xs font-light leading-4">{movie.overview}</p>
          <div className="mt-auto">
            <Suspense fallback={<p>Chargement...</p>}>
              <MovieCredits movieId={movie.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
