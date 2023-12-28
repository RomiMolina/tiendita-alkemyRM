import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './assets/components/Nav/index.jsx'
import './styles.css'
import store from './redux/store/index.jsx'
import { Provider } from 'react-redux'
import Footer from './assets/components/Footer/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <NavBar/>
    <App />
    <Footer />
  </React.StrictMode>
</Provider>
)