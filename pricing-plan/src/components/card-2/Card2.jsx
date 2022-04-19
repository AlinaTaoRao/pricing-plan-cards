import './styles.css';

/* way 1: direct way, works */
// export const Card2 = () => {
//     return (
//         <div className="card-2">
//         <h3>Pro</h3>
//         <p>For Company</p>

//         <h2>$80</h2>
//         <div className="icon1">
//           <i className="gg-check-o"></i>
//           <h4>6 Device</h4>
//         </div>
//         <div className="icon1">
//           <i className="gg-check-o"></i>
//           <h4>Unlimited Download</h4>
//         </div>
//         <div className="icon1">
//           <i className="gg-check-o"></i>
//           <h4>300+ icon Package</h4>
//         </div>
//         <div className="icon1">
//           <i className="gg-check-o"></i>
//           <h4>Fully Editables Files</h4>
//         </div>
//         <div className="icon1">
//           <i className="gg-check-o"></i>
//           <h4>500GB Storage</h4>
//         </div>

//         <button className="submit2">Subscribe</button>
//       </div>
//     );
// };

/* way 2: {} expression, works*/
export const Card2 = () => {
  const items = [
    "6 Device",
    "Unlimited Download",
    "300+ icon Package",
    "Fully Editables Files",
    '500GB Storage'
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

      <button className="submit2">Subscribe</button>
    </div>
  );
};
