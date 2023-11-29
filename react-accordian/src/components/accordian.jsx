import Icon from "../assets/icon.svg";
import ClosedIcon from "../assets/icon2.svg";
function Accordian({
  id,
  number,
  question,
  desc,
  details,
  isOpened,
  handleClick,
}) {
  return (
    <div className={`item ${isOpened ? "selected" : ""}`}>
      <p className={isOpened ? "openNumber" : "closeNumber"}>{number}</p>
      <p className={isOpened ? "openQue" : "closeQue"}>{question}</p>
      <img
        className={`img ${isOpened ? "openImg" : ""}`}
        src={isOpened ? ClosedIcon : Icon}
        alt="icon"
        onClick={() => handleClick(id)}
      />
      {isOpened && (
        <>
          <p className="desc">{desc}</p>
          <ul className="list">
            {details.map((detail, id) => (
              <li key={id}>{detail}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Accordian;
