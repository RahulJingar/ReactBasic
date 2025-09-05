import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setApi } from './ApiSlice';

const Home = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();


  const axiosData = async () => {
    const fetchData = await axios.get(`https://dummyjson.com/carts`);
    console.log('>>>>>>>fetchData>>>>>>', fetchData.data.carts);
    setUser(fetchData.data.carts);
    dispatch(setApi(fetchData.data.carts))
  };

  useEffect(() => {
    axiosData();
  }, [dispatch]);

  return (
    <div>
      {user.map((item) => (
        <div key={item.id}>
          <p>{`Cart Id: ${item.id}`}</p>

          {item.products.map((product) => (
            <div>
              <p>{`Product Id: ${product.id}`}</p>
              <p>{`Title: ${product.title}`}</p>
              <p>{`Price: ${product.price}`}</p>
              <p>{`Quantity: ${product.quantity}`}</p>
              <p>{`Total: ${product.total}`}</p>
            </div>
          ))}

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
