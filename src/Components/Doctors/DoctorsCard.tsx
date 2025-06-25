import { Circle } from "lucide-react";
import "./Doctors.css";
import type { Doctor } from "../../Types";

function Doctors({
  slice,
  data,
  specialtyname,
}: {
  slice?: number;
  data: Doctor[];

  specialtyname?: string;
}) {
  return (
    data?.length > 0 && (
      <div className="doctors-cards ">
        <p> SOINS DE CONFIANCE</p>
        <h1>
          {specialtyname ? `Les médecins en ${specialtyname}` : "	Nos médecins"}
        </h1>
        <div className="Doctors">
          {data?.slice(0, slice).map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img src={doctor?.image_url} alt={doctor.name} />
              <p className="name-doctor">{doctor.name}</p>
              {specialtyname ? (
                <p className="doctor-specialties">{specialtyname}</p>
              ) : (
                <p className="doctor-specialties">{doctor.specialties_names}</p>
              )}
              <div className="description">
                <div className="description-doctor">
                  <div className="title-description-doctor">
                    <Circle className="icon-description" />À propos du médecin
                  </div>
                  <div className="text-description-doctor">
                    {doctor.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default Doctors;
