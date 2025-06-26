import { useState } from "react";
import Loader from "../../Constant/Loader";
import { useGetAllTypesQuery } from "../../app/features/prices/pricesApi";
import { ChevronDown } from "lucide-react";
export interface AreaAndPrice {
  id: number;
  area: string;
  price: string;
  gender: "mâle" | "femelle";
}

export interface TypeItem {
  id: number;
  type: string;
  areas_and_prices: AreaAndPrice[];
}

export interface TypesResponse {
  types: TypeItem[];
}
function TarifsTables() {
  const [selectedGender, setSelectedGender] = useState<
    "all" | "mâle" | "femelle"
  >("all");

  const { data, isLoading } = useGetAllTypesQuery({});
  const [openAccordions, setOpenAccordions] = useState<number[]>(
    data?.types?.[0] ? [data.types[0].id] : []
  );
  const toggleAccordion = (id: number) => {
    setOpenAccordions((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    );
  };

  if (isLoading) return <Loader />;

  return (
    <div className="w-[80%] mx-auto px-4 py-8 space-y-6">
      {data?.types.map((type: TypeItem) => {
        const isOpen = openAccordions.includes(type.id);
        const filteredAreas =
          selectedGender === "all"
            ? type.areas_and_prices
            : type.areas_and_prices.filter(
                (area) => area.gender === selectedGender
              );

        return (
          <div
            key={type.id}
            className="border border-gray-200 rounded-xl shadow-sm overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(type.id)}
              className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 transition"
            >
              <h2 className="text-lg font-bold text-primary">{type.type}</h2>
              <span
                className={`text-gray-500 transform transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <ChevronDown />
              </span>
            </button>

            {/* Accordion Content */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[800px] py-4 px-6" : "max-h-0 py-0 px-6"
              }`}
            >
              {/* Gender Filter */}
              <div className="flex justify-center gap-4 mb-6">
                {["all", "mâle", "femelle"].map((gender) => {
                  const label =
                    gender === "all"
                      ? "Tous"
                      : gender === "mâle"
                        ? "Homme"
                        : "Femme";
                  return (
                    <button
                      key={gender}
                      onClick={() =>
                        setSelectedGender(gender as "all" | "mâle" | "femelle")
                      }
                      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors
                      ${
                        selectedGender === gender
                          ? "bg-primary text-white border-primary"
                          : "bg-white text-gray-600 border-gray-300 hover:bg-primary hover:text-white"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Table */}
              {filteredAreas.length === 0 ? (
                <p className="text-sm italic text-gray-500">
                  Aucun tarif disponible.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full table-auto border border-gray-200  text-base">
                    <thead className=" text-secondary text-start ">
                      <tr>
                        <th className=" text-start px-4 py-4 ">Zones</th>
                        <th className="text-start px-4 py-4">
                          Prix (à la séance)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAreas.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50">
                          <td className="px-4 py-2 border-b border-gray-300">
                            {row.area}
                          </td>
                          <td className="px-4 py-2 border-b border-gray-300">
                            {row.price} €
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TarifsTables;
