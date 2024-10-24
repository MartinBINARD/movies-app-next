import Image from "next/image";
import { Suspense } from "react";
import { MovieCredits } from "../movie-credits/MovieCredits";

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
  console.log(movie);

  return (
    <div className="relative w-full min-h-[60vh]">
      <div className="absolute inset-0 after:absolute after:z-20 after:inset-0 after:bg-[#041226]/80">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-30 flex justify-center gap-12 py-12 px-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
          width={250}
          height={400}
          alt={movie.title}
        />
        <div className="font-montserrat text-white flex flex-col flex-[0.6]">
          <h1 className="font-bold text-2xl m-0">
            {movie.title}{" "}
            <span className="text-xl text-grey">
              ({new Date(movie.release_date).toLocaleDateString("fr-FR")})
            </span>
          </h1>
          <p className="text-sm">
            Production :{" "}
            <span>
              {movie.prodcution_companies &&
                movie.prodcution_companies
                  .map((company) => company.name)
                  .join(", ")}
            </span>
          </p>
          <h2 className="text-xl font-medium text-white ml-2 my-0 mr-0">
            Synopsis
          </h2>
          <p className="font-light text-xs leading-4 overflow-hidden">
            {movie.overview}
          </p>
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
