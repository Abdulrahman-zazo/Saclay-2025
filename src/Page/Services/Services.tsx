import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import Recommendation from "../../Components/Recommendation/Recommendation";
import ServicesInSpecialty from "../../Components/Services/ServicesInSpecialty";

import ScrollToHash from "../../utils/ScrollToHash";

import { useServices } from "../../Components/Context";
function Services() {
  const service = useServices();
  return (
    <div>
      <ScrollToHash />
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default Services;
