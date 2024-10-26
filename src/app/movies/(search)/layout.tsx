import { SearchSidebar } from '@/components/search-sidebar/SearchSidebar';
import { getMovieByPath } from '@/utils/movieClient';
import { ReactNode } from 'react';

interface MovieSearchLayoutProps {
  children: ReactNode;
}

export const MovieSearchLayout: React.FC<MovieSearchLayoutProps> = async ({ children }: MovieSearchLayoutProps) => {
  const { genres } = await getMovieByPath({
    path: '/genre/movie/list',
    params: [],
  });

  return (
    <div className="mx-8 my-0 flex">
      <SearchSidebar genres={genres} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
