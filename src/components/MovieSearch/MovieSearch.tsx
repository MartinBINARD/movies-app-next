'use client';

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { MovieSearchResults } from "./MovieSearchResults/MovieSearchResults";

export const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);

  const updateMobieSearch = async (query: string) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    
    setMovieResults(results.filter((movie: { backdrop_path: unknown; }) => movie.backdrop_path))
  }

  return (
    <div className="relative">
      <DebounceInput
        minLength={2}
        debounceTimeout={500}
        onChange={e => updateMobieSearch(e.target.value)}
        type="text"
        placeholder="Rechercher un titre..."
        onBlurCapture={() => setHasFocus(false)}
        onFocus={() => setHasFocus(true)}
        className="min-w-300 my-2.5 rounded-lg border-0 pl-2.5 outline-none text-black"
      />
      {movieResults.length > 0 && hasFocus && (
        <MovieSearchResults movieResults={movieResults} />
      )}
    </div>
  );
}