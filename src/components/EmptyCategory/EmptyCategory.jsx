import "./EmptyCategory.css";
import errorImage from '../../assets/technicalDificulties.jpg';

function EmptyCategory() {
  return (
    <div className='emptyCategory'>
      <h2 className='emptyCategory-text'>🚧 No results match your search criteria, try another.</h2>
      <img className='emptyCategory-image' src={errorImage} />
    </div>
  );
}

export default EmptyCategory;
