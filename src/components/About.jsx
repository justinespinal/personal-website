import "./About.css";
import AboutImage from "../assets/about.jpg";
import HeadJustin from "../assets/heads-justin.jpg";
import Logo from "../assets/logo.png";
function About() {
  return (
    <div className="About">
      <div className="desc">
        <h1 style={{ marginLeft: "15px", marginBottom: "-10px" }}>About</h1>
        <ul>
          <li>
            <h2>Senior at Queens College studying computer science</h2>
          </li>
          <li>
            <h2>President & Founder of Code for All</h2>
          </li>
          <li>
            <h2>Grew Code for All to 1,400+ members</h2>
          </li>
          <li>
            <h2>
              Have taught numerous classes, raging from 30 to 70 student
              attendance
            </h2>
          </li>
          <li>
            <h2>
              Partnered with numerous companies to bring amazing events to
              Queens College students
            </h2>
          </li>
          <li>
            <h2>Colorstack Family Member</h2>
          </li>
          <li>
            <h2>SEO Finance, Corporate, Technology (FCT) Participant</h2>
          </li>
          <li>
            <h2>Love speaking at panels to provide students with support</h2>
          </li>
          <li>
            <h2>Love Cats 😺</h2>
          </li>
          <li>
            <h2>First Generation Dominican American 🌴</h2>
          </li>
        </ul>
        <img src={Logo} id="logo"></img>
      </div>
      <img src={HeadJustin} id="aboutImage"></img>
    </div>
  );
}

export default About;
