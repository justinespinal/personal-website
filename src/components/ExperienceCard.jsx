import "./ExperienceCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function ExperienceCard(props) {
  return (
    <div className="experienceCard">
      <div className="innerCard">
        <img src={props.src}></img>
        <div>
          <h1>{props.company}</h1>
          <h4>{props.desc}</h4>
        </div>
      </div>
      <FontAwesomeIcon
        id="rightIcon"
        size={props.size}
        icon={faChevronRight}
        style={{ color: "#ffffff" }}
      />
    </div>
  );
}

export default ExperienceCard;
