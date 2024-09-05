import Bloomberg from "../assets/bloomberg.jpg";
import ExperienceCard from "./ExperienceCard";
import Dnr from "../assets/dnr.jpg";
import QC from "../assets/QC.jpg";
import "./Experience.css";
function Experience() {
  return (
    <div className="ExperienceContainer">
      <h1>Experience</h1>
      <div className="Experience">
        <ExperienceCard
          src={Bloomberg}
          company="Bloomberg Software Engineering Intern"
          desc="Bloomberg Law Integrations and Workflows Team"
          size="2xl"
        />
        <ExperienceCard
          src={Dnr}
          company="DnR Studios Software Engineer Intern"
          desc="App Development"
          size="2xl"
        />
        <ExperienceCard
          src={QC}
          company="Queens College Computer Science Tutor & TA"
          desc="Computer Science Tutor for C++ & Java"
          size="2xl"
        />
      </div>
    </div>
  );
}

export default Experience;
