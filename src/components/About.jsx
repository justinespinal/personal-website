import "./About.css";
import AboutImage from "../assets/about.jpg";
function About() {
  return (
    <div className="About">
      <div className="desc">
        <h1 style={{marginLeft:"15px"}}>About</h1>
        <ul>
            <li><h2>Senior at Queens College studying computer science</h2></li>
            <li><h2>President & Founder of Code for All: a club that has ammassed 1,400+ members</h2></li>
            <li><h2>Partnered with numerous companies to bring amazing events to Queens College students</h2></li>
            <li><h2>Previous Software Engineer Intern @ Bloomberg</h2></li>
            <li><h2>Previous Software Engineer Intern @ DnR Studios</h2></li>
            <li><h2>Computer Science Tutor and Teaching Assistant @ Queens College</h2></li>
            <li><h2>Colorstack Family Member</h2></li>
            <li><h2>SEO Finance, Corporate, Technology (FCT) Participant</h2></li>
            <li><h2>Have taught numerous classes, raging from 30 to 70 student attendance</h2></li>
            <li><h2>Love speaking at panels to provide students with support</h2></li>
            <li><h2>Love Cats 😺</h2></li>
            <li><h2>First Generation Dominican American 🌴</h2></li>
        </ul>
      </div>
      <img src={AboutImage}></img>
    </div>
  );
}

export default About;
