import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Where are the chairs assembled?",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque totam in
    culpa vero eos, reprehenderit eveniet possimus fugit, modi iste incidunt
    facere assumenda, at suscipit quis dolore. Cumque, facilis odio`,
    details: [
      "Ut quos hic sint suscipit",
      "amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur",
      "Ut quos hic sint suscipit a culpa",
    ],
    isOpened: false,
  },
  {
    id: 2,
    question: "How long do i have to return my chair?",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque totam in
    culpa vero eos, reprehenderit eveniet possimus fugit, modi iste incidunt
    facere assumenda, at suscipit quis dolore. Cumque, facilis odio`,
    details: [
      "Ut quos hic sint suscipit",
      "amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur",
      "Ut quos hic sint suscipit a culpa",
    ],
    isOpened: false,
  },
  {
    id: 3,
    question: "Do u ship to the coutries outside india?",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque totam in
    culpa vero eos, reprehenderit eveniet possimus fugit, modi iste incidunt
    facere assumenda, at suscipit quis dolore. Cumque, facilis odio`,
    details: [
      "Ut quos hic sint suscipit",
      "amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur",
      "Ut quos hic sint suscipit a culpa",
    ],
    isOpened: false,
  },
];

import Accordian from "./components/accordian";
function App() {
  const [arrayOfObj, setArrayOfObj] = useState(faqs);

  const handleClick = (id) => {
    setArrayOfObj((preArray) =>
      preArray.map((obj) =>
        obj.id === id ? { ...obj, isOpened: !obj.isOpened } : obj
      )
    );
  };
  return (
    <div className="container">
      {arrayOfObj.map((faq, idx) => (
        <Accordian
          key={idx}
          number={`0${idx + 1}`}
          question={faq.question}
          desc={faq.desc}
          details={faq.details}
          isOpened={faq.isOpened}
          id={faq.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default App;
