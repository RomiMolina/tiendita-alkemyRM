// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/actions/index.jsx';
import './cart.css';

const Cart = () => {
  let navigate = useNavigate();
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleStartPurchase = () => {
    // Redirige al usuario al formulario de compra
    navigate('/formulario-compra');
  };

  const handleRemoveFromCart = (productId) => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este producto del carrito?');
  
    if (isConfirmed) {
      dispatch(removeFromCart(productId));
    }
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
                <button onClick={handleStartPurchase}>
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
