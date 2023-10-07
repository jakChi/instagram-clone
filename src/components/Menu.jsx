import "../styles/Menu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCompass,
  faHeart,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const HOME = <FontAwesomeIcon icon={faHouse} />;
const EXPLORE = <FontAwesomeIcon icon={faCompass} />;
const NOTIFICATIONS = <FontAwesomeIcon icon={faHeart} />;
const MESSAGES = <FontAwesomeIcon icon={faPaperPlane} />;
const SEARCH = <FontAwesomeIcon icon={faMagnifyingGlass} />;

const Menu = () => {
  return (
    <div className="menuItems">
      <ul className="icons">
        <li className="icon">{HOME}</li>
        <li className="icon">{SEARCH}</li>
        <li className="icon">{MESSAGES}</li>
        <li className="icon">{NOTIFICATIONS}</li>
        <li className="icon">{EXPLORE}</li>
      </ul>
    </div>
  );
};

export default Menu;
