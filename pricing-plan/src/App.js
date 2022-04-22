import "./App.css";
// import { Container } from "./components/Container.jsx"; // for way 2 and 2 {}
import { Card } from "./Card.jsx"; // for way 3

/* for way 1 & 2 {} , works*/
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
    cardText: [
      { h3: "Free" },
      { p: "For Individual" },
      { h2: "$0" },
      { btn: "Subscribe" },
    ],
    h4: ["One Device", "Unlimited Download", "Editables Files", "1GB Stoage"],
  },
  {
    cardText: [
      { h3: "Pro" },
      { p: "For Company" },
      { h2: "$80" },
      { btn: "Subscribe" },
    ],
    h4: [
      "6 Device",
      "Unlimited Download",
      "300+ icon Package",
      "Fully Editables Files",
      "500GB Stoage",
    ],
  },
  {
    cardText: [
      { h3: "Enterprise" },
      { p: "For Team" },
      { h2: "$180" },
      { btn: "Subscribe" },
    ],

    h4: [
      "12 Device",
      "Unlimited Download",
      "Fully Editables Files",
      "2TB Stoage",
      "5TB Data Transfer",
    ],
  },
];
function App() {
  return (
    <div className="container">
      {cards.map((card, index) => (
        <Card
          key={index}
          cardClass={`card-${index + 1}`}
          cardText={card.cardText}
          h4={card.h4}
          btnClass={`submit${index + 1}`}
        />
      ))}
    </div>
  );
}

export default App;
