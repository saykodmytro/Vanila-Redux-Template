import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ListComponent = () => {
  const products = useSelector(state => state.productsData.products);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleDeleteProduct = productId => {
    const deleteActionProduct = {
      type: 'products/deleteProducts',
      payload: productId,
    };
    dispatch(deleteActionProduct);
  };

  return (
    <div>
      {products.map(({ id, name, price, discount }) => {
        return (
          <li className="products-item" key={id}>
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
            <p>Discount: {discount}</p>
            <button type="button" onClick={() => handleDeleteProduct(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default ListComponent;
