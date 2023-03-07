
import {useState} from 'react'
import NavBar from './components/NavBar.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Footer from './components/Footer.jsx'
import {Container,Paper} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const [theme, setTheme] = useState(false)

  const [cart,setCart] = useState([])

function toggleTheme(){
  setTheme(!theme)
}



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
 function clearCart(){
    setCart([])
 }
function removeItem(id){
  setCart(cart.filter(products => {
    return products.id !== id
  }))
}
  return (
    <>
    
    <BrowserRouter>
      <ThemeProvider theme={theme ? darkTheme : lightTheme }>
        <Paper sx={{  minHeight:'100vh' }} elevation={0} square >
          <NavBar toggleTheme={toggleTheme} cart={cart} theme={theme}/>
            <Container>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/products' element={<Products handleAddToCart={handleAddToCart} cart = {cart}/>}></Route>
                <Route path='/products/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cart={cart}/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/cart' element={<Cart cart={cart} clearCart={clearCart} removeItem={removeItem}/>}></Route>
              </Routes>
            </Container>
            <Footer/>
          </Paper>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
