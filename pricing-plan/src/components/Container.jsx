import "./styles.css";
import { Card1 } from "./card-1/Card1.jsx";
import { Card2 } from "./card-2/Card2.jsx";
import { Card3 } from "./card-3/Card3.jsx";

export const Container = () => {
  return (
    <div className="container">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
};
