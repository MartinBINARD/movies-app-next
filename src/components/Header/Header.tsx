import { LocaleTypes } from '@/utils/i18n';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { LanguageSelector } from '../Language-selector/LanguageSelector';
import { MovieSearch } from '../MovieSearch/MovieSearch';

export type HeaderProps = { locale: LocaleTypes };

export const Header = ({ locale }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between bg-primary px-5 font-roboto text-white">
      <div>
        <p>
          <Link href={`/${locale}`}>MyMovieApp</Link>
        </p>
      </div>
      <div className="flex flex-[0.5] items-center justify-end gap-5">
        <nav>
          <ul className="mr-5 flex gap-5">
            <li>
              <Link href={`/${locale}/series`}>Séries</Link>
            </li>
            <li>
              <Link href={`/${locale}/movies`}>Films</Link>
            </li>
            <li>
              <Link href={`/${locale}/signup`}>Inscription</Link>
            </li>
          </ul>
        </nav>
        <MovieSearch />
        <div className="flex items-center">
          <Link href={`/${locale}/user/profile`}>
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};
