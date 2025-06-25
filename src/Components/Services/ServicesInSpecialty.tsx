import "./ServicerInSpecialty.css";
import { Link } from "react-router-dom";
import type { Service } from "../../Types";
import { ArrowRight } from "lucide-react";
function Services({
  data,
  specialtyname,
}: {
  data: Service[];
  specialtyname: string;
}) {
  return (
    data?.length > 0 && (
      <div className="specialty-Initial-Services" id="Services">
        <p className="specialty-second-title">
          Des soins en lesquels vous pouvez croire
        </p>
        <h1 className="specialty-first-title">
          {specialtyname ? `Les services en ${specialtyname}` : " Nos services"}
        </h1>
        <div className="services-cards">
          {data?.map((el) => (
            <div
              key={el?.id}
              className="service-card bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                {el?.name}
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                {el?.one_description?.substring(0, 100)}...
                <br />
                {el?.second_description?.substring(0, 200)}...
              </p>

              <Link
                to={`/Services/${el.id}`}
                className="learn-more-btn-services-card mt-auto inline-flex items-center text-sm text-secondary hover:text-primary font-medium transition-colors group"
              >
                <div>En savoir plus</div>
                <div className="learn-more-icon-services-card ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRight />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default Services;
