
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './formCart.css';

const FormCart = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('tarjeta');
  const [errors, setErrors] = useState({});

  const cart = useSelector((state) => state.products.cart);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    const errors = {};
    if (!name.trim()) {
      errors.name = 'Nombre y Apellido son requeridos';
    }
    if (!email.trim()) {
      errors.email = 'Correo Electrónico es requerido';
    } else if (!isValidEmail(email)) {
      errors.email = 'Ingresa un correo electrónico válido';
    }
    if (!address.trim()) {
      errors.address = 'Dirección es requerida';
    }
    if (!tel.trim()) {
      errors.tel = 'Teléfono es requerido';
    } else if (!isValidPhone(tel)) {
      errors.tel = 'Ingresa un número de teléfono válido';
    }

    // Si hay errores, muestra mensajes de error
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

   //envia el form
    console.log('Enviando formulario:', { name, email, address, tel, paymentMethod, cart });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (tel) => {
    return /^[0-9]+$/.test(tel);
  };

  return (
    <div className="form-container">
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre y Apellido:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>

        <label>
          Correo Electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </label>

        <label>
          Dirección:
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </label>

        <label>
          Teléfono:
          <input
            type="text"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            className={errors.tel ? 'error' : ''}
          />
          {errors.tel && <span className="error-message">{errors.tel}</span>}
        </label>

        <label>
          Método de Pago:
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="tarjeta">Tarjeta de Crédito</option>
            <option value="efectivo">Efectivo</option>
          </select>
        </label>

        <section className="cart-details">
          <h3>Detalle del Carrito</h3>
          <ul>
          {cart && cart.length > 0 ? (
  <ul>
    {cart.map((item) => (
      <li key={item.id}>
        <strong>{item.title}</strong> - Cantidad: 1 - Precio: ${item.price}
      </li>
    ))}
  </ul>
) : (
  <p>No hay productos en el carrito</p>
)}
          </ul>
        </section>

        <div className="total">
          <strong>Total a Pagar:</strong> ${cart.reduce((total, item) => total + item.price, 0)}
        </div>

        <button type="submit">Realizar Compra</button>
      </form>
    </div>
  );
};

export default FormCart;
