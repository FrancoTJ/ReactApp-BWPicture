import "./Loading.css";
import loadingImage from "../../assets/spinnerEclipse.gif";

function Loading() {
  return (
    <div className="loading">
      <h2 className="loading-text">Loading...</h2>
      <img className="loading-image" src={loadingImage} />
    </div>
  );
}

export default Loading;
