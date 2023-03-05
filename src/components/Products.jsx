import React, {useState, useEffect} from 'react'
import { Outlet } from "react-router-dom";
import Product from './Product.jsx'
import Loader from './Loader.jsx'
export default function Products(){
    const [products, setProducts] = useState([])
    const [category, setCategory] = useState('electronics')
    const [isLoading, setIsLoading] = useState(false)

    function toggleCategory(event){
        setCategory(event.target.value)
        console.log(category)
    }

    useEffect(()=>{
        setIsLoading(true)
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=> res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => console.log(error))
            .finally(()=> setIsLoading(false))
    },[category])

    return(
        <>
        <div className='select-container'>
            <label htmlFor={'category'}> Select a category </label>
                <select onChange={toggleCategory} id={'category'} name={'category'} value={category}>
                    <option value={'jewelery'}>Jewelery</option>
                    <option value={"men's clothing"}>Men's clothing</option>
                    <option value={"women's clothing"}>Women's clothing</option>
                    <option value={'electronics'}>Electronics</option>
                </select>  
        </div>  
        <div className='products-row'>
        {isLoading && <Loader/>}
        {products && products.map(product => <Product key = {product.id} details = {product}/>)}
        </div>
            
        </>
    )
}