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
      <div
        id="Services"
        className="flex flex-col items-center mx-auto w-[80%] my-10 max-md:w-full max-md:px-4"
      >
        <p className="text-secondary text-sm uppercase tracking-[2.24px] font-bold text-center mb-2">
          Des soins en lesquels vous pouvez croire
        </p>
        <h1 className="text-primary text-2xl md:text-3xl font-semibold text-center mb-6">
          {specialtyname ? `Les services en ${specialtyname}` : "Nos services"}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
          {data?.map((el) => (
            <div
              key={el.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 w-[300px] flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-primary mb-3">
                {el.name}
              </h3>

              <p className="text-gray-600 text-sm mb-6 h-[200px] overflow-hidden">
                {el.one_description?.substring(0, 100)}...
                <br />
                {el.second_description?.substring(0, 200)}...
              </p>

              <Link
                to={`/Services/${el.id}`}
                className="mt-auto inline-flex items-center justify-center text-sm text-secondary hover:text-primary font-medium transition-colors group"
              >
                <span>En savoir plus</span>
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default Services;
