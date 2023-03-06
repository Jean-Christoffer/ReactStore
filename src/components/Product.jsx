import {Link} from 'react-router-dom'
import {Paper, Typography, Box, Rating,Button} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
export default function Product(props){
    const {details, handleAddToCart} = props
    return(
    <>
    <Grid2 item xs={4} >
      <Paper elevation={3}>
            <Link to={`/products/${details.id}`}>
                <Box padding={1} sx={{  display:'flex', justifyContent:'center', height:200 }}>      
                    <img src={details.image} />
                </Box> 
            </Link>
            <Box paddingX={1}>  
                <Typography  sx={{fontWeight: 'bold'}} variant="body1" component='h2'>{details.title}</Typography>
            </Box>      
                <Box padding={1} sx={{  display:'flex', alignItems:'center' }}>
                    Rating:<Rating name="read-only" value={details.rating.rate} readOnly  precision={0.5} size={'small'} />
                </Box>
            <Box padding={1} sx={{  display:'flex', alignItems:'center', justifyContent:'space-around' }}>
                <Typography  component='p' sx={{fontWeight: 'bold'}}> ${details.price}</Typography>
                <Button variant="contained" onClick={()=> handleAddToCart(details)}>Add to cart</Button>
            </Box>       
        </Paper>
    </Grid2>
    </>
    )
}