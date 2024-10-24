import { getMovieByPath } from "@/utils/movieClient";
import Image from "next/image";

export type MovieCreditsProps = {
  movieId: number;
};

type PersonProps = {
  id: number;
  name: string;
  profile_path: string;
};

export const MovieCredits = async ({ movieId }: MovieCreditsProps) => {
  const { cast } = await getMovieByPath({
    path: `/movie/${movieId}/credits`,
    params: [],
  });

  return (
    <div className="flex gap-6">
      {cast &&
        cast.slice(0, 4).map((person: PersonProps) => (
          <div key={person.id} className="flex flex-col items-center gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w185${person.profile_path}`}
              width={90}
              height={90}
              alt="person.name"
              className="rounded-full w-24 h-24 object-cover object-[50%_40%] shadow-sm shadow-slate-200"
            />
            <p className="font-bold text-xs mb-0">{person.name}</p>
          </div>
        ))}
    </div>
  );
};
