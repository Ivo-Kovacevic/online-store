import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import { Container } from '@mui/material'

function App() {

  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.in/api/products?limit=12');
        const data = await response.json();

        // Add quantity property
        setProducts(data.products.map((product) => ({
          ...product,
          quantity: 0
        }))); 

      } catch (error) {
        console.error('Error: ', error)
      }
    }

    fetchData();

  }, []);

  const addItemToCart = (item, quantity) => {

    // Increase item quantity if its already in shopping cart, otherwise add it
    setShoppingCart(currentShoppingCart => {

      const itemIndex = currentShoppingCart.findIndex(cartItem => cartItem.id === item.id);
  
      if (itemIndex > -1) {
        const updatedCart = currentShoppingCart.map((cartItem, index) =>
          index === itemIndex ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
        );
        return updatedCart;
      } else {
        return [...currentShoppingCart, { ...item, quantity }];
      }
    });
    
  };
  

  const removeItemFromCart = (item) => {
    setShoppingCart(currentShoppingCart => currentShoppingCart.filter(cartItem => cartItem !== item));
  }

  return (
    <>

      
        <Navbar shoppingCart={ shoppingCart } removeItemFromCart={ removeItemFromCart }></Navbar>

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/products' element={ <Products products={ products } addItemToCart={ addItemToCart }/> } />
        </Routes>

        
    </>
  )
}

export default App;
