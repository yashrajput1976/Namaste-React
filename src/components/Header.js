import { HEADER_LOGO_URL } from "../utils/constants";
const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={HEADER_LOGO_URL} alt="cart" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
