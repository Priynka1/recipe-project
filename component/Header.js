import { useState } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [btnLogin, setBtn] = useState("Login");
  return (
    <div id="navBar">
      <div className="logoImg">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-logo-design-vector-white-background_1277164-14863.jpg?w=360"
        ></img>
      </div>
      <div className="navLink">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="user-action">
        <button
          onClick={() => {
            btnLogin === "Login" ? setBtn("LogOut") : setBtn("Login");
          }}
          className="log-btn"
        >
          {btnLogin}
        </button>
      </div>
    </div>
  );
};
export default Header;
