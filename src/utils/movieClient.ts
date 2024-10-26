import 'server-only';

export interface GetMovieByPathProps {
  path: string;
  params: { key: string; value: string }[];
  language?: string;
}

export const getMovieByPath = async ({ path, params = [], language = 'fr-FR' }: GetMovieByPathProps) => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append('api_key', process.env.TMDB_API_KEY as string);
  url.searchParams.append('language', language);

  params
    .filter((param) => param.value)
    .forEach((param) => {
      return url.searchParams.append(param.key, param.value);
    });

  return fetch(url).then((res) => res.json());
};
