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
  {
    cardClass: "card-1",
    cardText: {
      h3: "Free",
      p: "For Individual",
      h2: "$0",
    },
    iconData: {
      iconClass: "icon1",
      i: "gg-check-o",
      h4: ["One Device", "Unlimited Download", "Editables Files", "1GB Stoage"],
    },
    btn: { btnClass: "submit1", btn: "Subscribe" },
  },
  {
    cardClass: "card-2",
    cardText: {
      h3: "Pro",
      p: "For Company",
      h2: "$80",
    },
    iconData: {
      iconClass: "icon1",
      i: "gg-check-o",
      h4: ["6 Device", "Unlimited Download", "300+ icon Package", "Fully Editables Files", "500GB Stoage"],
    },
    btn: { btnClass: "submit2", btn: "Subscribe" },
  },
  {
    cardClass: "card-3",
    cardText: {
      h3: "Enterprise",
      p: "For Team",
      h2: "$180",
    },
    iconData: {
      iconClass: "icon1",
      i: "gg-check-o",
      h4: ["12 Device", "Unlimited Download", "Fully Editables Files", "2TB Stoage", "5TB Data Transfer"],
    },
    btn: { btnClass: "submit3", btn: "Subscribe" },
  },

  // { divClass: "card-2", h3: "Pro", p: "For Company", h2: "$80" },
  // { divClass: "card-3", h3: "Enterprise", p: "For Team", h2: "$180" },
];
function App() {
  return (
    <div className="container">
      {cards.map((card, index) => (
        <Card key={index} className={card.divClass} h3={card.h3} h2={card.h2} />
      ))}
    </div>
  );
}

export default App;
