import { getMovieByPath } from '@/utils/movieClient';
import { MediaCard, MediaCardProps } from '../media-card/MediaCard';

export const Popular = async () => {
  const { results } = await getMovieByPath({
    path: '/movie/popular',
    params: [],
  });

  const polularMovies = results.slice(0, 6);

  return (
    <div>
      <h2 className="mb-5 mt-10 font-roboto text-2xl font-bold text-secondary">Les plus populaires</h2>
      <div className="flex gap-[30px]">
        {polularMovies &&
          polularMovies.map((movie: MediaCardProps) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
            />
          ))}
      </div>
    </div>
  );
};
