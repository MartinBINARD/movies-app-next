'use client';

import { useState } from "react";

interface MovieSearchProps {
  className: string;
}

export const MovieSearch = ({ className }: MovieSearchProps) => {
  const [movieResults, setMovieResults] = useState([]);

  const updateMobieSearch = async (query: string) => {
    const response = await fetch(`/api/movies/search?query=${query}`);
    const { results } = await response.json();
    console.log(results);
    
    setMovieResults([])
  }

  return (
    <div>
      <input type="text" placeholder="Rechercher un titre..." className={className} onChange={e => updateMobieSearch(e.target.value)} />
    </div>
  );
}