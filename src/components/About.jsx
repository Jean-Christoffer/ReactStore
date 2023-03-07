import {Container,Box, Typography} from '@mui/material';
export default function About(){
    return(
    <>
    <Container sx={{ display:'flex', justifyContent:'center' }}>
        <Box sx={{ margin:'50px' }}>
            <Typography variant="h2" component='h2' sx={{maxWidth: '500px'}}>
                About Us
            </Typography>
            <Typography variant="body1" component='p' sx={{maxWidth: '500px'}}>
            We started The store in 2010.
            Save time by shopping in our store and we'll deliver the products the next day.
            </Typography>
            <Typography variant="body1" component='p' sx={{width: '350px'}}>
                Order your products from The store with our super fast delivery and excellent customer service, get your products delivered straight the next day.
            </Typography>            
        </Box>
    </Container>    
    </>)
}