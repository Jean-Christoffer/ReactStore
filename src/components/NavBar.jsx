import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import {Box,Container,Button} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
function NavBar(props) {
    const {cart} = props

    const totalItems = cart.reduce((a,b)=> {
      return a + (b.quantity)
  },0)

  const pages = [
    { name: 'Home', route: '', properties:'' },
    { name: 'Product', route: 'products', properties:'' },
    { name: 'About', route: 'about', properties:'' },
    { name: `Cart(${totalItems})`, route: 'cart', properties:cart }
    
  ];

  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = ( event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            THE STORE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              >
                
              {pages.map((page, index) => (
                  <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', padding:'10px' }}
                  > 
                  <Link
                  properties={page.properties}
                  style={{ textDecoration:'none', color:'black',padding:'10px' }}
                  to={`/${page.route}`}
                  >
                  {page.name}
                  </Link>
                  </Button>
                  ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            THE STORE
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page,index) => (
            <Button
              key={index}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            > 
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')}
                properties={page.properties}
                style={{ color:'inherit',padding:'15px' }}
                to={`/${page.route}`}
              >
                {page.name}
              </NavLink>
            </Button>
          ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          
          <Button onClick={props.toggleTheme}
           startIcon={props.theme === true ? <WbSunnyIcon/> :  <NightlightRoundIcon/>}
            variant="contained">{props.theme === true ? 'Light' : 'Dark'}</Button>

          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;