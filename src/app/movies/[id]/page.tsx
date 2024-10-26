import { MovieDetails } from '@/components/movie-details/MovieDetails';
import { SimilarMovies } from '@/components/similar-movies/SimilarMovies';
import { getMovieByPath } from '@/utils/movieClient';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const dynamic = 'force-static';

export const revalidate = 3600;

interface MovieIdPageProps {
  params: { id: string };
}

const MovieIdPage = async ({ params }: MovieIdPageProps) => {
  const movie = await getMovieByPath({
    path: `/movie/${params.id}`,
    params: [],
  });

  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} />
      <Suspense fallback={<p>Chargment...</p>}>
        <SimilarMovies movieId={movie.id} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
