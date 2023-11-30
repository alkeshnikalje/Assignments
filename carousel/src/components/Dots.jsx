function Dots({ people, index, setIndex }) {
  return (
    <ul className="dots">
      {people.map((p, i) => (
        <li
          key={i}
          className={`dot ${i === index ? "filled" : ""}`}
          onClick={() => setIndex(i)}
        ></li>
      ))}
    </ul>
  );
}

export default Dots;
