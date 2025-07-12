import { Link } from "react-router-dom";
import { Facebook, Instagram } from "react-feather";
import { doctolib, doctolibtext2, LogoNyve } from "../../assets/Images";
import { useContact } from "../../Hooks/useContact";
import { UseLoading } from "../../Hooks/useLoading";

function Footer() {
  const Contact = useContact();
  const Loading = UseLoading();
  const year = new Date().getFullYear();

  return Loading.isLoadingContact ? (
    <footer className="bg-primary text-white font-secondary py-10 ">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-wrap gap-10 justify-between items-start max-[900px]:grid max-[900px]:grid-cols-2 animate-pulse">
        {/* Logo Placeholder */}
        <div className="col-span-2 flex justify-center md:justify-start">
          <div className="bg-gray-400/50 rounded-md w-[180px] h-[45px]"></div>
        </div>

        {/* Important Links Placeholder */}
        <div>
          <div className="h-4 bg-gray-400/50 rounded w-32 mb-4"></div>
          <ul className="space-y-2">
            <li className="h-3 bg-gray-400/50 rounded w-24"></li>
            <li className="h-3 bg-gray-400/50 rounded w-20"></li>
            <li className="h-3 bg-gray-400/50 rounded w-28"></li>
            <li className="h-3 bg-gray-400/50 rounded w-24"></li>
          </ul>
        </div>

        {/* Contact Info Placeholder */}
        <div>
          <div className="h-4 bg-gray-400/50 rounded w-36 mb-4"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-400/50 rounded w-48"></div>
            <div className="h-3 bg-gray-400/50 rounded w-48"></div>
            <div className="h-3 bg-gray-400/50 rounded w-56"></div>
            <div className="h-3 bg-gray-400/50 rounded w-52"></div>
          </div>
        </div>

        {/* Doctolib Button Placeholder */}
        <div className="flex flex-col items-center md:items-start col-span-2 md:justify-start">
          <div className="h-4 bg-gray-400/50 rounded w-40 mb-4"></div>
          <div className="h-12 bg-gray-400/50 rounded-full w-48"></div>
        </div>
      </div>

      {/* Divider Placeholder */}
      <div className="w-[90%] max-w-[1200px] mx-auto border-t border-gray-700 my-6" />

      {/* Bottom Row Placeholder */}
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="space-y-2">
          <div className="h-3 bg-gray-400/50 rounded w-64"></div>
          <div className="h-3 bg-gray-400/50 rounded w-48 mx-auto"></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gray-400/50 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-400/50 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-400/50 rounded-full"></div>
        </div>
      </div>
    </footer>
  ) : (
    <footer className="bg-primary text-white font-secondary py-10">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-wrap gap-10 justify-between items-start max-[900px]:grid max-[900px]:grid-cols-2">
        {/* Logo */}
        <div className="col-span-2 flex justify-center md:justify-start">
          <img
            src={LogoNyve}
            alt="Logo"
            className="w-[180px] md:w-[200px]"
            loading="lazy"
          />
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-sm md:text-base font-semibold mb-4 uppercase tracking-wider">
            Liens importants
          </h3>
          <ul className="space-y-2 text-xs md:text-sm">
            {["Prise de RDV", "Médecins", "Services", "À propos de nous"].map(
              (label, i) => (
                <li key={i}>
                  <Link
                    to={
                      label === "Prise de RDV"
                        ? "/"
                        : `/${label.toLowerCase().replace(/\s/g, "-")}`
                    }
                    className="hover:text-secondary transition"
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm md:text-base font-semibold mb-4 uppercase tracking-wider">
            Contactez-nous
          </h3>
          <div className="space-y-3 text-xs md:text-sm">
            <p>
              Téléphone:{" "}
              <a
                title="phone number"
                href={`tel:${Contact?.phone_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                {Contact?.phone_number}
              </a>
            </p>
            <p>
              Mail:{" "}
              <a
                title="email"
                href={`mailto:${Contact?.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                {Contact?.email}
              </a>
            </p>
            <p>
              Adresse:{" "}
              <a
                href="https://maps.app.goo.gl/eCmdzidAhrUDUVRVA"
                target="_blank"
                title="Location"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                2 Sentier de la Voie Verte - 91400 Orsay
              </a>
            </p>
            <p>
              Parking:{" "}
              <a
                title="Location Parking"
                href="https://maps.app.goo.gl/35aKnnsddDNXmDgQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary"
              >
                Du bois des Rames (à 100m)
              </a>
            </p>
          </div>
        </div>

        {/* Doctolib Button */}
        <div className="flex flex-col items-center md:items-start col-span-2  md:justify-start">
          <h3 className="text-sm md:text-base font-semibold mb-4 uppercase tracking-wider">
            Prenez rendez-vous
          </h3>
          <a
            title="doctolib"
            href={Contact?.doctolib_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-light-blue transition"
          >
            <span>Prise de RDV</span>
            <img
              src={doctolibtext2}
              alt="Doctolib"
              className="w-[55px] ml-3"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[90%] max-w-[1200px] mx-auto border-t border-light-blue my-6" />

      {/* Bottom Row */}
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-4 text-xs md:text-sm">
        <div>
          <p>© {year} CENTRE DE SOINS DE SACLAY</p>
          <a
            title="VEGUS CODE"
            href="https://veguscode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
          >
            par l'équipe de VEGUS CODE
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            title="facebook "
            href={Contact?.facebook_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-light-blue rounded-full text-primary hover:bg-secondary transition"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            title="whatsapp "
            href={Contact?.whatsapp_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-light-blue rounded-full text-primary hover:bg-secondary transition"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            title="doctolib "
            href={Contact?.doctolib_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-light-blue rounded-full hover:bg-secondary transition"
          >
            <img
              src={doctolib}
              alt="Doctolib"
              className="w-3.5 h-3.5"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
