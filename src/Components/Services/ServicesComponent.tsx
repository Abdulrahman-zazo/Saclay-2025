import "./ServicesComponent.css";
import { Link } from "react-router-dom";

import type { Service, Specialty } from "../../Types";

function ServicesComponent({
  Specialties,
  Services,
}: {
  Specialties: Specialty[];
  Services: Service[];
}) {
  //   const [text, settext] = useState({
  //     text_1: Specialties[0]?.one_description?.substring(0, 200) || "",
  //   });
  //   const [servicesData, setservicesData] = useState();
  //   const [selectedService, setSelectedService] = useState(Specialties[0]?.id || "");

  //   useEffect(() => {
  //     const filteredServices = Services?.filter(
  //       (service) => service.specialty_id === selectedService
  //     );
  //     setservicesData(filteredServices);
  //   }, [selectedService]);

  //   const handleServiceClick = (Specialtie) => {
  //     setSelectedService(Specialtie.id);
  //     settext({
  //       text_1: Specialtie.one_description,
  //     });
  //   };

  return <>لحظات</>;
}

export default ServicesComponent;

// <div className="Initial-Services" id="Services">
//   <p className="second-title">Des soins EN LESQUELS vous pouvez croire</p>
//   <h1 className="first-title">Nos services</h1>
//   <div className="view-Services">
//     <div className="btns-services">
//       {data?.slice(0, 4).map((Specialtie) => (
//         <div
//           className={`btn-service${
//             selectedService === Specialtie.id ? "selected" : ""
//           }`}
//           key={Specialtie?.id}
//           onClick={() => handleServiceClick(Specialtie)}
//         >
//           <span>
//             {/* <img
//               src={selectedService === Specialtie.id
//                 ? "../../assets/Icons/logo-w.png"
//                 : "../../assets/Icons/icon-logo.png")}
//               width={35}
//               alt="logo"
//             /> */}
//           </span>
//           <p
//             className={`btn-service-text${
//               selectedService === Specialtie.id ? "selected" : ""
//             }`}
//           >
//             {Specialtie?.name}
//           </p>
//         </div>
//       ))}
//     </div>

//     <div className="text-services">
//       <h2>Le bien être de nos patients est notre priorité.</h2>
//       <span className="description-service">
//         {text
//           ? text?.text_1?.substring(0, 200)
//           : data[0].one_description?.substring(0, 200)}
//         ..
//       </span>
//       <div className="services-grid-text-services">
//         {servicesData?.map((el) => (
//           <Link
//             to={`/Services/${el.id}`}
//             className="services-text-with-circle"
//             key={el.id}
//             onClick={() =>
//               window.scrollTo({
//                 top: 0,
//                 behavior: "smooth",
//               })
//             }
//           >
//             <div className="services-icon-text-with-circle">
//               <Circle />
//             </div>
//             <p className="services-p-text-with-circle">{el.name}</p>
//           </Link>
//         ))}
//       </div>

//       <div className="learn-more-btn-services-position">
//         <Link
//           to={`/spécialités/${selectedService}`}
//           onClick={() =>
//             window.scrollTo({
//               top: 0,
//               behavior: "smooth",
//             })
//           }
//           className="learn-more-btn-services"
//         >
//           <div>En savoir plus</div>
//           <div className="learn-more-icon-services">
//             <ArrowRight />
//           </div>
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>
