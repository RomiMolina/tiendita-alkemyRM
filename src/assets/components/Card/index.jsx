/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux';
import './card.css';
import { addToCart } from '../../../redux/actions/index.jsx';

const Card = ({ image, title, price, brand, id }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ image, title, price, brand, id }));
    alert('El producto se agrego correctamente')
  };

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={image} alt={title} />
      </div>
      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <p className='card-brand'>{brand}</p>
        <p className='card-price'>${price}</p>
        <button onClick={handleAddToCart} className='add-to-cart-button'>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
