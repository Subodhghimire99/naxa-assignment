import "./Header.css";
import Button from "./Button";
import naxalogo from "../images/naxalogo.png";

const Header = () => {
  return (
    <div className="header">
      <a className="naxalogo" href="#">
        <img src={naxalogo} style={{ width: "100%" }}></img>
      </a>
      <div className="main_nav">
        <ul>
          <li className="main_nav_li">
            <a href="#">Services</a>
          </li>
          <li className="main_nav_li">
            <a href="#">Portfolio</a>
          </li>
          <li className="main_nav_li">
            <a href="#">Company</a>
          </li>
          <li className="main_nav_li">
            <a href="#">Events & Media</a>
          </li>
          <li className="main_nav_li">
            <a href="#">Blogs</a>
          </li>
        </ul>
      </div>
      <Button />
    </div>
  );
};

export default Header;
