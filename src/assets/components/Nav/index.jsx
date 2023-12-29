
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Cart from '../Cart/index.jsx';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(filterProducts(searchTerm));
  // }, [searchTerm, dispatch]);

  // const handleInputChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSearchClick = () => {
  //   dispatch(filterProducts(searchTerm));
  // };

  return (
    <nav className="navbar">
      <div className="container mx-auto flex items-center justify-between">
      
      <Link to="/" className="logo">
          Romina Molina
        </Link>
        
        {/* <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="search-input focus:outline-none"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="search-button" onClick={handleSearchClick}>
            Buscar
          </button>
        </div> */}
        <div className="cart-container">
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
