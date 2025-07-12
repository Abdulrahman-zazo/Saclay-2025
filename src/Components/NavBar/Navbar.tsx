import { useState } from "react";
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
import { ChevronDown, Menu, X } from "react-feather";
import type { Specialty } from "../../Types";
import { useSpecialties } from "../../Hooks/useSpecialties";
import { useContact } from "../../Hooks/useContact";
import { UseLoading } from "../../Hooks/useLoading";

const SpecialtiesDropdown = ({ specialties }: { specialties: Specialty[] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        title="Spécialités"
        className="flex items-center gap-1   tracking-wide  py-2 hover:text-secondary transition"
        onClick={() => setOpen(!open)}
      >
        <span>Spécialités</span>
        <ChevronDown className="w-4 h-4 " />
      </button>

      {open && (
        <div className="absolute left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-md z-50">
          {specialties.map((item) => (
            <Link
              key={item.id}
              to={`/spécialités/${item.id}`}
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const specialties = useSpecialties() || [];
  const contact = useContact();
  const Loading = UseLoading();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-secondary">
      {/* Top Bar */}

      {Loading.isLoadingContact ? (
        <div className="bg-white hidden md:flex justify-between items-center px-6 py-4 shadow-sm animate-pulse">
          {/* عنصر نائب للشعار */}
          <div className="bg-gray-200 rounded-md w-[150px] h-[30px]"></div>

          <div className="flex flex-row md:flex gap-6">
            {/* عرض 3 عناصر هيكلية */}
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-4">
                {/* عنصر نائب للأيقونة */}
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <div>
                  {/* عنصر نائب للعنوان */}
                  <div className="h-4 bg-gray-200 rounded w-20 mb-1"></div>
                  {/* عنصر نائب للقيمة */}
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white hidden  md:flex justify-between items-center px-6 py-2 shadow-sm">
          <img
            src={LogoPrimary}
            alt="Logo"
            className="hidden w-[150px] md:inline md:w-[150px]"
          />
          <div className="flex flex-row md:flex gap-6">
            {[
              {
                icon: PhoneImage,
                label: "Téléphone",
                value: contact?.phone_number,
                href: `tel:${contact?.phone_number}`,
                title: "Téléphone",
              },
              {
                icon: locationImage,
                label: "Adresse",
                value: "2 Sentier de la Voie Verte - 91400 Orsay",
                href: "https://maps.app.goo.gl/eCmdzidAhrUDUVRVA",
                title: "2 Sentier de la Voie Verte - 91400 Orsay",
              },
              {
                icon: ParkingImage,
                label: "Parking",
                value: "Du bois des Rames (à 100 m)",
                href: "https://maps.app.goo.gl/35aKnnsddDNXmDgQ6",
                title: "Du bois des Rames (à 100 m)",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
                <div>
                  <p className="text-sm text-secondary">{item.label}</p>
                  <a
                    href={item.href}
                    title={item.title}
                    className="text-xs md:text-sm text-primary hover:text-secondary transition"
                  >
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Nav */}
      <div className="bg-primary flex justify-between items-center px-6 py-3">
        <Link to="/" className="md:hidden">
          <img src={LogoSecondary} alt="Logo" className="w-[150px]" />
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-white text-sm md:text-base">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/À-propos-de-nous">À propos de nous</Link>
          </li>
          <li>
            <SpecialtiesDropdown specialties={specialties} />
          </li>
          <li>
            <Link to="/tarifs">Tarifs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Appointment Button */}
        <a
          href={contact?.doctolib_url}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center bg-light-blue text-primary text-sm font-medium py-2 px-4 rounded-full hover:bg-light-blue transition"
        >
          <span>Prise de RDV</span>
          <img src={doctolibtext} alt="" className="w-[45px] ml-2" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          title="open menu"
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-light-blue text-primary shadow-inner md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6">
            {["Accueil", "À propos de nous", "Tarifs", "Contact"].map(
              (label, i) => (
                <li key={i}>
                  <Link
                    to={
                      label === "Accueil"
                        ? "/"
                        : `/${label.toLowerCase().replace(/\s/g, "-")}`
                    }
                    className="text-lg font-medium hover:text-secondary transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
            <SpecialtiesDropdown specialties={specialties} />
            <a
              href={contact?.doctolib_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center bg-primary text-white rounded-full py-2 px-6 mt-4 hover:bg-secondary transition"
            >
              <span>Prise de RDV</span>
              <img src={doctolibtext2} alt="" className="w-[30px] ml-2" />
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}
