'use client';

import { notFound, useParams, useSelectedLayoutSegment } from 'next/navigation';
import { GenreType } from '../genres/Genres';
import { Form } from './form/Form';

interface SearchSidebarProps {
  genres: GenreType[];
}

export const SearchSidebar = ({ genres }: SearchSidebarProps) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  const getSideBarTitle = () => {
    if (!segment) {
      return 'Films';
    }
    const genre = genres.find((genre) => genre.id === Number(id));

    if (!genre) {
      return notFound();
    }

    return genre?.name;
  };
  const title = getSideBarTitle();

  return (
    <div>
      <h1 className="mb-6 mt-5 text-xl font-bold text-secondary">Tous les &quot;{title}&quot;</h1>
      <Form />
    </div>
  );
};
