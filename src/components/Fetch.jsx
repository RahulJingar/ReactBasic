import React, { useEffect, useState } from "react";
import axios from "axios";
import Gif from "../components/Gif";

const Fetch = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [men, setMen] = useState([]);
  const [cart, setCart] = useState([]);

  const axiosData = async () => {
    const fetchData = await axios.get(`https://fakestoreapi.com/products/`);
    setUser(fetchData.data);
    setMen(fetchData.data);
    setLoading(false);
  };

  useEffect(() => {
    axiosData();
  }, []);

  const filterData = men.filter((item) => {
    const fullData = `${item.id} ${item.title}`;
    return fullData.toLowerCase().includes(search.toLowerCase());
  });

  const inputHandle = (e) => {
    setSearch(e.target.value);
  };

  const increase = () => {
    const sortBy = [...filterData].sort((a, b) => a.id - b.id);
    setMen(sortBy);
  };

  const descending = () => {
    const desc = [...filterData].sort((a, b) => b.id - a.id);
    setMen(desc);
  };

  const abcHandle = (e) => {
    const value = e.target.value;
    let sorted = [...filterData];

    if (value === "asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === "desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (value === "atoz") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (value === "ztoa") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    setMen(sorted);
  };

  const electronicHandle = () => {
    const electro = user.filter((item) => item.category === "electronics");
    setMen(electro);
  };

  const mensHandle = () => {
    const mensData = user.filter((item) => item.category === "men's clothing");
    setMen(mensData);
  };

  const womensHandle = () => {
    const womenData = user.filter((item) => item.category === "women's clothing");
    setMen(womenData);
  };

  const jweleryHandle = () => {
    const jweleryData = user.filter((item) => item.category === "jewelery");
    setMen(jweleryData);
  };

  const cartHandle = (id) => {
    if (cart.includes(id)) {
      setCart(cart.filter((item) => item !== id));
    } else {
      setCart([...cart, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {/* Search & Filters */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={inputHandle}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"
          />
          <div className="flex flex-wrap gap-2">
            <button onClick={electronicHandle} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Electronics</button>
            <button onClick={mensHandle} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Mens</button>
            <button onClick={womensHandle} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Womens</button>
            <button onClick={jweleryHandle} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Jewelery</button>
            <span className="bg-red-500 text-white px-3 py-1 rounded">Cart: {cart.length}</span>
          </div>
        </div>

        {/* Sorting */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button onClick={increase} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">Ascending</button>
          <button onClick={descending} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700">Descending</button>
          <select onChange={abcHandle} className="p-2 border border-gray-300 rounded-md">
            <option value="select">Select</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
            <option value="atoz">A to Z</option>
            <option value="ztoa">Z to A</option>
          </select>
        </div>

        {/* Product Cards */}
        {loading ? (
          <Gif />
        ) : filterData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filterData.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                <img src={item.image} alt={item.title} className="h-40 object-contain mb-3" />
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-700 font-bold mb-1">${item.price}</p>
                <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                <p className="text-sm text-gray-500 mb-2 line-clamp-2">{item.description}</p>
                <p className="text-sm text-yellow-600">⭐ {item.rating.rate} ({item.rating.count})</p>
                <button
                  onClick={() => cartHandle(item.id)}
                  className={`mt-auto px-3 py-2 rounded text-white ${
                    cart.includes(item.id)
                      ? "bg-red-500 hover:bg-red-700"
                      : "bg-green-500 hover:bg-green-700"
                  }`}
                >
                  {cart.includes(item.id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-red-500 font-semibold mt-10">No Products Found</p>
        )}
      </div>
    </div>
  );
};

export default Fetch;
