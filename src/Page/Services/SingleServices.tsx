import { Link, useParams } from "react-router-dom";
import ContactCopmonent from "../../Components/Contact/ContactCopmonent";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/Navbar";

import "./singleServices.css";

import Loader from "../../Constant/Loader";

import { ArrowRight } from "lucide-react";
import { useGetServicesByIdQuery } from "../../app/features/Services/ServicesApi";

function SingleServices() {
  const param = useParams();

  const { Services_id } = param;
  const { data, isLoading } = useGetServicesByIdQuery(Services_id as string);

  return (
    <div>
      <Navbar />
      <div
        className="Header-services-section"
        style={{
          backgroundImage: ` url(${data?.Service.image_url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "300px",
          objectFit: "cover",
        }}
      >
        <div className="Header-services">
          <div className="header-services-content">
            <p>Accueil / Services</p>
            <h1>{data?.Service.name}</h1>
          </div>
        </div>
      </div>
      {!isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="show-services">
          <div className="show-services-text">
            <p>{data?.Service.one_description} </p>
            <p>{data?.Service.second_description} </p>
            <Link to={`/`} className="learn-more-btn-services-card">
              <div>Accueil</div>
              <div className="learn-more-icon-services-card">
                <ArrowRight />
              </div>
            </Link>
          </div>
        </div>
      )}{" "}
      <ContactCopmonent />
      <Footer />
    </div>
  );
}

export default SingleServices;
