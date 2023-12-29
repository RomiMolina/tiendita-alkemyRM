// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App.jsx';
import NavBar from './assets/components/Nav/index.jsx';
import Footer from './assets/components/Footer/index.jsx';
import FormCart from './assets/components/FormCart/index.jsx';
import store from './redux/store/index.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/formulario-compra" element={<FormCart/>} />
        <Route path="/" element={<App/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
);
