import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'Login', to: '/login' },
  { label: 'Bitcoin Rates', to: '/bitcoin-rates' }
];

export default function NavBar() {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ gap: 2, flexWrap: 'wrap' }}>
        <CurrencyBitcoinIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 800 }}>
          React Module 7
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {links.map(link => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              color="inherit"
              sx={{ '&.active': { bgcolor: 'rgba(255,255,255,0.18)' } }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
