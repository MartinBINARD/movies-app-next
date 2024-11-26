import { SearchSidebar } from '@/components/search-sidebar/SearchSidebar';
import { LocaleTypes } from '@/utils/i18n';
import { getMovieByPath } from '@/utils/movieClient';
import { ReactNode } from 'react';

export type MovieSearchLayoutProps = {
  children: ReactNode;
  params: { locale: LocaleTypes };
};

const MovieSearchLayout = async ({ children, params: { locale } }: MovieSearchLayoutProps) => {
  const { genres } = await getMovieByPath({
    path: '/genre/movie/list',
    params: [],
    language: locale,
  });

  return (
    <div className="mx-8 my-0 flex">
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
