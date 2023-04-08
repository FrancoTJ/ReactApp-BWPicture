import { NavLink } from "react-router-dom";
import errorImage from "../../assets/technicalDificulties.jpg";
import "./EmptySelection.css";

function EmptySelection() {
  return (
    <NavLink to={`/`}>
      <div className="emptySelection">
        <h2 className="emptySelection-text">
          🚧 No results match your search criteria, try another.
        </h2>
        <img className="emptySelection-image" src={errorImage} />
      </div>
    </NavLink>
  );
}

export default EmptySelection;
