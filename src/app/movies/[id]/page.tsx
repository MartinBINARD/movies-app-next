import { MovieDetails } from "@/components/movie-details/MovieDetails";
import { getMovieByPath } from "@/utils/movieClient";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

const TIME_ELAPSED_IN_ONE_HOUR = 3600;
export const revalidate = TIME_ELAPSED_IN_ONE_HOUR;

interface MovieIdPageProps {
  params: { id: string };
}

const MovieIdPage = async ({ params }: MovieIdPageProps) => {
  const movie =await getMovieByPath({path: `/movie/${params.id}`, params: []});

  if(!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  )
}

export default MovieIdPage;