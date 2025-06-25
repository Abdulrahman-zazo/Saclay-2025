import DoctorsCard from "./DoctorsCard";
import "./InitialDoctors.css";
import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";
import { useDoctors } from "../Context";
function InitialDoctors({ slice }: { slice: number }) {
  const doctors = useDoctors();

  return (
    <div className="Initial_Doctors">
      <DoctorsCard slice={slice} data={doctors || []} />

      <div>
        <Link
          to={"/médecins"}
          className="learn-more-btn-doctor"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <div>En savoir plus</div>
          <div className="learn-more-icon-doctor">
            <ArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default InitialDoctors;
