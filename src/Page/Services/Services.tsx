import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import Recommendation from "../../Components/Recommendation/Recommendation";
import ServicesInSpecialty from "../../Components/Services/ServicesInSpecialty";
import { useServices } from "../../Hooks/useServices";

import ScrollToHash from "../../utils/ScrollToHash";

function Services() {
  const service = useServices();
  return (
    <div>
      <ScrollToHash />

      <div className="Header-specialties-section">
        <div className="Header-specialties">
          <div className="header-specialties-content">
            <p>Accueil / Services</p>
            <h1> Services</h1>
          </div>
        </div>
      </div>
      <ServicesInSpecialty data={service || []} specialtyname="" />
      <Recommendation />
      <ContactCopmonent />
    </div>
  );
}

export default Services;
