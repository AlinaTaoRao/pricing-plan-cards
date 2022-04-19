import "./styles.css";

/* way 1: direct way, works */
// export const Card1 = () => {
//   return (
//     <div className="card-1">
//       <h3>Free</h3>
//       <p>For Individual</p>

//       <h2>$0</h2>
//       <div className="icon1">
//         <i className="gg-check-o"></i>
//         <h4>One Device</h4>
//       </div>
//       <div className="icon1">
//         <i className="gg-check-o"></i>
//         <h4>Unlimited Download</h4>
//       </div>
//       <div className="icon1">
//         <i className="gg-check-o"></i>
//         <h4>Editables Files</h4>
//       </div>
//       <div className="icon1">
//         <i className="gg-check-o"></i>
//         <h4>1GB Storage</h4>
//       </div>
//       <button className="submit1">Subscribe</button>
//     </div>
//   );
// };

/* way 2: {} expression, works*/
export const Card1 = () => {
  const items = [
    "One Device",
    "Unlimited Download",
    "Editables Files",
    "1GB Storage",
  ];
  return (
    <div className="card-1">
      <h3>Free</h3>
      <p>For Individual</p>

      <h2>$0</h2>
      {items.map((item, index) => (
        <div key = {index} className="icon1">
          <i className="gg-check-o"></i>
          <h4>{item}</h4>
        </div>
      ))}

      <button className="submit1">Subscribe</button>
    </div>
  );
};
