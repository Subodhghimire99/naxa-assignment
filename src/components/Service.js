import "./Service.css";
import serviceLogo from "../images/serviceLogo.png";

const Service = (props) => {
  const myData = props.serviceData;
  let description1_with_p = myData.description1;
  let description1_without_P = description1_with_p.replaceAll("<p>", " ");

  const [title, service_order, photo, id, icon, description2, description1] = [
    myData.title,
    myData.service_order,
    myData.photo,
    myData.id,
    myData.icon,
    description1_without_P,
    myData.description2,
  ];
  const index = props.indexValue;
  if (index % 2 == 0) {
    return (
      <div className="service_container">
        <div className="service_image flexitem">
          <img src={photo}></img>
        </div>
        <div className="service_details flexitem">
          <div className="service_details_items">
            <img src={serviceLogo} alt="service Logo"></img>
          </div>
          <div className="service_details_items">
            <h3>{title}</h3>
          </div>
          <div className="main_para service_details_items">{description2}</div>
          <div className="sub_para service_details_items">
            <p>{description1}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="service_container service_container_reverse">
        <div className="service_image flexitem">
          <img src={photo}></img>
        </div>
        <div className="service_details flexitem">
          <div className="service_details_items">
            <img src={serviceLogo} alt="service Logo"></img>
          </div>
          <div className="service_details_items">
            <h3>{title}</h3>
          </div>
          <div className="main_para service_details_items">{description2}</div>
          <div className="sub_para service_details_items">
            <p>{description1}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Service;
