import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Tarifs.css";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";

import TarifsTables from "../../Components/TarifsTables/TarifsTables";
import { useGetContactQuery } from "../../app/features/Contacts/contactApi";
function Tarifs() {
  const { data } = useGetContactQuery({});

  return (
    <div>
      <Navbar />
      <div className="Header-contact-section">
        <div className="Header-contact">
          <div className="header-contact-content">
            <p>Accueil / Tarifs</p>
            <h1>Tarifs</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="tarifs">
          <p>
            Au centre Saclay care, nous croyons à la transparence avec nos
            patients, et proposons des prix justes.
          </p>
          <h1>Nos tarifs d’épilation laser à la séance</h1>
          <br />
          <a
            href={`${data?.Contact.doctolib_url}`}
            target="_blank"
            rel="noreferrer"
          >
            Prise de RDV
          </a>
        </div>
        <TarifsTables />
      </div>
      <ContactCopmonent />
      <Footer />
    </div>
  );
}

export default Tarifs;
