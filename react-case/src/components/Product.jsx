import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{product.name}</h4>
      <p>Ціна: ${product.price}</p>
      <button onClick={() => dispatch(addItem(product))}>Додати в кошик</button>
    </div>
  );
};

export default Product;