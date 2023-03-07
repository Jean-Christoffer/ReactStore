import {Link} from 'react-router-dom'
import {Container,Box, Typography} from '@mui/material';
export default function Home(){
    return(
    <>

    <Typography variant="h1" component='h1' sx={{ textAlign:'center' }} >Welcome to The store </Typography>
        <Box maxWidth="100vw">
            <img src='/store_9.jpg'></img>
        </Box>  
    
        <Box sx={{ display:'flex', justifyContent:'center' }}>
            <Link className='cta' to='/products'>SHOP NOW</Link>   
        </Box>
 
    </>
    )
}