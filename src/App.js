import "./App.css";
import { useState } from "react";
import axios from "axios";
import Services from "./components/Services";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import ServiceNav from "./components/ServicesNav";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);

  const getServices = () => {
    const response = axios
      .get("https://admin.naxa.com.np/api/services")
      .then((response) => {
        setData(response.data);
      });
    getServices();
  };
  return (
    <div className="App">
      {getServices}
      {/* <Banner /> */}
      {/* <MainContent /> */}
      {/* <ServiceNav /> */}
      {/* <Footer /> */}
      <Services myData={data} />
    </div>
  );
}

export default App;
