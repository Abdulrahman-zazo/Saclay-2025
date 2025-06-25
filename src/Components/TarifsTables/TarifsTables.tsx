import { useState } from "react";
import Loader from "../../Constant/Loader";
import "./TarifsTable.css";
import { useGetAllTypesQuery } from "../../app/features/prices/pricesApi";

function TarifsTables() {
  const [selectGender, setSelectGender] = useState("all");
  const { data, isLoading } = useGetAllTypesQuery({});

  const filteredData = data?.map((el) => {
    return {
      ...el,
      areas_and_prices:
        selectGender !== "all"
          ? el.areas_and_prices.filter((row) => row.gender === selectGender)
          : el.areas_and_prices,
    };
  });

  return !isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div className="TarifsTable space-y-8">
      {filteredData?.map((el) => (
        <div key={el.id} className="table-type bg-white rounded-xl shadow p-6">
          <div className="tabel-type-title flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-primary">
              Tarifs {el.type}
            </h3>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-secondary"
                  name={`gender-${el.id}`}
                  value="mâle"
                  checked={selectGender === "mâle"}
                  onChange={() => setSelectGender("mâle")}
                />
                <span className="ml-2">Homme</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-secondary"
                  name={`gender-${el.id}`}
                  value="femelle"
                  checked={selectGender === "femelle"}
                  onChange={() => setSelectGender("femelle")}
                />
                <span className="ml-2">Femme</span>
              </label>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2 border-b border-gray-300 text-primary">
                    Zones
                  </th>
                  <th className="px-4 py-2 border-b border-gray-300 text-primary">
                    Prix (à la séance)
                  </th>
                </tr>
              </thead>
              <tbody>
                {el.areas_and_prices.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b border-gray-200">
                      {row.area}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200">
                      {row.price} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TarifsTables;
