import "./App.css";
import { Container } from "./components/Container.jsx";
import { Card } from "./Card.jsx"; // for way 3


/* for way 1 & 2 {} */
// function App() {
//   return (
//     <>
//       <Container />
//     </>
//   );
// }

// export default App;

/* way 3: generate cards */
const cards = [
  { divClass: "card-1", h3: "Free", p: "For Individual", h2: "$0" },
  { divClass: "card-2", h3: "Pro", p: "For Company", h2: "$80" },
  { divClass: "card-3", h3: "Enterprise", p: "For Team", h2: "$180" },
];
function App() {
  return (
    <div className="container">
      {cards.map((card, index) => (<Card key = {index} className={card.divClass} h3 ={card.h3} h2 = {card.h2}/>))}
    </div>
  );
}

export default App;
