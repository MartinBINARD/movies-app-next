import SearchResults from "./SearchResults";

interface MoviesPageProps {
  searchParams: Record<string, string>;
}

const MoviesPage = ({ searchParams }: MoviesPageProps) => {
  return (
    <SearchResults searchParams={searchParams} genreId="" />
  )
}

export default MoviesPage;