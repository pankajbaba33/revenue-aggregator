import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">

      <label className="font-semibold text-lg whitespace-nowrap">
        Search
      </label>

      <div className="relative w-full sm:flex-1">

        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Search
          size={20}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        />

      </div>

    </div>
  );
}

export default SearchBar;