
import Button from './Button.jsx'
export default function Cart(props){
    const {cart} = props
    const subTotal = cart.reduce((a,b)=>{
        return a + (b.price * b.quantity)
    },0)
    return(
    <>
    <div className='cart-container'>
        <div className='cart-row'>
            <p>Product</p>
            <p>Price</p>
            <p>Amount</p>
            <p>Total</p>
        </div>
        
        {cart.map(product => <div key={product.id}  className='cart-item-row'>
            <img src = {product.image} className='cart-image'/>
            <p>${product.price}</p>
            <p>{product.quantity}</p>
            <p>${product.quantity * product.price}</p>
             </div> )}
       <div className='total'>
        {subTotal > 0 && <p className='sub-total'>Total: ${subTotal}</p>}
        {subTotal > 0 && <Button>checkout</Button>}
        </div>      
    </div>
    </>
    )
}