import React from "react";
import { trendingStock } from "../pages/investments/Data";

const TrendingStock = ({outcome}) => {
  return (
    <div className="bg-white rounded-lg p-2  shadow-md">
      <table className="min-w-full">
        <thead className="border-b">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left  font-semibold text-[#718EBF] sm:pl-0"
            >
              SL No
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left  font-semibold text-[#718EBF] sm:pl-0"
            >
              Name
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left font-semibold text-[#718EBF] sm:pl-0"
            >
              Price
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left  font-semibold text-[#718EBF] sm:pl-0"
            >
              Return
            </th>
          </tr>
        </thead>

        <tbody>
          {trendingStock.map((trending) => (
            <tr key={trending.id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3  font-medium  sm:pl-0">{trending.slNo}</td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium  sm:pl-0">{trending.name}</td>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium  sm:pl-0">${trending.price}</td>
              <td
                className={`${
                  outcome === "profit" ? "text-[#16DBAA]" : "text-[#FE5C73]"
                } className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium  sm:pl-0"`}
              >
                {outcome === "profit" ? "+" : "-"}
                {trending.return}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingStock;
