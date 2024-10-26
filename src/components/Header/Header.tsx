import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { MovieSearch } from '../MovieSearch/MovieSearch';

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-primary px-5 font-roboto text-white">
      <div>
        <p>
          <Link href="/">MyMovieApp</Link>
        </p>
      </div>
      <div className="flex flex-[0.5] items-center justify-end gap-5">
        <nav>
          <ul className="mr-5 flex gap-5">
            <li>
              <Link href="/series">Séries</Link>
            </li>
            <li>
              <Link href="/movies">Films</Link>
            </li>
          </ul>
        </nav>
        <MovieSearch />
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  );
};
