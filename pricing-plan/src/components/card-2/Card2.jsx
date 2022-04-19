import './styles.css';

/* way 1: direct way, works */
export const Card2 = () => {
    return (
        <div className="card-2">
        <h3>Pro</h3>
        <p>For Company</p>

        <h2>$80</h2>
        <div className="icon1">
          <i className="gg-check-o"></i>
          <h4>6 Device</h4>
        </div>
        <div className="icon1">
          <i className="gg-check-o"></i>
          <h4>Unlimited Download</h4>
        </div>
        <div className="icon1">
          <i className="gg-check-o"></i>
          <h4>300+ icon Package</h4>
        </div>
        <div className="icon1">
          <i className="gg-check-o"></i>
          <h4>Fully Editables Files</h4>
        </div>
        <div className="icon1">
          <i className="gg-check-o"></i>
          <h4>500GB Storage</h4>
        </div>

        <button className="submit2">Subscribe</button>
      </div>
    );
};