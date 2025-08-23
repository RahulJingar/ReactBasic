import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = () => {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [btn, setBtn] = useState([]);
  const [select, setSelect] = useState("");

  const axiosData = async () => {
    const fetchData = await axios.get(`https://dummyjson.com/recipes`);
    setUser(fetchData.data.recipes);
    setBtn(fetchData.data.recipes);
  };

  const filterData = user.filter((item) => {
    const fullData = `${item.id} ${item.name}`;
    const matchData = fullData.toLowerCase().includes(search.toLowerCase());
    const match = select ? item.mealType.includes(select) : true;
    return matchData && match;
  });

  const unique = [...new Set(btn.flatMap((item) => item.mealType))];

  useEffect(() => {
    axiosData();
  }, []);

  const addHandle = (item) => {
    setCart((prev) => {
      if (prev.find((cartItem) => cartItem.id === item.id)) return prev; // Prevent duplicate
      return [...prev, item];
    });
  };

  const removeHandle = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen relative">
      {/* Sticky Cart Button */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full shadow-lg flex items-center gap-2 transition"
        >
          🛒 Cart: {cart.length}
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="🔍 Search recipes..."
          className="border border-gray-300 rounded-full px-5 py-3 w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {unique.map((item) => (
          <button
            key={item}
            onClick={() => setSelect(item)}
            className={`px-4 py-2 rounded-full text-sm font-medium shadow-md transition relative
              ${
                select === item
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {item}
            {select === item && (
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-yellow-400 rounded-full animate-pulse"></span>
            )}
          </button>
        ))}
        <button
          onClick={() => setSelect("")}
          className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-400 hover:bg-yellow-500 text-white shadow-md transition"
        >
          All
        </button>
      </div>

      {/* Data Display / Cart View */}
      {showCart ? (
        <div className="mt-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">
              🛒 Your cart is empty!
            </p>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition relative"
                >
                  <button
                    onClick={() => removeHandle(item.id)}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-xl"
                  >
                    ✕
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
                  <p className="text-blue-600 font-bold">₹{item.id * 15}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filterData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold mt-3">{item.name}</h2>
              <p className="text-sm text-gray-600">
                Prep Time: {item.prepTimeMinutes} mins
              </p>
              <p className="text-sm text-gray-600">
                Cook Time: {item.cookTimeMinutes} mins
              </p>
              <p className="text-sm text-gray-600">Servings: {item.servings}</p>
              <p className="text-blue-600 font-bold mt-1">
                ₹{item.id * 15}
              </p>
              <button
                onClick={() => addHandle(item)}
                className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg shadow-md transition hover:scale-105 active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchData;
