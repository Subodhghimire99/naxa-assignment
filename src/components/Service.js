import "./Service.css";

const Service = (props) => {
  const myData = props.serviceData;

  const [title, service_order, photo, id, icon, description2, description1] = [
    myData.title,
    myData.service_order,
    myData.photo,
    myData.id,
    myData.icon,
    myData.description1,
    myData.description2,
  ];
  return (
    <div className="serviceContainer">
      <figure className="serviceFigure"></figure>
      <h3>{title}</h3>
      <div className="mainPara">{description2}</div>
      <div className="subPara">
        <p>{description1}</p>
      </div>
    </div>
  );
};

export default Service;
