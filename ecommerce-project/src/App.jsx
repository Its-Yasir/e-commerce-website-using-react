import { useState, useEffect } from 'react'
import axios from 'axios'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import {Routes , Route} from 'react-router'
import './App.css'

function App() {

  const [cart , setCart] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/cart-items?expand=product')
    .then(response => {
      setCart(response.data);
    })
    .catch(error => {
      console.error('Error fetching cart items:', error);
    });
  },[]);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App
