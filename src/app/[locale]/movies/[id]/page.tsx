import { MovieDetails } from '@/components/movie-details/MovieDetails';
import { SimilarMovies } from '@/components/similar-movies/SimilarMovies';
import { LocaleTypes } from '@/utils/i18n';
import { getMovieByPath } from '@/utils/movieClient';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const dynamic = 'force-static';

export const revalidate = 3600;

interface MovieIdPageProps {
  params: { id: string; locale: LocaleTypes };
}

const MovieIdPage = async ({ params: { id, locale } }: MovieIdPageProps) => {
  const movie = await getMovieByPath({
    path: `/movie/${id}`,
    params: [],
    language: locale,
  });

  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} />
      <Suspense fallback={<p>Chargment...</p>}>
        <SimilarMovies movieId={movie.id} locale={locale} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
