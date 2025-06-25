import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import "./Specialties.css";
import { Link } from "react-router-dom";

import type { Specialty } from "../../Types";
import { IconLogo } from "../../assets/Images";
import { ArrowRight } from "lucide-react";
import { useSpecialties } from "../../Components/Context";

function Specialties() {
  // Specialties

  const data = useSpecialties();
  return (
    <div>
      <Navbar />
      <div className="Header-specialties-section">
        <div className="Header-specialties">
          <div className="header-specialties-content">
            <p>Accueil / spécialités</p>
            <h1>Nos spécialités</h1>
          </div>
        </div>
      </div>

      <div className="Specialties-cards">
        {data?.map((specialtie: Specialty) => (
          <div className="specialtie-card" key={specialtie.id}>
            <img src={specialtie.image_url} alt={specialtie.name} />
            <div className="abs-img">
              <img src={IconLogo} alt={specialtie.name} />
            </div>
            <h3>{specialtie.name}</h3>
            <p> {specialtie?.one_description?.substring(0, 50)}... </p>
            <Link
              to={`/spécialités/${specialtie.id}`}
              className="learn-more-line"
            >
              <span>En savoir plus</span>
              <span>
                <ArrowRight style={{ marginTop: "3px", color: "#232B61" }} />
              </span>
            </Link>
          </div>
        ))}
      </div>

      <ContactCopmonent />
      <Footer />
    </div>
  );
}

export default Specialties;
