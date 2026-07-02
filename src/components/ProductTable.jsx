import { formatNumber } from "../utils/formatNumber";

function ProductTable({ products }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="px-6 py-4 text-left">
              Product Name
            </th>

            <th className="px-6 py-4 text-right">
              Revenue
            </th>
          </tr>

        </thead>

        <tbody>

          {products.length > 0 ? (

            products.map((item, index) => (

              <tr
                key={item.product}
                className={`${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-gray-50"
                } hover:bg-blue-50 transition`}
              >

                <td className="px-6 py-4">
                  {item.product}
                </td>

                <td className="px-6 py-4 text-right font-semibold text-green-600">
                  ₹ {formatNumber(item.revenue)}
                </td>

              </tr>

            ))

          ) : (

            <tr>
              <td
                colSpan="2"
                className="text-center py-8 text-gray-500"
              >
                No Products Found
              </td>
            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default ProductTable;