import {Link, Outlet} from 'react-router-dom'
import Button from './Button.jsx'
export default function Product(props){
    const {details, handleAddToCart} = props
    let product = details
    return(
    <>
        <div className='product-card'>
            <Link to={`/products/${details.id}`}>
               <div className='img-container'>
                    <img src={details.image} />
                </div>
            </Link>    
            <div className='content-block'>
                <h2 className='product-title'>{details.title}</h2>
                <p className='rating'>Rating: {details.rating.rate}</p>
                <div className='price-container'>
                    <p>$ {details.price}</p>
                    <Button addToCart onClick={()=> handleAddToCart(details)}>Add to cart</Button>
                </div>
            </div>
            <Outlet context={product} />
        </div>
    </>
    )
}