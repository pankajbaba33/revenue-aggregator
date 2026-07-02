import React, { useEffect, useState } from "react";
import "./App.css";


import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import TotalRevenue from "./components/TotalRevenue";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [b1, b2, b3] = await Promise.all([
        fetch("/api/branch1.json").then((res) => res.json()),
        fetch("/api/branch2.json").then((res) => res.json()),
        fetch("/api/branch3.json").then((res) => res.json()),
      ]);

      const allProducts = [...b1, ...b2, ...b3];

      const revenueMap = {};

      allProducts.forEach((item) => {
        revenueMap[item.product] =
          (revenueMap[item.product] || 0) + item.revenue;
      });

      const merged = Object.entries(revenueMap)
        .map(([product, revenue]) => ({
          product,
          revenue,
        }))
        .sort((a, b) => a.product.localeCompare(b.product));

      setProducts(merged);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter((item) =>
    item.product.toLowerCase().includes(search.toLowerCase())
  );

  const totalRevenue = filteredProducts.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
   <div className="min-h-screen bg-slate-100 py-10 px-4">
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-8">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Revenue Aggregator
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="mt-8">
        <ProductTable products={filteredProducts} />
      </div>

      <div className="mt-6">
        <TotalRevenue totalRevenue={totalRevenue} />
      </div>

    </div>
  </div>

  );
}

export default App;