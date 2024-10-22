import SearchResults, { SearchParamsType } from "./SearchResults";

interface MoviesPageProps {
  searchParams: SearchParamsType;
}

const MoviesPage = ({ searchParams }: MoviesPageProps) => {
  return (
    <SearchResults searchParams={searchParams} genreId="" />
  )
}

export default MoviesPage;