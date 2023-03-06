import {Link} from 'react-router-dom'
import {Button} from '@mui/material'
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
export default function Product(props){
    const {details, handleAddToCart} = props
    let product = details
    return(
    <>
    <Grid2 item xs={4} >
      <Paper elevation={3}>
            <Link to={`/products/${details.id}`}>       
                <img src={details.image} />
            </Link>
            <Box paddingX={1}>  
                <Typography  sx={{fontWeight: 'bold'}} variant="body1" component='h2'>{details.title}</Typography>
            </Box>      
                <Typography  variant="body1" paddingX={1} >
                    Rating: {details.rating.rate}
                </Typography>
            <Box padding={1} sx={{  display:'flex', alignItems:'center', justifyContent:'space-around' }}>
                <Typography  sx={{fontWeight: 'bold'}}> ${details.price}</Typography>
                <Button variant="contained" onClick={()=> handleAddToCart(details)}>Add to cart</Button>
            </Box>       
        </Paper>
    </Grid2>
    </>
    )
}