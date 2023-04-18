import { NavLink } from "react-router-dom";

import errorImage from "../../assets/technicalDificulties.jpg";
import "./FailRoute.css";

function FailRoute() {
  return (
    <NavLink to={`/`}>
      <div className="failRoute">
        <h2 className="failRoute-text">
          👀 Sorry, "one does not simply walk into Mordor ", try again please.
        </h2>
        <img className="failRoute-image" src={errorImage} />
      </div>
    </NavLink>
  );
}

export default FailRoute;
