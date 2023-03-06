import "./EmptySelection.css";
import errorImage from '../../assets/technicalDificulties.jpg';

function EmptySelection() {
  return (
    <div className='emptySelection'>
      <h2 className='emptySelection-text'>🚧 No results match your search criteria, try another.</h2>
      <img className='emptySelection-image' src={errorImage} />
    </div>
  );
}

export default EmptySelection;
