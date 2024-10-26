import Image from 'next/image';
import Link from 'next/link';

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
    <div className="w-52 rounded-lg font-montserrat shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
      <Link href={`/movies/${id}`}>
        <div className="relative h-[300px] w-full overflow-hidden">
          <Image src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${poster_path}`} alt={title} fill className="rounded-t-lg" />
        </div>
        <div className="relative px-2.5 py-3">
          <p className="z-2 absolute top-[-18px] m-0 flex h-9 w-9 items-center justify-center rounded-full border border-primary bg-white">
            {vote_average}
          </p>
          <h3 className="mb-2 mt-4 text-base font-bold">{title}</h3>
          <p className="text-xs font-light">Le {new Date(release_date).toLocaleDateString('fr-FR')}</p>
        </div>
      </Link>
    </div>
  );
};
