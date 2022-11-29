import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';

import logo from '../assets/img/logo_lider_white.svg'
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <header>
      <Box sx={{ p: 1, backgroundColor: 'rgb(2,55,88)', color: 'white' }}>
        <Typography variant="body1" component="div">
          Servicio al cliente de Lider.cl WhatsApp
          <Box sx={{ mx: 1, color: 'rgb(1,113,206)', textDecoration: 'none' }} component="a" href="https://wa.me/56957211492" target="_blank" rel="noopener noreferrer">+56957211492</Box>
          | Horario: de lunes a viernes de 8:00 a 22:00 y sábado, domingo y festivos de 9:00 a 22:00
        </Typography>
      </Box>
      <AppBar position="static" sx={{ backgroundColor: 'rgb(1,113,206)' }}>
        <Toolbar>
          <IconButton href="/">
            <img src={logo} alt="logo" />
          </IconButton>
          <IconButton size="large" edge="start" color="inherit" sx={{ mx: 2, borderRadius: 1, backgroundColor: 'rgb(5,87,143)' }}>
            <MenuIcon />
            <Typography variant="subtitle1" component="div" sx={{ ml: 1 }} >
              Categorías
            </Typography>
          </IconButton>

          <SearchBar />

          <IconButton sx={{ p: 1.5, pr: 3, backgroundColor: 'rgb(5,87,143)', mr: 1, borderRadius: 1 }}>
            <LocalGroceryStoreOutlinedIcon color="action" sx={{ color: 'rgb(255,193,31)', mr: 2 }} />
            <Badge badgeContent={1} color="warning" sx={{ color: 'rgb(5,87,<143)', backgroundColor: 'rgb(255,193,31)' }} />
          </IconButton>

          <IconButton sx={{ p: 1.5, backgroundColor: 'rgb(94,180,70)', color: 'white', borderRadius: 1 }}>
            <FastfoodIcon sx={{ mr: 1 }} />
            <Typography variant="subtitle1" component="div">
              <b>Supermercado</b>
            </Typography>
          </IconButton>

        </Toolbar>
      </AppBar>
    </header>
  );
}