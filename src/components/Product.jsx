import {Link} from 'react-router-dom'
import Button from './Button.jsx'
export default function Product({details}){
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
                    <Button extraClass = {'add-to-cart-btn'}>Add to cart</Button>
                </div>
            </div>
        </div>
    </>
    )
}