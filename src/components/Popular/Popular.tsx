import { getMovieByPath } from "@/utils/movieClient";
import { MediaCard, MediaCardProps } from "../media-card/MediaCard";

export const Popular = async () => {
  const { results } = await getMovieByPath({path: '/movie/popular'});
  
  const polularMovies = results.slice(0, 6);

  return (
    <div>
      <h2>Les plus populaires</h2>
      <div>
      {polularMovies && polularMovies.map((movie: MediaCardProps) => (
          <MediaCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            release_date={movie.release_date}/>
        ))}
      </div>
    </div>
  );
}