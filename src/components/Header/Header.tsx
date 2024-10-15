import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { MovieSearch } from "../MovieSearch/MovieSearch";

export const Header = () => {
  return (
    <header className='font-roboto flex items-center justify-between bg-primary text-white px-5'>
      <div>
        <p>
          <Link href="/">MyMovieApp</Link>
        </p>
      </div>
      <div className="flex justify-end flex-[0.5] gap-5">
        <nav className="flex gap-5 mr-5">
          <ul className="flex gap-5 mr-5">
            <li>
              <Link href="/series">Séries</Link>
            </li>
            <li>
              <Link href="/movies">Films</Link>
            </li>
          </ul>
        </nav>
      </div>
      <MovieSearch />
      <div className="flex items-center">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
}