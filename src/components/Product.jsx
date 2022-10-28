import React from 'react';
import '../styles/components/Product.css';

const Product = ({ product }) => {
  return (
    <div className="Product">
      <img src={ product.image } alt={ product.title }/>
      <div className="Product-info">
        <h2>{ product.title }
          <span>{ product.price }</span>
        </h2>
        <p>{ product.description }</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
};

export default Product;