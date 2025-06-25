import { Circle } from "lucide-react";
import { aboutusdefinition } from "../../../assets/Images";
import "./AboutUsDefinition.css";

function AboutUsDefinition() {
  return (
    <div className="Initial-about-us">
      <div className="view-about-us">
        <div className="imgs-about-us">
          <img src={aboutusdefinition} alt="InitialServices" />
        </div>
        <div className="text-about-us">
          <p className="second-title-about-us">
            BIENVENUE AU CENTRE SACLAY CARE
          </p>
          <h1 className="first-title-about-us">
            Meilleurs soins pour votre bonne santé
          </h1>
          <span className="text-span">
            Au cœur du Plateau de Saclay, le Centre Médico-esthétique Saclay
            Care ouvre ses portes dans un espace chaleureux, conçu pour votre
            bien-être. Fondé par le Dr Ahmed BANANEH et le Dr Ola BANANEH-HEBBO,
            notre centre est le fruit d'une vision commune : offrir une prise en
            charge complète, alliant compétences médicales pluridisciplinaires
            et approche bienveillante.
          </span>
          <span className="description-about-us">
            Critères de qualité des soins / de la prise en charge des patients :
          </span>
          <div className="grid-text-about-us">
            <div className="text-with-circle">
              <div className="icon-text-with-circle">
                <Circle />
              </div>
              <p className="p-text-with-circle">Continuité</p>
            </div>
            <div className="text-with-circle">
              <div className="icon-text-with-circle">
                <Circle />
              </div>
              <p className="p-text-with-circle">Efficacité</p>
            </div>
            <div className="text-with-circle">
              <div className="icon-text-with-circle">
                <Circle />
              </div>
              <p className="p-text-with-circle">Globalité</p>
            </div>
            <div className="text-with-circle">
              <div className="icon-text-with-circle">
                <Circle />
              </div>
              <p className="p-text-with-circle"> Toujours à l'écoute</p>
            </div>
            <div className="text-with-circle">
              <div className="icon-text-with-circle">
                <Circle />
              </div>
              <p className="p-text-with-circle">Sécurité</p>
            </div>
          </div>
          <span className="description-about-us">
            Critères de qualité des services du centre:
          </span>
          <div className="grid-text-about-us">
            <div className="text-with-circle">
              <div className="icon-text-with-circle">
                <Circle />
              </div>
              <p className="p-text-with-circle">
                {" "}
                Accessibilité (financière, géographique)
              </p>
            </div>
            <div className="text-with-circle">
              <div className="icon-text-with-circle">
                <Circle />
              </div>
              <p className="p-text-with-circle">Equité</p>
            </div>
            <div className="text-with-circle">
              <div className="icon-text-with-circle">
                <Circle />
              </div>
              <p className="p-text-with-circle">Favoriser l'accès au soin</p>
            </div>
            <div className="text-with-circle">
              <div className="icon-text-with-circle">
                <Circle />
              </div>
              <p className="p-text-with-circle"> Prise en compte des besoins</p>
            </div>
          </div>
          <span className="text-span">
            Notre mission est de garantir des soins de qualité accessibles à
            tous et de renforcer la relation entre les patients et les médecins.
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutUsDefinition;
