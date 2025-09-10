import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Params = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const items = useSelector(state => state.products.items);

  const product = items.find(item => item.id == id); 

  const backHandle = (e) => {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <center>
    <div className="border w-1/4 p-5 mx-auto">
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} width="200" />
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button
      onClick={backHandle}
      className="px-5 py-2 bg-amber-400 hover:bg-amber-900 cursor-pointer rounded-sm mt-5">⏮️Back</button>
    </div>
    </center>
  );
};

export default Params;
