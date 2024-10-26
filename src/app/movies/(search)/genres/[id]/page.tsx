import SearchResults, { SearchParamsType } from '../../SearchResults';

interface GenreIdPageProps {
  params: { id: string };
  searchParams: SearchParamsType;
}

const GenreIdPage = ({ params, searchParams }: GenreIdPageProps) => {
  return <SearchResults searchParams={searchParams} genreId={params.id} />;
};

export default GenreIdPage;
