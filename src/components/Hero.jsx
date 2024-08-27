import justin from "../assets/justin.jpg";
import "./Hero.css";
import Socials from "./Socials.jsx";
import { Typewriter } from "react-simple-typewriter";
function Hero() {
  return (
    <div className="Hero">
      <img src={justin} id="justinImage"></img>
      <div className="info">
        <div className="name-with-contact">
          <h1>Justin Espinal</h1>
          <Socials size="2xl" />
        </div>
        <h1>A Software Engineer dedicated to</h1>
        <h1>
          <span style={{ color: "red" }}>
            <Typewriter
              id="typeWriter"
              words={["being a leader", "helping others", "Slay"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
