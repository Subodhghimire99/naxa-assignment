import "./Footer.css";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_items">
        <h2>
          seeking<span style={{ color: "#ffdc1c" }}> collaboration</span> ?
        </h2>
      </div>
      <div className="footer_items">
        <p>
          We constantly look forward to exploring ideas, collaborations, and
          technical innovations. If you want to partner with us, we are just an
          email away.
        </p>
      </div>
      <div className="footer_items">
        <Button />
      </div>
    </div>
  );
};

export default Footer;
