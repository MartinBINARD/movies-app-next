import SearchResults from "../../SearchResults";

interface GenreIdPageProps {
  params: {id: string };
  searchParams: Record<string, string>;
}

export const GenreIdPage = ({ params, searchParams }: GenreIdPageProps) => {
  return (
    <SearchResults searchParams={searchParams} genreId={params.id} />
  );
}

export default GenreIdPage;