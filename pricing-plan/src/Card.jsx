/* for way 3: generate cards */
import './Card.css';

export const Card = ({ cardClass, cardText, h4, btnClass}) => {
  console.log("cardText:", cardText);
  console.log("h4:", h4);
  console.log("btnClass:", btnClass);
  return (
    <div className={cardClass}>
      <h3>{cardText[0].h3}</h3>
      <p>{cardText[1].p}</p>
      <h2>{cardText[2].h2}</h2>
      {h4.map((item, index) => (
        <div key={index} className="icon1">
          <i className="gg-check-o"></i>
          <h4>{item}</h4>
        </div>
      ))}
      <button className={btnClass}>{cardText[3].btn}</button>
    </div>
  );
};

