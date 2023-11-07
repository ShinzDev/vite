import her02 from "../assets/img1.png";
import hero from "../assets/heroimg.png";
import "./home.css";
import Button from "../components/Button";
const Home = () => {
  return (
    <div>
      <div className="hero_section">
        <div className="text_section">
          <h1>
            Unlock your path to smarter spending and achieve your financial
            goals
          </h1>
          <p>
            MonieTracka is a budget app that enables you to take control <br /> and
            stay on top of your finances.
          </p>
          <div className="link_buttons">
            <Button/>
        
          </div>
        </div>

        <div className="img_section">
          <img className="img_1" src={her02} alt="" />
          <img className="img_2" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
