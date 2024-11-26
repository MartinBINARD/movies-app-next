import { LocaleTypes } from '@/utils/i18n';
import SearchResults, { SearchParamsType } from '../../SearchResults';

interface GenreIdPageProps {
  params: { id: string; locale: LocaleTypes };
  searchParams: SearchParamsType;
}

const GenreIdPage = ({ params: { id, locale }, searchParams }: GenreIdPageProps) => {
  return <SearchResults searchParams={searchParams} genreId={id} locale={locale} />;
};

export default GenreIdPage;
