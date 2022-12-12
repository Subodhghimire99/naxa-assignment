import "./App.css";
import { useEffect } from "react";
import Services from "./components/Services";
import Banner from "./components/Banner";
import MainContent from "./components/MainContent";
import ServiceNav from "./components/ServicesNav";
import Footer from "./components/Footer";
import FooterLast from "./components/FooterLast";
import SocialAndCopyright from "./components/SocialAndCopyright";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "./actions/action";

function App() {
  const { usersData, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch(usersData);

  useEffect(() => {
    dispatch(requestUsers());
  }, []);

  return (
    <div className="App">
      <Banner />
      <MainContent />
      <ServiceNav />
      <Services myData={usersData} />
      <Footer />
      <FooterLast />
      <SocialAndCopyright />
    </div>
  );
}

export default App;
