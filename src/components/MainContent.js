import Header from "./Header";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="maincontent">
      <Header />
      <div className="content_body">
        <h2>SERVICES</h2>
        <h3>
          AT
          <span style={{ color: "#124af4" }}> NAXA</span>, we work on
          <span style={{ color: "#124af4" }}> simple solutios </span>
          to
          <span style={{ color: "#124af4" }}> complex problems</span>.
        </h3>
        <p>
          We work as a team to generate, explore, build and validate ideas. We
          also contextualize innovations around the world to find the best
          fitting solutions to local problems.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
