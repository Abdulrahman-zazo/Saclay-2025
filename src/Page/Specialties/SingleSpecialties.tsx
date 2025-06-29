import { useParams } from "react-router-dom";

import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import DoctorsCard from "../../Components/Doctors/DoctorsCard";
import Services from "../../Components/Services/ServicesInSpecialty";

import {
  useGetAllDoctorsInSpecialtyQuery,
  useGetAllServicesInSpecialtyQuery,
  useGetSpecialtyByIdQuery,
} from "../../app/features/Specialty/SpecialtyApi";
import { Phone } from "react-feather";

function SingleSpecialties() {
  const { specialtie_id } = useParams();
  const { data: specialtyData } = useGetSpecialtyByIdQuery(
    specialtie_id as string
  );
  const { data: doctorRes } = useGetAllDoctorsInSpecialtyQuery(
    specialtie_id as string
  );
  const { data: servicesRes } = useGetAllServicesInSpecialtyQuery(
    specialtie_id as string
  );

  return (
    <div className="font-secondary pt-20 sm:pt-34">
      {/* Header with background image and overlay */}
      <div
        className="pt-[120px] h-[400px] w-full bg-center bg-cover relative"
        style={{
          backgroundImage: `url(${specialtyData?.Specialty.header_image_url})`,
        }}
      >
        <div className="absolute inset-0 bg-white/60" />
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750882654/overlay-top_pcsupp.png')]  bg-cover bg-center" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-left md:text-center px-6">
            <p className="uppercase text-primary text-[18px] font-normal tracking-widest">
              Accueil / spécialités
            </p>
            <h1 className="text-primary font-primary text-[32px] md:text-[48px] font-semibold">
              {specialtyData?.Specialty?.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="w-[80%] max-w-screen-xl mx-auto sm:my-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-text text-[16px] leading-relaxed space-y-4">
          <p>{specialtyData?.Specialty?.one_description}</p>
          <p>{specialtyData?.Specialty?.second_description}</p>
          <div className="flex items-center text-secondary text-[16px] gap-2 font-medium">
            <Phone className="w-5 h-5" />
            <span>{specialtyData?.Specialty?.phone_number}</span>
          </div>
        </div>
      </section>
      <div className="flex justify-center w-full">
        <img
          src={specialtyData?.Specialty?.image_url}
          alt={specialtyData?.Specialty?.name}
          className="w-full max-w-4xl h-auto my-4 rounded-md object-cover"
        />
      </div>

      {/* Services Section */}
      <section id="Servicesspecialties" className="my-10">
        <Services
          data={servicesRes?.Services}
          specialtyname={specialtyData?.Specialty?.name}
        />
      </section>

      {/* Doctors Section */}
      <section className="w-[90%] max-w-screen-xl mx-auto my-10">
        <DoctorsCard
          data={doctorRes?.Doctors}
          specialtyname={specialtyData?.Specialty?.name}
        />
      </section>

      <ContactCopmonent />
    </div>
  );
}

export default SingleSpecialties;
