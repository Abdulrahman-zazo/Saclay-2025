import "./InitialDefinition.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { initialdefinition } from "../../../../assets/Images";
function InitialDefinition() {
  return (
    <div className="Initial-Definition" id="services">
      <p>BIENVENUE AU CENTRE SACLAY CARE</p>
      <h1>Un endroit idéal pour recevoir des soins</h1>

      <span>
        Au cœur du Plateau de Saclay, le Centre Médico-esthétique Saclay Care
        ouvre ses portes dans un espace chaleureux, conçu pour votre bien-être.
        Fondé par le Dr Ahmed BANANEH et le Dr Ola BANANEH-HEBBO, notre centre
        est le fruit d'une vision commune : offrir une prise en charge complète,
        alliant compétences médicales pluridisciplinaires et approche
        bienveillante.
      </span>
      <div>
        <Link to={"/À-propos-de-nous"} className="learn-more-btn-Definition">
          <div>En savoir plus </div>
          <div className="learn-more-icon-Definition">
            <ArrowRight />
          </div>
        </Link>
      </div>
      <img src={initialdefinition} alt="Initial definition" />
    </div>
  );
}

export default InitialDefinition;
