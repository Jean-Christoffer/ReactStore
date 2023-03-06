import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
export default function Home(){
    return(
    <>
    <div className='home-container'>
        <article>
            <h1>Welcome to the store</h1>
            <p>Order your electronics, clothes or jewelry from The store, and get your products delivered straight to your home within two days.</p>
        </article>
        <div className='cta-container'>
            <Link className='cta' to='/products'>Shop now</Link>
            
        </div>
    </div>

    </>
    )
}