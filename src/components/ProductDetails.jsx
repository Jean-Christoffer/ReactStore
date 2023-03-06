import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Loader from "./Loader.jsx";
import Button from './Button.jsx'
export default function ProductDetails(props){
    const {handleAddToCart, cart} = props
    const params = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [product ,setProduct] = useState({})
    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=> res.json())
            .then(data => {
                setProduct(data)
            })
            .catch(error => console.log(error))
            .finally(()=> setIsLoading(false))
    },[])

    return(
    <>
    <div className='products-row'>
    {isLoading && <Loader/>}
    <div className='product-card' key = {product.id}>
               <div className='img-container'>
                    <img src={product.image} />
                </div>  
            <div className='content-block'>
                <h2 className='product-title'>{product.title}</h2>
                <p className="description">{product.description}</p>
                <div className='price-container'>
                    <p>$ {product.price}</p>
                    <Button extraClass = {'add-to-cart-btn'} cart={cart} onClick={handleAddToCart}>Add to cart</Button>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}