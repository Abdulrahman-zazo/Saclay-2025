import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import DoctorsCard from "../../Components/Doctors/DoctorsCard";

import "./SingleSpecialties.css";
import Services from "../../Components/Services/ServicesInSpecialty";

import {
  useGetAllDoctorsInSpecialtyQuery,
  useGetAllServicesInSpecialtyQuery,
  useGetSpecialtyByIdQuery,
} from "../../app/features/Specialty/SpecialtyApi";

import { Phone } from "lucide-react";

function SingleSpecialties() {
  const params = useParams();

  const { specialty_id } = params;
  const { data: specialtyData } = useGetSpecialtyByIdQuery(
    specialty_id as string
  );
  const { data: doctorRes, isLoading } = useGetAllDoctorsInSpecialtyQuery(
    specialty_id as string
  );
  const { data: servicesRes } = useGetAllServicesInSpecialtyQuery(
    specialty_id as string
  );

  return (
    <div>
      <Navbar />

      <div
        className="Headersingle-specialties-section"
        style={{
          backgroundImage: ` url(${specialtyData?.header_image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "600px",
          // Set the desired height
          objectFit: "cover",
        }}
      >
        <div className="Headersingle-specialties">
          <div className="Headersingle-specialties-content">
            <p>Accueil / spécialités</p>
            <h1>{specialtyData?.Specialty?.name}</h1>
            <div className="Headersingle-specialties-btn">
              <Link to="#Servicesspecialties">En savoir plus</Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="show-spesialty">
        <div className="show-spesialty-text" id="Servicesspecialties">
          {/* <h3>{specialtyData?.Specialty?.name}</h3> */}
          <p>{specialtyData?.Specialty?.one_description} </p>
          <p>{specialtyData?.Specialty?.second_description} </p>
          <div className="show-spesialty-icon">
            <span>
              <Phone />
            </span>
            <span>{specialtyData?.Specialty?.phone_number}</span>
          </div>
        </div>
      </div>
      <div className="imageee">
        <img
          src={specialtyData?.Specialty?.image_url}
          alt={specialtyData?.Specialty?.name}
          className="image-sps"
        />
      </div>
      <Services
        data={servicesRes?.Services}
        specialtyname={specialtyData?.Specialty?.name}
      />
      <div className="doctorInSpecialty">
        <DoctorsCard
          data={doctorRes?.Doctors}
          specialtyname={specialtyData?.Specialty?.name}
          isLoading={isLoading}
        />
      </div>

      <ContactCopmonent />
      <Footer />
    </div>
  );
}

export default SingleSpecialties;
