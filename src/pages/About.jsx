import "./home.css";
import rec from "../assets/Rectangle.png";
const About = () => {
  return (
    <div className="outter_radius">
      <div className="inner_radius">
        {/* ====text section====== */}
        <div className="inner_radius_text">
          <h3>What can we do for us</h3>
          {/* <br /> */}
          <h1>Set Up your Budget to maximize your spending</h1>
          <p>
            The traditional view of budgeting might make you think its all
            about restrictions and saying  no to your desires. But what if I
            told you that by crafting a smart budget with MonieTracka, you can
            enjoy the best of both worlds?
          </p>
          
          <button className=" ">
            Get started
          </button>
        </div>
        {/* ======image section======== */}
        <div className="inner_radius_image">
          <img src={rec} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
