import { MediaCard } from '@/components/media-card/MediaCard';
import { LocaleTypes } from '@/utils/i18n';
import { getMovieByPath } from '@/utils/movieClient';
import { ReadonlyURLSearchParams } from 'next/navigation';
import React from 'react';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: number;
}

export interface SearchParamsType extends ReadonlyURLSearchParams {
  sort_by: string | null;
  'release_date.gte': string | null;
  'release_date.lte': string | null;
}

interface SearchResultsProps {
  searchParams: SearchParamsType;
  genreId: string;
  locale: LocaleTypes;
}

const SearchResults = async ({ searchParams, genreId, locale }: SearchResultsProps) => {
  const { results } = await getMovieByPath({
    path: '/discover/movie',
    params: [
      { key: 'sort_by', value: searchParams.sort_by || '' },
      {
        key: 'release_date.gte',
        value: searchParams['release_date.gte'] || '',
      },
      {
        key: 'release_date.lte',
        value: searchParams['release_date.lte'] || '',
      },
      { key: 'with_genres', value: genreId },
    ],
  });

  return (
    <div className="mb-7 ml-7 mr-0 mt-5 flex flex-wrap gap-7">
      {results &&
        results
          .filter((movie: Movie) => movie.poster_path)
          .map((movie: Movie) => (
            <React.Fragment key={movie.id}>
              <MediaCard media={movie} locale={locale} />
            </React.Fragment>
          ))}
    </div>
  );
};

export default SearchResults;
