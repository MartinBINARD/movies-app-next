import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Roboto } from "next/font/google";
import styles from './Header.module.scss';

const roboto = Roboto({subsets: ["latin"], weight: ["100", "300"]});

export const Header = () => {
  return (
    <header className={`${styles.header} ${roboto.className}`}>
      <div>
        <p>MyMovieApp</p>
      </div>
      <div>
        <nav>
          <ul>
            <li>Séries</li>
            <li>Films</li>
          </ul>
        </nav>
      </div>
      <input type="text" placeholder="Rechercher un titre ..." />
      <div>
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
}