import { useState } from "react";
import { HEADER_LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
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
          <button
            className="login-btn"
            onClick={() => {
              let _btnName = btnName === "Login" ? "Logout" : "Login";
              setBtnName(_btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
