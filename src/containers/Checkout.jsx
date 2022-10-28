import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const { state: { cart }, removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleTotal = () => {
    const reducer = (acc, curr) => acc + curr.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{ cart.length ? 'Lista Pedidos:' : 'Sin pedidos' }</h3>
        { cart.map((item) => {
          return (
            <div className="Checkout-item" key={ item.id }>
              <div className="Checkout-element">
                <h4>{ item.title }</h4>
                <span>{ item.price }</span>
              </div>
              <button type="button" onClick={ () => handleRemove(product) }>
                <i className="fas fa-trash-alt" title="Eliminar"/>
              </button>
            </div>
          );
        }) }
      </div>
      { cart.length ? (
        <div className="Checkout-sidebar">
          <h3>{ `Precio Total: $${ handleTotal() }` }</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar</button>
          </Link>
        </div>
      ) : null }
    </div>
  );
};

export default Checkout;