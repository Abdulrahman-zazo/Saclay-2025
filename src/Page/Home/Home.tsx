import Navbar from "../../Components/NavBar/Navbar";

import ScrollToTop from "../../utils/ScrollToTop";
import Footer from "../../Components/Footer/Footer";
import InitialDoctors from "../../Components/Doctors/InitialDoctors";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import "./Home.css";
import Header from "./UI-Home/Header/Header";
import InitialDefinition from "./UI-Home/Initial_Definition/InitialDefinition";
import InitialServices from "./UI-Home/Initial_Service/InitialServices";

function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Header />
      <InitialDefinition />
      <InitialServices />
      <InitialDoctors slice={3} />
      <ContactCopmonent />
      <Footer />
    </>
  );
}

export default Home;
