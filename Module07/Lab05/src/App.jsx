import { Container, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import BitcoinRates from './components/BitcoinRates.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="md">
        <Box component="main" sx={{ py: { xs: 3, md: 5 } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bitcoin-rates" element={<BitcoinRates />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Container>
    </>
  );
}
