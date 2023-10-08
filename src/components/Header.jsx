import "../styles/Header.scss";
import InstaLogo from "../assets/svg/logo.svg";


const Header = () => {
  return (
    <nav>
      <header className="header">
        <img className="logo" src={InstaLogo} alt="instagram logo" />
      </header>
    </nav>
  );
};

export default Header;
