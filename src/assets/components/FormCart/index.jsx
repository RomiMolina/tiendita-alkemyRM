// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const FormCart = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar la información del formulario.
    console.log('Enviando formulario:', { name, email, address });
  };

  return (
    <div>
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Dirección:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <button type="submit">Realizar Compra</button>
      </form>
    </div>
  );
};

export default FormCart;
