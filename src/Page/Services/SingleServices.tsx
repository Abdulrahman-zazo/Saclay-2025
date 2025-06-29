import { Link, useParams } from "react-router-dom";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";

import Loader from "../../Constant/Loader";
import { ArrowRight } from "react-feather";
import { useGetServicesByIdQuery } from "../../app/features/Services/ServicesApi";

function SingleServices() {
  const { Services_id } = useParams();
  const { data, isLoading } = useGetServicesByIdQuery(Services_id as string);

  return (
    <div className="font-secondary">
      {/* Header with background image and overlay */}
      <div
        className="pt-[120px] h-[400px] w-full bg-center bg-cover relative"
        style={{ backgroundImage: `url(${data?.Service.image_url})` }}
      >
        <div className="absolute inset-0 bg-white/60" />
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dmn6uzy82/image/upload/v1750882654/overlay-top_pcsupp.png')] opacity-80 bg-cover bg-center" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-left md:text-center px-6">
            <p className="uppercase text-primary text-[18px] font-normal tracking-widest">
              Accueil / Services
            </p>
            <h1 className="text-primary font-primary text-[32px] md:text-[48px] font-semibold">
              {data?.Service.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      {!isLoading ? (
        <div className="w-[80%] max-w-screen-xl mx-auto my-10">
          <div className="flex flex-col gap-6 text-text text-[16px] leading-[160%] font-secondary">
            <p>{data?.Service.one_description}</p>
            <p>{data?.Service.second_description}</p>

            <Link
              to="/"
              className="flex items-center gap-2 text-secondary font-medium text-[14px] hover:text-primary transition"
            >
              <span>Accueil</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="my-10">
          <Loader />
        </div>
      )}

      <ContactCopmonent />
    </div>
  );
}

export default SingleServices;
