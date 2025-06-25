import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import DoctorsCard from "../../Components/Doctors/DoctorsCard";
import "./Doctors.css";

import { useDoctors } from "../../Components/Context";
function Doctors() {
  const Doctors = useDoctors();
  // Doctors
  return (
    <div>
      <Navbar />
      <div className="Header-doctor-section">
        <div className="Header-doctor">
          <div className="header-doctor-content">
            <p>Accueil / Médecins</p>
            <h1>Nos médecins</h1>
          </div>
        </div>
      </div>
      <div className="all-doctors">
        <DoctorsCard data={Doctors || []} />
      </div>

      <Footer />
    </div>
  );
}

export default Doctors;
