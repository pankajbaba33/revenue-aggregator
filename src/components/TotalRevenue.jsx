import { formatNumber } from "../utils/formatNumber";

function TotalRevenue({ totalRevenue }) {
  return (
    <div className="flex justify-end mt-6">

      <div className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg">

        <h2 className="text-xl font-bold">
          Total Revenue
        </h2>

        <p className="text-2xl mt-2">
          ₹ {formatNumber(totalRevenue)}
        </p>

      </div>

    </div>
  );
}

export default TotalRevenue;