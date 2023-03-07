import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Loader from "./Loader.jsx";
import {Button, Typography,Paper,Box} from '@mui/material'
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
    {isLoading && <Loader/>}
    <Paper elevation={3} key = {product.id} sx={{ maxWidth: 600, margin:'auto', marginTop:20 }}>

        <Box padding={1} sx={{  display:'flex', justifyContent:'center', height:200 }}>      
            <img src={product.image} />
        </Box> 

            <Box paddingX={1}>  
                <Typography  sx={{fontWeight: 'bold'}} variant="body1" component='h2'>{product.title}</Typography>
            </Box>
            <Box paddingX={1}>  
                <Typography sx={{ 'line-height':25, 'margin-top':10 }}   variant="body1" component='p'>{product.description}</Typography>
            </Box>         

            <Box padding={1} sx={{  display:'flex', alignItems:'center', justifyContent:'space-around' }}>
                <Typography  component='p' sx={{fontWeight: 'bold'}}> ${product.price}</Typography>
                <Button   variant="contained"   onClick={()=> handleAddToCart(product)} >Add to cart</Button>
            </Box>       
        </Paper>
    </>
    )
}