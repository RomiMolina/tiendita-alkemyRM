// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/actions/index.jsx';
import './cart.css'

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart-container">
      <div className="cart-dropdown">
        <h2 onClick={toggleCart} style={{ cursor: 'pointer' }}>
          Carrito de compras
        </h2>

        {isCartOpen && (
          <div className="cart-dropdown-content">
            {cart.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              <>
                <ul>
                  {cart.map((item) => (
                    <li key={item.id}>
                      <div className="cart-item">
                        <img src={item.image} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-details">
                          <p>{item.title}</p>
                          <p>Cantidad: 1</p>
                          <p>Precio: ${item.price}</p>
                        </div>
                        <button onClick={() => handleRemoveFromCart(item.id)}>
                          Eliminar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <p>Cantidad total de productos: {cart.length}</p>
                <p>Total a pagar: ${cart.reduce((total, item) => total + item.price, 0)}</p>
                <button onClick={() => alert('¡Compra realizada con éxito!')}>
                  Iniciar compra
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
