import "./styles.css";

/* way 1: direct way, works */
export const Card3 = () => {
  return (
    <div className="card-3">
      <h3>Enterprise</h3>
      <p>For Team</p>

      <h2>$180</h2>
      <div className="icon1">
        <i className="gg-check-o"></i>
        <h4>12 Device</h4>
      </div>
      <div className="icon1">
        <i className="gg-check-o"></i>
        <h4>Unlimited Download</h4>
      </div>
      <div className="icon1">
        <i className="gg-check-o"></i>
        <h4>3000+ icon Package</h4>
      </div>
      <div className="icon1">
        <i className="gg-check-o"></i>
        <h4>Fully Editables Files</h4>
      </div>
      <div className="icon1">
        <i className="gg-check-o"></i>
        <h4>2TB Storage</h4>
      </div>
      <div className="icon1">
        <i className="gg-check-o"></i>
        <h4>5TB Data Transfer</h4>
      </div>

      <button className="submit3">Subscribe</button>
    </div>
  );
};

/* way 2: {} expression, works*/
export const Card2 = () => {
    const items = [
      "12 Device",
      "Unlimited Download",
      "300+ icon Package",
      "Fully Editables Files",
      '2TB Storage',
      '5TB Data Transfer'
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
  
        <button className="submit3">Subscribe</button>
      </div>
    );
  };
