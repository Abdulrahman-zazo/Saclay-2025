import DoctorsCard from "./DoctorsCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import { useDoctors } from "../Context";

function InitialDoctors({ slice }: { slice: number }) {
  const doctors = useDoctors();

  return (
    <div className="flex flex-col items-center w-[80%] mx-auto my-[60px] max-[900px]:w-full">
      <DoctorsCard slice={slice} data={doctors || []} />

      <div className="mt-6">
        <Link
          to="/médecins"
          className="flex items-center justify-center text-secondary font-secondary text-[16px] m-5 hover:text-primary transition-all duration-200"
        >
          <span>En savoir plus</span>
          <ArrowRight className="ml-2 w-[18px] h-[18px]" />
        </Link>
      </div>
    </div>
  );
}

export default InitialDoctors;
