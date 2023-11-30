import { useState } from "react";
import Carousel from "./components/Carousel";
import Dots from "./components/Dots";
const people = [
  {
    img: "maria.jpg",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
  tenetur repellat nesciunt ut soluta dicta quibusdam commodi tempora
  quaerat pariatur! Obcaecati ipsa eos mollitia reiciendis cumque
  accusantium possimus! Soluta, nobis.`,
    author: "Maria de Almeida",
    profession: "Senior product manager",
  },
  {
    img: "hero.jpg",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
  tenetur repellat nesciunt ut soluta dicta quibusdam commodi tempora
  quaerat pariatur! Obcaecati ipsa eos mollitia reiciendis cumque
  accusantium possimus! Soluta, nobis.`,
    author: "Ramdom female",
    profession: "not know yet",
  },
  {
    img: "myimage.jpg",
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
  tenetur repellat nesciunt ut soluta dicta quibusdam commodi tempora
  quaerat pariatur! Obcaecati ipsa eos mollitia reiciendis cumque
  accusantium possimus! Soluta, nobis.`,
    author: "Alkesh Nikaje",
    profession: "Software Developer",
  },
];

function App() {
  const [index, setIndex] = useState(0);

  const nextClick = () => {
    if (index >= people.length - 1) {
      return;
    }
    setIndex((prev) => prev + 1);
  };

  const backClick = () => {
    if (index <= 0) {
      return;
    }
    setIndex((prev) => prev - 1);
  };

  return (
    <>
      <Carousel
        people={people}
        index={index}
        nextClick={nextClick}
        backClick={backClick}
      />
      <Dots people={people} index={index} setIndex={setIndex} />
    </>
  );
}

export default App;
