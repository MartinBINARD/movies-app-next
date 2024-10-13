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
    <div className="font-montserrat min-w-64 rounded-lg shadow-sm shadow-gray-200">
      <Link href={`/movies/${id}`}>
        <div className="relative w-full h-[300px] overflow-hidden">
        <Image
            src={`${process.env.TMDB_IMAGE_BASE_PATH}${poster_path}`}
            alt={title}
            fill
          />
        </div>
        <div>
          <p>{vote_average}</p>
          <h3>{title}</h3>
          <p>Le {new Date(release_date).toLocaleDateString("fr-FR")}</p>
        </div>
      </Link>
  </div>
  )
}
