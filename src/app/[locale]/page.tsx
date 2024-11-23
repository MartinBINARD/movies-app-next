import { Genres } from '@/components/genres/Genres';
import { Popular } from '@/components/Popular/Popular';
import { LocaleTypes } from '@/utils/i18n';

export const revalidate = 86400;

export type HomeProps = { params: { locale: LocaleTypes } };

export default function Home({ params: { locale } }: HomeProps) {
  return (
    <div className="flex min-h-screen flex-col px-12 pb-0 pt-2.5 font-montserrat">
      <Popular locale={locale} />
      <Genres locale={locale} />
    </div>
  );
}
