import "server-only";

interface GetMovieByPathProps {
  path: string;
  language: string;
}

export const getMovieByPath = ({path, language = "fr-FR"}: GetMovieByPathProps): unknown => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append("api_key", process.env.TMDB_API_KEY as string);
  url.searchParams.append("language", language);

  return fetch(url).then((res) => res.json());
};