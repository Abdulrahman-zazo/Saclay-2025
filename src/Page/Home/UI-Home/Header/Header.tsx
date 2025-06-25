import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header-section">
      <div className="Header">
        <div className="header-content">
          <p>PRENDRE SOIN DE LA VIE</p>
          <h1>Au service du bien-être et de la santé de tous</h1>
          <div className="header-btn">
            <Link to="#Services">Nos services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
