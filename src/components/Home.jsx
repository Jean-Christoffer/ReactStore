import {Link} from 'react-router-dom'
import {Box, Typography,Container,Paper} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function Home(){
    const mobile = useMediaQuery('(max-width:600px)');
    const tablet = useMediaQuery('(max-width:800px)');

    return(
    <>  
        <Container   sx={{ display:'flex',flexDirection:'column', justifyContent:'center', marginTop:'100px' }}>
            <Typography variant={mobile ? 'h4' : tablet ? 'h2' : 'h1'} component='h1' sx={{ textAlign:'center' }} >Welcome to the store </Typography>
                <Box maxWidth="100vw">
                    <img src='/store_9.jpg'></img>
                </Box>  

                <Box sx={{ display:'flex', justifyContent:'center', marginTop:'50px' }}>
                    <Link className='cta' to='/products'>SHOP NOW</Link>   
                </Box>
        </Container>
    </>
    )
}

