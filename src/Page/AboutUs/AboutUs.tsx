import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/Navbar";
import RecommendationComponent from "../../Components/Recommendation/Recommendation";

import "./AboutUs.css";
import AboutUsDefinition from "./UI-AboutUs/AboutUsDefinition";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="Header-aboutus-section">
        <div className="Header-aboutus">
          <div className="header-aboutus-content">
            <p>Accueil / À propos</p>
            <h1>À propos de nous</h1>
          </div>
        </div>
      </div>
      <AboutUsDefinition />
      <div>
        <RecommendationComponent />
      </div>
      <ContactCopmonent />
      <Footer />
    </div>
  );
}

export default AboutUs;
