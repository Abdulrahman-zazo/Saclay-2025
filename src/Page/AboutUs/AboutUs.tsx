import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import RecommendationComponent from "../../Components/Recommendation/Recommendation";
import AboutUsDefinition from "./UI-AboutUs/AboutUsDefinition";

function AboutUs() {
  return (
    <div className="font-secondary">
      {/* Header Section */}
      <div className="pt-20 md:pt-[120px]">
        <div
          className="
            h-[250px] md:h-[250px] 
            bg-cover bg-center bg-no-repeat 
            bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860849/about-us-header_gyz1lj.jpg')] 
            max-[900px]:bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750860845/specialties-header-mobile_y5alic.webp')]
          "
        >
          <div className="w-full max-w-screen-xl mx-auto flex flex-col justify-center text-left pt-20 px-4 md:px-0 md:w-[40%] md:ml-[200px]">
            <p className="uppercase text-secondary text-[18px] font-normal tracking-widest max-[900px]:text-center max-[900px]:text-[16px] max-[900px]:text-secondary font-secondary">
              Accueil / À propos
            </p>
            <h1 className="text-primary font-primary text-[48px] font-semibold mt-1 max-[900px]:text-center max-[900px]:text-[28px]">
              À propos de nous
            </h1>
          </div>
        </div>
      </div>

      {/* Rest of page */}
      <AboutUsDefinition />
      <RecommendationComponent />
      <ContactCopmonent />
    </div>
  );
}

export default AboutUs;
