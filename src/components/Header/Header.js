import logo from "../../assets/logo.png";
import switch_theme from "../../assets/switch_theme.png";
import switch_theme_dark from "../../assets/switch_theme_dark.png";
import "./Header.css";

function Header({ onClick, isDarkTheme }) {

  return (
    <div className="header">
      <img src={logo} alt="logo" onClick={() => window.location.href = '/Gallery'}/>
      <img onClick={onClick} src={isDarkTheme ? switch_theme_dark : switch_theme} alt="switch_theme" />
    </div>
  );
}

export default Header;
