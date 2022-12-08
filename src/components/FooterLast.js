import "./FooterLast.css";
import naxalogo from "../images/naxalogo.png";

const FooterLast = () => {
  return (
    <div className="footerlast_container">
      <div className="footerlast">
        <div className="flexitem_footer address">
          <div className="address_flex ">
            <a className="naxalogo_footer" href="#">
              <img src={naxalogo} style={{ width: "100%" }}></img>
            </a>
          </div>
          <div className="address_flex">
            <h6>Naxa Pvt Ltd.</h6>
          </div>
          <div className="address_flex">
            <p>Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal</p>
            <p>
              <a href="#">14516543</a>
            </p>
            <p>
              <a href="mailto:info@naxa.com.np" className="mail">
                info@naxa.com.np
              </a>
            </p>
          </div>
        </div>
        <div className="flexitem_footer">
          <h6>Services</h6>
          <ul>
            <li>
              <a href="#">Software & Apps Development</a>
            </li>
            <li>
              <a href="#">GIS Mapping & Analysis</a>
            </li>
            <li>
              <a href="#">Data Collection & Visualization</a>
            </li>
            <li>
              <a href="#">ICT & Digital Development Research</a>
            </li>
            <li>
              <a href="#">Frontier Technologies (Drones, VR..)</a>
            </li>
            <li>
              <a href="#">Training & Capacity building (GIS and Web GIS)</a>
            </li>
            <li>
              <a href="#">Creative Graphic Design</a>
            </li>
          </ul>
          <h6>Portfolio</h6>
        </div>
        <div className="flexitem_footer last_item_footer">
          <h6>Company</h6>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Work with us</a>
            </li>
          </ul>
          <h6>Contact</h6>
        </div>
      </div>
    </div>
  );
};

export default FooterLast;
