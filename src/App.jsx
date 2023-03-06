
import Nav from './components/NavBar.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import Products from './components/Products.jsx'
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Footer from './components/Footer.jsx'
function App() {


  return (
    <>
    <BrowserRouter>
    <div className="content-container">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<ProductDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
