import "../styles/Header.scss";
import InstaLogo from "../assets/images/insta-logo.png";


const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={InstaLogo} alt="instagram logo" />
      <span>Instagram</span>
    </div>
  );
};

export default Header;
