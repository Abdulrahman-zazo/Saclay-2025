import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import { Link } from "react-router-dom";
import type { Specialty } from "../../Types";
import { IconLogo } from "../../assets/Images";
import { ArrowRight } from "react-feather";
import { useSpecialties } from "../../Components/Context";

function Specialties() {
  const data = useSpecialties();

  return (
    <div className="font-secondary">
      {/* Header */}
      <div className="pt-20 sm:pt-[120px]">
        <div
          className="
            h-[250px] bg-cover bg-center bg-no-repeat 
            bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860849/about-us-header_gyz1lj.jpg')]
            max-[900px]:h-[375px]
            max-[900px]:bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860845/specialties-header-mobile_y5alic.webp')]
          "
        >
          <div className="w-full max-w-screen-xl mx-auto flex flex-col justify-center pt-20 px-4 md:px-0 md:w-[40%] md:ml-[200px]">
            <p className="uppercase text-primary text-[18px] max-[900px]:text-[16px] font-medium tracking-widest max-[900px]:text-center">
              Accueil / spécialités
            </p>
            <h1 className="text-primary font-primary text-[48px] max-[900px]:text-[28px] font-semibold mt-1 max-[900px]:text-center">
              Nos spécialités
            </h1>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="w-[90%] max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto my-10">
        {data?.map((specialtie: Specialty) => (
          <div
            key={specialtie.id}
            className="relative flex flex-col items-start border border-border rounded-lg p-2"
          >
            <img
              src={specialtie.image_url}
              alt={specialtie.name}
              className="w-full h-[250px] object-cover rounded-md max-[900px]:h-[150px]"
            />

            {/* Absolute logo */}
            <div className="absolute top-[230px] right-4 w-10 h-10 bg-primary rounded-full hidden max-[900px]:hidden md:flex items-center justify-center">
              <img src={IconLogo} alt="logo" className="w-6 h-6" />
            </div>

            <h3 className="text-primary text-[24px] max-[900px]:text-[14px] font-medium px-2 pt-3">
              {specialtie.name?.substring(0, 20)}..
            </h3>

            <p className="text-text text-[14px] max-[900px]:text-[12px] px-2 leading-relaxed">
              {specialtie?.one_description?.substring(0, 30)}...
            </p>

            <Link
              to={`/spécialités/${specialtie.id}`}
              className=" text-secondary text-sm max-[900px]:text-xs font-medium px-2 pt-3 bottom-2 flex items-center gap-1 hover:text-primary transition"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>
        ))}
      </div>

      <ContactCopmonent />
    </div>
  );
}

export default Specialties;
