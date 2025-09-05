import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./productsSlice";
import axios from "axios";
import UseLayout from "./UseLayout";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.products.items);
  const [search, setSearch] = useState("");
  const [az, setAz] = useState("");
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);
  const { change, toggleHandle } = UseLayout();
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();

  const filterUser = items.filter((item) => {
    const fullName = `${item.id} ${item.title}`;
    return fullName.toLowerCase().includes(search.toLowerCase());
  });

  const axiosData = async () => {
    setLoading(true);
    const fetchData = await axios.get(`https://dummyjson.com/products`);
    dispatch(setProducts(fetchData.data.products));
    setLoading(false);
  };

  const sortedUser = filterUser.sort((a, b) => {
    if (az === "atoz") return a.title.localeCompare(b.title);
    else if (az === "ztoa") return b.title.localeCompare(a.title);
    else if (az === "hightolow") return b.price - a.price;
    else if (az === "lowtohigh") return a.price - b.price;
  });

  useEffect(() => {
    axiosData();
  }, []);

  const handleProduct = (product) => {
    const exist = cart.find((it) => it.id === product.id);
    if (exist) setCart(cart.filter((it) => it.id !== product.id));
    else setCart([...cart, product]);
  };

  const cartHandle = () => {
    setToggle(!toggle);
  };

  const handleRemove = (id) => {
    const updateItems = cart.filter((it) => it.id !== id);
    setCart(updateItems);
  };

  const logoutHandle = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/signup");
  };

  const buyHandle = (e) => {
    e.preventDefault();
    navigate("/address");
  };

  const TotalPrice = cart.reduce((total, i) => total + i.price, 0);

  return (
    <div className={change ? "bg-black text-white" : "bg-white"}>
      <div className="p-5 flex justify-end">
        <button
          className="bg-sky-400 hover:bg-sky-800 text-white p-2 rounded-sm cursor-pointer"
          onClick={toggleHandle}
        >
          {change ? "Light Mode☀️" : "Dark Mode🌙"}
        </button>
      </div>

      <div className="flex justify-end mr-5">
        <button
          className="px-5 py-2 bg-red-400 hover:bg-red-800 rounded-sm cursor-pointer"
          onClick={logoutHandle}
        >
          Logout
        </button>
      </div>

      <div className="flex justify-center my-2">
        <input
          type="text"
          placeholder="Search Bar..."
          value={search}
          className="border rounded-sm w-180 p-2 text-green-500"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex justify-end mr-5 my-2">
        <button
          className="bg-blue-300 hover:bg-blue-500 p-2 rounded-sm cursor-pointer"
          onClick={cartHandle}
        >
          {toggle ? <p>Cart: {cart.length}</p> : "Previous Data"}
        </button>
      </div>

      <div className="rounded-sm h-7 flex justify-center mb-5">
        <select
          className="w-1/10 border rounded-sm"
          value={az}
          onChange={(e) => setAz(e.target.value)}
        >
          <option value="">Select</option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
          <option value="lowtohigh">Low To High</option>
          <option value="hightolow">High To Low</option>
        </select>
      </div>

      <div className="flex gap-5 flex-wrap mt-5 justify-center">
        {loading ? (
          <Loading />
        ) : toggle ? (
          sortedUser.map((product) => (
            <div
              key={product.id}
              className="border p-5 w-80 flex flex-col items-center"
            >
              <img src={product.thumbnail} alt=""/>
              <p>{`Id: ${product.id}`}</p>
              <h2>{`Title: ${product.title}`}</h2>
              <p>{`Description: ${product.description}`}</p>
              <p>{`Price: ${product.price}`}</p>

              <button
                className="bg-green-400 hover:bg-green-800 p-2 rounded-sm cursor-pointer"
                onClick={() => handleProduct(product)}
              >
                {cart.find((it) => it.id === product.id)
                  ? "Remove To Cart"
                  : "Add To Cart"}
              </button>

              <button
                className="px-5 py-2 bg-purple-500 hover:bg-purple-900 rounded-sm cursor-pointer mt-2"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                View
              </button>
            </div>
          ))
        ) : cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-5 flex flex-col items-center"
              >
                <img src={item.thumbnail} alt="" />
                <p>{`Id: ${item.id}`}</p>
                <h3>{`Title: ${item.title}`}</h3>
                <p>{`Price: ${item.price}`}</p>

                <button
                  className="px-5 py-2 bg-green-400 hover:bg-green-800 cursor-pointer rounded-sm"
                  onClick={buyHandle}
                >
                  Buy Product
                </button>

                <button
                  className="bg-red-400 hover:bg-red-800 cursor-pointer p-2 rounded-sm mt-2"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove To Cart
                </button>
              </div>
            ))}

            {/* ✅ SubTotal ek hi baar niche dikhayenge */}
            <br /><br />
            <center>
              <div className="border mt-5 mb-5 border-green-500 p-2">
                <p className="font-bold">SubTotal : ${TotalPrice}</p>
              </div>
            </center>
          </>
        ) : (
          <p className="flex justify-center mt-12">Data Not Found!!</p>
        )}
      </div>
    </div>
  );
};

export default Products;
