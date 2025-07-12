// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "react-feather";
// import { IconLogo, IconLogoW } from "../../assets/Images";
// import type { Service, Specialty } from "../../Types";
// import { CircleIcon } from "../../assets/CircleIcon";
// import { UseLoading } from "../../Hooks/useLoading";

// function ServicesComponent({
//   Specialties,
//   Services,
// }: {
//   Specialties: Specialty[];
//   Services: Service[];
// }) {
//   const [selectedService, setSelectedService] = useState(
//     Specialties[0]?.id ?? 0
//   );

//   const selectedSpecialty = useMemo(
//     () => Specialties.find((s) => s.id === selectedService),
//     [selectedService, Specialties]
//   );

//   const servicesData = useMemo(
//     () =>
//       Services.filter((service) => service.specialty_id === selectedService),
//     [selectedService, Services]
//   );
//   const Loading = UseLoading();

//   return Loading.isLoadingSpecialties ? (
//     <>loading</>
//   ) : (
//     <div className="w-[80%] px-4 py-10 max-w-7xl mx-auto" id="Services">
//       <p className="text-secondary text-sm font-bold tracking-widest uppercase text-center mb-2">
//         Des soins EN LESQUELS vous pouvez croire
//       </p>
//       <h1 className="text-primary text-3xl font-semibold text-center mb-8">
//         Nos services
//       </h1>

//       <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
//         {/* Sidebar buttons */}
//         <div className="w-full lg:w-1/4 border border-light-blue/50 rounded-lg p-4 flex flex-col items-center gap-2">
//           {Specialties.slice(0, 4).map((specialty) => {
//             const isSelected = selectedService === specialty.id;
//             return (
//               <button
//                 title="select"
//                 key={specialty.id}
//                 onClick={() => setSelectedService(specialty.id)}
//                 className={`w-full flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
//                   isSelected
//                     ? "bg-primary text-white"
//                     : "bg-white text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 <img
//                   src={isSelected ? IconLogoW : IconLogo}
//                   alt="icon"
//                   className="w-8 h-8 mb-2"
//                 />
//                 <span className={`text-sm font-medium text-center`}>
//                   {specialty.name}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         {/* Main content */}
//         <div className="flex-1">
//           <h2 className="text-xl font-semibold text-primary mb-2">
//             Le bien être de nos patients est notre priorité.
//           </h2>
//           <p className="text-gray-600 text-sm leading-relaxed mb-6">
//             {selectedSpecialty?.one_description?.substring(0, 200)}...
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2  gap-y-4 gap-x-4 mb-6">
//             {servicesData.slice(0, 4).map((service) => (
//               <Link
//                 to={`/Services/${service.id}`}
//                 key={service.id}
//                 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                 className="flex items-start text-gray-800 hover:text-secondary transition-colors"
//               >
//                 <CircleIcon className="text-secondary mr-2" />

//                 <span className="text-base font-medium">{service.name}</span>
//               </Link>
//             ))}
//           </div>

//           <div className="flex justify-end">
//             <Link
//               to={`/spécialités/${selectedService}`}
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="flex items-center text-sm text-secondary hover:text-primary font-medium transition-colors"
//             >
//               <span>En savoir plus</span>
//               <ArrowRight className="ml-2 w-4 h-4" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServicesComponent;
import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-feather";
import { IconLogo, IconLogoW } from "../../assets/Images";
import type { Service, Specialty } from "../../Types";
import { CircleIcon } from "../../assets/CircleIcon";
import { UseLoading } from "../../Hooks/useLoading";

function ServicesComponent({
  Specialties,
  Services,
  // تمت إضافة خاصية حالة التحميل
}: {
  Specialties: Specialty[];
  Services: Service[];
}) {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // تحديث الخدمة المحددة عند توفر التخصصات
  useEffect(() => {
    if (Specialties && Specialties.length > 0 && selectedService === null) {
      setSelectedService(Specialties[0].id);
    }
  }, [Specialties, selectedService]);

  const selectedSpecialty = useMemo(
    () => Specialties.find((s) => s.id === selectedService),
    [selectedService, Specialties]
  );

  const servicesData = useMemo(
    () =>
      Services.filter((service) => service.specialty_id === selectedService),
    [selectedService, Services]
  );
  const Loading = UseLoading();
  // عرض الهيكل أثناء التحميل
  if (Loading.isLoadingSpecialties) {
    return (
      <div
        className="w-[80%] px-4 py-10 max-w-7xl mx-auto animate-pulse"
        id="Services"
      >
        {/* عناوين نائبة */}
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* الشريط الجانبي النائب */}
          <div className="w-full lg:w-1/4 border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-full flex flex-col items-center px-3 py-4 rounded-lg bg-gray-100"
              >
                <div className="w-8 h-8 mb-2 bg-gray-300 rounded-full"></div>
                <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>

          {/* المحتوى الرئيسي النائب */}
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-5 h-5 bg-secondary/30 rounded-full mr-2"></div>
                  <div className="h-5 bg-gray-200 rounded w-full"></div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <div className="h-5 w-1/4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // عرض المكون الأصلي بعد انتهاء التحميل
  return (
    <div className="w-[80%] px-4 py-10 max-w-7xl mx-auto" id="Services">
      <p className="text-secondary text-sm font-bold tracking-widest uppercase text-center mb-2">
        Des soins EN LESQUELS vous pouvez croire
      </p>
      <h1 className="text-primary text-3xl font-semibold text-center mb-8">
        Nos services
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Sidebar buttons */}
        <div className="w-full lg:w-1/4 border border-light-blue/50 rounded-lg p-4 flex flex-col items-center gap-2">
          {Specialties.slice(0, 4).map((specialty) => {
            const isSelected = selectedService === specialty.id;
            return (
              <button
                title="select"
                key={specialty.id}
                onClick={() => setSelectedService(specialty.id)}
                className={`w-full flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <img
                  src={isSelected ? IconLogoW : IconLogo}
                  alt="icon"
                  className="w-8 h-8 mb-2"
                />
                <span className={`text-sm font-medium text-center`}>
                  {specialty.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main content */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-primary mb-2">
            Le bien être de nos patients est notre priorité.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {selectedSpecialty?.one_description?.substring(0, 200)}...
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 mb-6">
            {servicesData.slice(0, 4).map((service) => (
              <Link
                to={`/Services/${service.id}`}
                key={service.id}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-start text-gray-800 hover:text-secondary transition-colors"
              >
                <CircleIcon className="text-secondary mr-2" />
                <span className="text-base font-medium">{service.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex justify-end">
            <Link
              to={`/spécialités/${selectedService}`}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center text-sm text-secondary hover:text-primary font-medium transition-colors"
            >
              <span>En savoir plus</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
