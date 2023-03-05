import {Link} from 'react-router-dom'
export default function Product({details}){
    return(
    <>
        <div className='product-card'>
            <div className='img-container'>
                <img src={details.image} />
            </div>
            <div className='content-block'>
                <h2 className='product-title'>{details.title}</h2>
                <p className='rating'>Rating: {details.rating.rate}</p>
                <div className='price-container'>
                    <p>$ {details.price}</p>
                    <Link>Details</Link>
                </div>
            </div>
        </div>
    </>
    )
}