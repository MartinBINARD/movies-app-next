import { Movie } from '@/app/[locale]/movies/(search)/SearchResults';
import { LocaleTypes } from '@/utils/i18n';
import { getMovieByPath } from '@/utils/movieClient';
import React from 'react';
import { MediaCard } from '../media-card/MediaCard';

export type SimilarMoviesProps = {
  movieId: number;
  locale: LocaleTypes;
};

export const SimilarMovies = async ({ movieId, locale }: SimilarMoviesProps) => {
  const { results } = await getMovieByPath({
    path: `/movie/${movieId}/similar`,
    params: [],
  });
  return (
    <div className="flex justify-center">
      <div className="mx-0 mb-12 mt-7 flex gap-5">
        {results &&
          results.slice(0, 6).map((movie: Movie) => (
            <React.Fragment key={movie.id}>
              <MediaCard media={movie} locale={locale} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};
