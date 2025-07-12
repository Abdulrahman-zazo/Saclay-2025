import { Circle } from "react-feather";
import type { Doctor } from "../../Types";

function Doctors({
  slice,
  data,
  specialtyname,
  isLoading,
}: {
  slice?: number;
  data: Doctor[];
  isLoading: boolean;
  specialtyname?: string;
}) {
  return isLoading ? (
    <div className="flex flex-col items-center w-[100%] mx-auto my-10">
      <div className="h-5 bg-gray-200 rounded-md w-48 mb-4 animate-pulse"></div>

      <div className="h-9 bg-gray-200 rounded-md w-64 my-2 animate-pulse"></div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {[...Array(slice || 2)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-md flex flex-col items-center pb-5 animate-pulse"
          >
            <div className="w-full h-[350px] bg-gray-100"></div>

            <div className="h-5 bg-gray-100 rounded-md w-1/2 mt-3"></div>

            <div className="h-4 bg-gray-100 rounded-md w-1/3 mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    data?.length > 0 && (
      <div className="flex flex-col items-center w-[100%] mx-auto my-10">
        <p className="text-secondary font-secondary text-sm md:text-base font-bold uppercase tracking-widest">
          Soins de confiance
        </p>
        <h1 className="text-primary font-primary text-2xl md:text-4xl font-semibold my-2 text-center">
          {specialtyname ? `Les médecins en ${specialtyname}` : "Nos médecins"}
        </h1>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {data.slice(0, slice).map((doctor) => (
            <div
              key={doctor.id}
              className="relative overflow-hidden bg-light-blue/80 rounded-md flex flex-col items-center text-primary font-secondary pb-5 group"
            >
              <img
                loading="lazy"
                src={doctor.image_url}
                alt={doctor.name}
                className="w-full md:h-[350px] object-cover"
              />
              <p className="text-sm text-primary md:text-base font-normal pt-3">
                {doctor.name}
              </p>
              <p className="text-xs md:text-sm font-bold uppercase tracking-wide mt-1">
                {specialtyname ?? doctor.specialties_names}
              </p>

              <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5">
                <div className="flex flex-col text-left gap-3">
                  <div className="flex items-center font-semibold text-base">
                    <Circle className="text-secondary w-4 h-4 mr-2" />À propos
                    du médecin
                  </div>
                  <div className="text-sm leading-snug">
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
