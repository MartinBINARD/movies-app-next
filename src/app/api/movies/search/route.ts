import { getMovieByPath, GetMovieByPathProps } from "@/utils/movieClient";

export const GET = async (request: { url: string | URL; }) => {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  const searchResults = await getMovieByPath({
    path: '/search/movie',
    params: [{ key: 'query', value: query }]
  }  as GetMovieByPathProps);

  return new Response(JSON.stringify(searchResults), { status: 200});
}