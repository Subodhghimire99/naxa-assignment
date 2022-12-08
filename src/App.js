import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Services from "./components/Services";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import ServiceNav from "./components/ServicesNav";
import Footer from "./components/Footer";
import FooterLast from "./components/FooterLast";
import SocialAndCopyright from "./components/SocialAndCopyright";

function App() {
  const [data, setData] = useState([]);

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
      <FooterLast />
      <SocialAndCopyright />
    </div>
  );
}

export default App;
