import { aboutusdefinition } from "../../../assets/Images";
import { CircleIcon } from "../../../assets/CircleIcon";

function AboutUsDefinition() {
  return (
    <div className="w-[90%] max-w-screen-xl mx-auto my-20">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10">
        {/* الصورة تظهر فقط على الشاشات المتوسطة فما فوق */}
        <div className="hidden md:flex justify-center">
          <img
            src={aboutusdefinition}
            alt="Centre Saclay Care"
            className="w-[400px] h-[650px] object-cover"
          />
        </div>

        {/* النص */}
        <div className="flex flex-col gap-2 font-secondary text-left w-full md:w-[60%]">
          <p className="uppercase text-secondary text-sm md:text-base font-bold tracking-widest text-left  md:text-left">
            Bienvenue au centre Saclay Care
          </p>
          <h1 className="text-primary font-primary text-xl md:text-3xl font-semibold text-center md:text-left">
            Meilleurs soins pour votre bonne santé
          </h1>
          <p className="text-[#353535] text-sm md:text-base leading-relaxed">
            Au cœur du Plateau de Saclay, le Centre Médico-esthétique Saclay
            Care ouvre ses portes dans un espace chaleureux, conçu pour votre
            bien-être. Fondé par le Dr Ahmed BANANEH et le Dr Ola BANANEH-HEBBO,
            notre centre est le fruit d'une vision commune : offrir une prise en
            charge complète, alliant compétences médicales pluridisciplinaires
            et approche bienveillante.
          </p>

          {/* Section 1 */}
          <p className="text-primary text-base md:text-lg font-semibold mt-4">
            Critères de qualité des soins / de la prise en charge des patients:
          </p>
          <div className="grid grid-cols-2 gap-y-2 md:gap-y-2">
            {[
              "Continuité",
              "Efficacité",
              "Globalité",
              "Toujours à l'écoute",
              "Sécurité",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CircleIcon />
                <p className="text-sm md:text-base font-medium text-primary">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Section 2 */}
          <p className="text-primary text-base md:text-lg font-semibold mt-6">
            Critères de qualité des services du centre:
          </p>
          <div className="grid grid-cols-2 gap-y-2 md:gap-y-2">
            {[
              "Accessibilité (financière, géographique)",
              "Equité",
              "Favoriser l'accès au soin",
              "Prise en compte des besoins",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CircleIcon />
                <p className="text-sm md:text-base font-medium text-primary">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[#353535] text-sm md:text-base leading-relaxed mt-6">
            Notre mission est de garantir des soins de qualité accessibles à
            tous et de renforcer la relation entre les patients et les médecins.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsDefinition;
