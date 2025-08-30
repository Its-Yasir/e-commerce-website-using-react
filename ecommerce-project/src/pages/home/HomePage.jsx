import { useEffect , useState } from 'react';
import './HomePage.css'
import axios from 'axios';
import { Header } from '../components/Header';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart }) {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getHomeData = async ()=>{
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    }
    getHomeData();
  },[]);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products}/>
      </div>
    </>
  );
}