import React, {useState, useEffect} from 'react'
import Product from './Product.jsx'
import Loader from './Loader.jsx'
import Grid2 from '@mui/material/Unstable_Grid2';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
export default function Products(props){
    const {handleAddToCart, cart} = props
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
        <Box sx={{ maxWidth: 200 }}>
        <FormControl fullWidth>
         <InputLabel id="category">Category</InputLabel>
        <Select
          labelId="category"
          id="category"
          value={category}
          label="Category"
          onChange={toggleCategory}
        >
          <MenuItem value={'jewelery'}>Jewelery</MenuItem>
          <MenuItem value={"men's clothing"}>Men's clothing</MenuItem>
          <MenuItem value={"women's clothing"}>Women's clothing</MenuItem>
          <MenuItem value={"electronics"}>Electronics</MenuItem>
        </Select>
        </FormControl>
        </Box>  
        <Grid2 container  spacing={5}>
            {isLoading && <Loader/>}
            {products && products.map(product => <Product key = {product.id} handleAddToCart={handleAddToCart} details = {product} cart={cart}/>)}
        </Grid2>
            
        </>
    )
}