import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Socials.css";
function Socials({ size = "s" }) {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/justinespinal/">
        <FontAwesomeIcon
          icon={faLinkedin}
          size={size}
          style={{ color: "#ffffff" }}
        />
      </a>
      <a href="https://www.instagram.com/espicodes/">
        <FontAwesomeIcon
          icon={faInstagram}
          size={size}
          style={{ color: "#ffffff" }}
        />
      </a>
      <a href="mailto:espinaljustin03@gmail.com">
        <FontAwesomeIcon
          icon={faEnvelope}
          size={size}
          style={{ color: "#ffffff" }}
        />
      </a>
    </div>
  );
}

export default Socials;
