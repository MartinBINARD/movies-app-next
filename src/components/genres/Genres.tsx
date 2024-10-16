import { getMovieByPath } from "@/utils/movieClient";
import Link from "next/link";

type genreType = {
  id: number;
  name: string;
}

export const Genres = async () => {
  const { genres } = await getMovieByPath({path: '/genre/movie/list', params: []});

  return (
    <div>
      <h2 className="font-roboto text-secondary font-bold text-2xl mt-10 mb-5">Parcourir par genres</h2>
      <div className="flex flex-wrap gap-5">
        {genres && genres.map((genre: genreType) => (
          <div key={genre.id} className="flex-none w-[20%] bg-primary text-white text-center py-2.5">
            <Link href={`/movies/genres/${genre.id}`}>
              <p className="m-0">{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}