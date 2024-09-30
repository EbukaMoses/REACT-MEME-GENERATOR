import "./Header.css";
import logo from "../images/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header--image" />
      <h2 className="header--title">Ebuka Meme Generator</h2>
    </header>
  );
};

export default Header;
