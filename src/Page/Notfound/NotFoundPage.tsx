import "./Notfound.css";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div>
      <div id="main">
        <div className="fof">
          <h1>Désolé, cette page n'existe plus...</h1>
          <br />
          <Link className="linknotfound" to={"/"}>
            Retour à la page principale
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
