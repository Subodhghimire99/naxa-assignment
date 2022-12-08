import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Services from "./components/Services";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import ServiceNav from "./components/ServicesNav";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);

  // const getServices = () => {
  //   const response = axios
  //     .get("https://admin.naxa.com.np/api/services")
  //     .then((response) => {
  //       setData(response.data);
  //     });
  //   getServices();
  // };
  useEffect(() => {
    axios
      .get("https://admin.naxa.com.np/api/services")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="App">
      <Banner />
      <MainContent />
      <ServiceNav />
      <Services myData={data} />
      <Footer />
    </div>
  );
}

export default App;
