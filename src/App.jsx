import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './redux/actions';
import getAllProducts from './api/products';
import Card from './assets/components/Card/index';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    getAllProducts().then((data) => {
      // Filtra los productos por categoría "smartphone" y "laptops"
      const filteredProducts = data.filter(product => 
        product.category === 'smartphones' || product.category === 'laptops'
      );
      dispatch(setProducts(filteredProducts));
    });
  }, [dispatch]);


  return (
    <>
      <div className="card-container">
        {products.map((p) => (
          <div key={p.id} className="product-container">
            <Card key={p.id} image={p.image} title={p.title} price={p.price} brand={p.brand} id={p.id}/>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
