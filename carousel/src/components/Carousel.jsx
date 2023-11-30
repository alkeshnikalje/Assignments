import BackIcon from "../assets/backIcon.svg";
import NextIcon from "../assets/nextIcon.svg";
function Carousel({ people, index, nextClick, backClick }) {
  return (
    <div className="carousel">
      <img className="img" src={people[index].img} alt="maria" />
      <blockquote className="testimonial">
        <p className="testimonial-text">{people[index].text}</p>
        <p className="author">{people[index].author}</p>
        <p className="profession">{people[index].profession}</p>
      </blockquote>
      <img
        className="btn back"
        src={BackIcon}
        alt="icon"
        onClick={() => backClick()}
      />
      <img
        className="btn next"
        src={NextIcon}
        alt="icon"
        onClick={() => nextClick()}
      />
    </div>
  );
}

export default Carousel;
