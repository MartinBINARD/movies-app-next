import { getMovieByPath, GetMovieByPathProps } from "@/utils/movieClient";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  const searchResults = await getMovieByPath({
    path: '/search/movie',
    params: [{ key: 'query', value: query }]
  }  as GetMovieByPathProps);

  return new Response(JSON.stringify(searchResults), { status: 200});
}