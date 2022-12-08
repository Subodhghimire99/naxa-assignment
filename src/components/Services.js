import "./Services.css";
import Service from "./Service";

const Services = (props) => {
  let myData = props.myData;
  return (
    <div className="services">
      {myData.map((element) => {
        return <Service serviceData={element} />;
      })}
    </div>
  );
};

export default Services;
