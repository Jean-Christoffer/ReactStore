
import React,{useState, useEffect} from 'react'
import Nav from './components/NavBar.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Footer from './components/Footer.jsx'
function App() {
const  [cart,setCart] = useState([])

function handleAddToCart(newItem){
  const itemExists = cart.find(product => product.id === newItem.id)
  if(itemExists){
    const updatedCart = cart.map(product => {
      if(product.id === newItem.id){
        return{
          ...product,
          quantity:product.quantity + 1
        };
      }
      return product
    })
    setCart(updatedCart)
  } else{

    setCart([
      ...cart,
      {
        ...newItem,
        quantity:1
      }
    ])
  }
}

  return (
    <>
    <BrowserRouter>
    <div className="content-container">
      <Nav cart={cart}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products handleAddToCart={handleAddToCart} cart = {cart}/>}></Route>
        <Route path='/products/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cart={cart}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart cart={cart}/>}></Route>
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
