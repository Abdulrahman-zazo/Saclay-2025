import { useParams } from "react-router-dom";
import { Phone } from "react-feather";

import ContactComponent from "../../Components/Contact/ContactCopmonent";
import DoctorsCard from "../../Components/Doctors/DoctorsCard";
import Services from "../../Components/Services/ServicesInSpecialty";

import {
  useGetAllDoctorsInSpecialtyQuery,
  useGetAllServicesInSpecialtyQuery,
  useGetSpecialtyByIdQuery,
} from "../../app/features/Specialty/SpecialtyApi";

// المكون الهيكلي الذي سيظهر أثناء تحميل البيانات الرئيسية
const SingleSpecialtiesSkeleton = () => (
  <div className="font-secondary pt-20 sm:pt-34 animate-pulse">
    {/* عنصر نائب للرأس */}
    <div className="pt-[120px] h-[400px] w-full bg-gray-200 relative">
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-left md:text-center px-6">
          <div className="h-6 bg-gray-300 rounded w-72 mb-4"></div>
          <div className="h-12 bg-gray-300 rounded w-96"></div>
        </div>
      </div>
    </div>

    {/* عنصر نائب للوصف */}
    <section className="w-[80%] max-w-screen-xl mx-auto my-10 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mt-2"></div>
      </div>
    </section>

    {/* عنصر نائب للصورة */}
    <div className="flex justify-center w-full my-4">
      <div className="w-full max-w-4xl h-96 bg-gray-300 rounded-md"></div>
    </div>
  </div>
);

function SingleSpecialties() {
  const { specialtie_id } = useParams();

  // جلب البيانات وحالات التحميل
  const { data: specialtyData, isLoading: isLoadingSpecialtie } =
    useGetSpecialtyByIdQuery(specialtie_id as string);
  const { data: doctorRes, isLoading: isLoadingDoctors } =
    useGetAllDoctorsInSpecialtyQuery(specialtie_id as string);
  const { data: servicesRes } = useGetAllServicesInSpecialtyQuery(
    specialtie_id as string
  );

  // عرض الهيكل أثناء تحميل بيانات التخصص الرئيسية
  if (isLoadingSpecialtie) {
    return <SingleSpecialtiesSkeleton />;
  }

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
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750882654/overlay-top_pcsupp.png')] bg-cover bg-center" />
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
          loading="lazy"
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
          isLoading={isLoadingDoctors}
          data={doctorRes?.Doctors}
          specialtyname={specialtyData?.Specialty?.name}
        />
      </section>

      <ContactComponent />
    </div>
  );
}

export default SingleSpecialties;
