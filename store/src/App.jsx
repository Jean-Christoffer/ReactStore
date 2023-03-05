
import Nav from './components/NavBar.jsx'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import About from './components/About.jsx'
import Cart from './components/About.jsx'
import Products from './components/About.jsx'
import Home from './components/Home.jsx'
function App() {


  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
