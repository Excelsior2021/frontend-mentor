import Menu from "../Menu/Menu"
import logo from "../../../public/assets/logo.svg"
import "./Header.scss"

const Header = () => (
  <header className="header">
    <img src={logo} alt="logo" className="header__logo" />
    <div className="header__line"></div>
    <Menu />
  </header>
)

export default Header
