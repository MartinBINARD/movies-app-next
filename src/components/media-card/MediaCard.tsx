import Image from "next/image";
import Link from "next/link";

export interface MediaCardProps {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: number;
}

export const MediaCard = (media: MediaCardProps) => {
  const { id, title, poster_path, vote_average, release_date } = media;
  
  return (
    <div className="font-montserrat min-w-52 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
      <Link href={`/movies/${id}`}>
        <div className="relative w-full h-[300px] overflow-hidden">
        <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${poster_path}`}
            alt={title}
            fill
            className="rounded-t-lg"
          />
        </div>
        <div className="relative py-[5px] px-[10px]">
          <p className="absolute z-2 top-[-15px] w-[30px] h-[30px] m-0 flex justify-center items-center border border-primary rounded-full bg-white">{vote_average}</p>
          <h3 className="text-base font-bold mt-4 mb-1">{title}</h3>
          <p className="text-xs font-light">Le {new Date(release_date).toLocaleDateString("fr-FR")}</p>
        </div>
      </Link>
  </div>
  )
}
