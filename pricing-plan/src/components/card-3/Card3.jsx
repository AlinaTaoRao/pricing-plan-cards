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
