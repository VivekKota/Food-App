import { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function changeLoginStatus(loginStatus) {
  if (loginStatus == "true") return "false";
  else return "true";
}

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("false");

  return (
    <div className="header">
      <Logo />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About </Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
      </ul>
      <button
        className="login"
        onClick={() => {
          const status = changeLoginStatus(loginStatus);
          setLoginStatus(status);
        }}
      >
        {loginStatus === "true" ? "LOGIN" : "LOGOUT"}
      </button>
    </div>
  );
};

export default Header;
