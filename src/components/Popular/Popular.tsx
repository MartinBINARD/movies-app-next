import { Movie } from '@/app/[locale]/movies/(search)/SearchResults';
import { getDictionary } from '@/utils/dictionaries';
import { LocaleTypes } from '@/utils/i18n';
import { getMovieByPath } from '@/utils/movieClient';
import React from 'react';
import { MediaCard } from '../media-card/MediaCard';

export type PopularProps = { locale: LocaleTypes };

export const Popular = async ({ locale }: PopularProps) => {
  const { results } = await getMovieByPath({
    path: '/movie/popular',
    params: [],
    language: locale,
  });
  const i18n = await getDictionary(locale);

  const polularMovies = results?.slice(0, 6);

  return (
    <div>
      <h2 className="mb-5 mt-10 font-roboto text-2xl font-bold text-secondary">{i18n.popular.title}</h2>
      <div className="flex gap-[30px]">
        {polularMovies &&
          polularMovies.map((movie: Movie) => (
            <React.Fragment key={movie.id}>
              <MediaCard media={movie} locale={locale} />
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};
