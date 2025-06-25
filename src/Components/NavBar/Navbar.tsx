import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  doctolibtext,
  doctolibtext2,
  locationImage,
  LogoPrimary,
  LogoSecondary,
  ParkingImage,
  PhoneImage,
} from "../../assets/Images";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Specialty } from "../../Types";
import { useContact, useSpecialties } from "../Context";

interface Props {
  specialties: Specialty[];
}
const SpecialtiesDropdown = ({ specialties }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex text-white items-center gap-1 px-4 py-2 text-base font-semibold  
         transition-colors tracking-widest"
        onClick={() => setOpen(!open)}
      >
        <span>Spécialités</span>
        <ChevronDown className="text-xs mt-[2px]" />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1 w-60 border bg-white border-gray-200 rounded-md shadow-lg z-50 flex flex-col text-gray-900">
          {specialties?.map((item) => (
            <div key={item.id}>
              <Link
                to={`/spécialités/${item.id}`}
                onClick={() => {
                  setOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block px-4 py-2 text-base    text-gray-900  hover:bg-gray-100 "
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function Navbar() {
  const [openList, setOpenList] = useState(false);
  const Contact = useContact();

  // Specialties
  const Specialties = useSpecialties();

  return (
    <div className="navbar">
      <div className="top-nav">
        <div className="primary-logo">
          <img src={LogoPrimary} alt="logo" />
        </div>
        <div className="contact-nav">
          <div className="contat-nav-section">
            <div className="contact-icon-nav">
              <img src={PhoneImage} alt="icon-contact" />
            </div>
            <div className="contact-text-nav">
              <p className="contact-text-nav-title">Téléphone</p>
              <p className="contact-text-nav-second-title">
                <a href={`tel:${Contact?.phone_number}`} target="_blank">
                  {" "}
                  {Contact?.phone_number}
                </a>
              </p>
            </div>
          </div>

          <div className="contat-nav-section">
            <div className="contact-icon-nav">
              <img src={locationImage} alt="icon-contact" />
            </div>
            <div className="contact-text-nav">
              <p className="contact-text-nav-title"> Adresse</p>
              <p className="contact-text-nav-second-title">
                <a
                  href="https://maps.app.goo.gl/eCmdzidAhrUDUVRVA"
                  target="_blank"
                >
                  {" "}
                  2 Sentier de la Voie Verte - 91400 Orsay
                </a>
              </p>
            </div>
          </div>
          <div className="contat-nav-section">
            <div className="contact-icon-nav">
              <img src={ParkingImage} alt="icon-contact" />
            </div>
            <div className="contact-text-nav">
              <p className="contact-text-nav-title">Parking</p>
              <p className="contact-text-nav-second-title">
                <a
                  href="https://maps.app.goo.gl/35aKnnsddDNXmDgQ6"
                  target="_blank"
                >
                  Du bois des Rames (à 100 m)
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="primary-logo-mobile">
          <Link to={"/"}>
            <img src={LogoSecondary} alt="logo" />
          </Link>
        </div>
        <div className={openList ? "list-nav-mobile" : "list-nav"}>
          <ul>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
            <li>
              <Link to={"/À-propos-de-nous"}>À propos de nous</Link>
            </li>

            <SpecialtiesDropdown specialties={Specialties || []} />

            <li>
              <Link to={"/tarifs"}>Tarifs</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <div className="Appointment-btn-mobile">
            <a
              href={`${Contact?.doctolib_url}`}
              target="_blank"
              rel="noreferrer"
            >
              Prise de RDV (
              <img
                src={doctolibtext2}
                width={30}
                alt="Prise de RDV"
                style={{ margin: "0px 10px" }}
              />
              )
            </a>
          </div>
        </div>
        <div className="Appointment-btn">
          <a href={`${Contact?.doctolib_url}`} target="_blank" rel="noreferrer">
            Prise de RDV (
            <img
              src={doctolibtext}
              width={50}
              alt="Prise de RDV"
              style={{ margin: "0px 5px" }}
            />
            )
          </a>
        </div>
        <div className="list-in-mobile" onClick={() => setOpenList(!openList)}>
          {openList ? <X /> : <Menu />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
