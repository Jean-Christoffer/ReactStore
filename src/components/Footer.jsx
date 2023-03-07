import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Typography} from '@mui/material';

export default function Footer() {

  return (
    <Box sx={{ pb: 7,  }}  >

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent:'center', padding:'5px', alignItems:'center' }} elevation={3}  >

        <Typography  sx={{fontWeight: '400'}} variant="body1" component='p'>Copyright 2023 || The store</Typography>
      </Paper>
    </Box>
  );
}

