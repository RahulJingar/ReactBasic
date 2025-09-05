import React from 'react';
import { useSelector } from 'react-redux';

const Contact = () => {
  const selectData = useSelector((state) => state.api.value);

  console.log('>>>>>>>>>selectData>>>>>>>>', selectData);

  return (
    <div>
      <h1>Contact Data</h1>

      {selectData.length === 0 ? (
        <p>No data available.</p>
      ) : (
        selectData.map((item) => (
          <div>
            <h3>{`Cart Id: ${item.id}`}</h3>
            <p>{`Total Products: ${item.totalProducts}`}</p>
            <p>{`Total Quantity: ${item.totalQuantity}`}</p>
            <p>{`Total Price: ${item.total}`}</p>

            <div>
              <h4>Products:</h4>
              {item.products.map((product) => (
                <div>
                  <p>{`Product Id: ${product.id}`}</p>
                  <p>{`Title: ${product.title}`}</p>
                  <p>{`Price: ${product.price}`}</p>
                  <p>{`Quantity: ${product.quantity}`}</p>
                  <p>{`Total: ${product.total}`}</p>
                  <hr />
                </div>
              ))}
            </div>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default Contact;
