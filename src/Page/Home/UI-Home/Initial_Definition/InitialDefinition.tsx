import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import { initialdefinition } from "../../../../assets/Images";

function InitialDefinition() {
  return (
    <div
      className="flex flex-col items-center w-[80%] max-w-screen-xl mx-auto my-10 font-secondary animate-slide-top"
      id="services"
    >
      <p className="text-secondary uppercase text-[18px] max-[900px]:text-[16px] font-bold tracking-[2.24px] text-center">
        Bienvenue au centre Saclay Care
      </p>

      <h1 className="text-primary font-primary text-[32px] max-[900px]:text-[28px] font-semibold text-center my-2">
        Un endroit idéal pour recevoir des soins
      </h1>

      <span className="text-[#353535] text-[20px] max-[900px]:text-[14px] text-center leading-relaxed w-[80%] my-4">
        Au cœur du Plateau de Saclay, le Centre Médico-esthétique Saclay Care
        ouvre ses portes dans un espace chaleureux, conçu pour votre bien-être.
        Fondé par le Dr Ahmed BANANEH et le Dr Ola BANANEH-HEBBO, notre centre
        est le fruit d'une vision commune : offrir une prise en charge complète,
        alliant compétences médicales pluridisciplinaires et approche
        bienveillante.
      </span>

      <Link
        to="/À-propos-de-nous"
        className="flex items-center justify-center text-secondary text-[16px] font-medium mt-4 hover:text-primary transition"
      >
        <span>En savoir plus</span>
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>

      <img
        src={initialdefinition}
        alt="Initial definition"
        className="w-full h-[250px] object-cover mt-6"
        loading="lazy"
      />
    </div>
  );
}

export default InitialDefinition;
