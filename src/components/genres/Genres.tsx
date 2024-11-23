import { getDictionary } from '@/utils/dictionaries';
import { LocaleTypes } from '@/utils/i18n';
import { getMovieByPath } from '@/utils/movieClient';
import Link from 'next/link';

export type GenreType = {
  id: number;
  name: string;
};

export type GenresProps = { locale: LocaleTypes };

export const Genres = async ({ locale }: GenresProps) => {
  const { genres } = await getMovieByPath({
    path: '/genre/movie/list',
    params: [],
    language: locale,
  });
  const i18n = await getDictionary(locale);

  return (
    <div>
      <h2 className="mb-5 mt-10 font-roboto text-2xl font-bold text-secondary">{i18n.genres.title}</h2>
      <div className="flex flex-wrap gap-5">
        {genres &&
          genres.map((genre: GenreType) => (
            <div key={genre.id} className="w-[20%] flex-none bg-primary py-2.5 text-center text-white">
              <Link href={`/movies/genres/${genre.id}`}>
                <p className="m-0">{genre.name}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
