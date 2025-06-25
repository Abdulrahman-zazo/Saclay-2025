import { useGetAllSpecialtiesQuery } from "../../../../app/features/Specialty/SpecialtyApi";
import { IconLogo } from "../../../../assets/Images";
import type { Specialty } from "../../../../Types";
import "./InitialSpecialties.css";
import { Link, useNavigate } from "react-router-dom";

function InitialSpecialties() {
  const nav = useNavigate();
  const { data } = useGetAllSpecialtiesQuery({});

  return (
    <div className="Initial_Specialties" id="Specialties">
      <p>TOUJOURS SOIGNÉ</p>
      <h1>Nos spécialités</h1>
      <div className="btns-specialties">
        {data?.Specialties.slice(0, 4).map((specialtie: Specialty) => (
          <Link
            key={specialtie.id}
            to={`/spécialités/${specialtie.id}`}
            className="btn-specialties"
          >
            <img src={IconLogo} alt="logo" />
            <h4 className="name-specialtie">{specialtie.name}</h4>
          </Link>
        ))}
      </div>
      <div className="view-all-specialties">
        <button onClick={() => nav(`/spécialités`)}>Voir tout</button>
      </div>
    </div>
  );
}

export default InitialSpecialties;
