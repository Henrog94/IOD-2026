import { useState } from 'react';
import { Alert, Box, Card, CardContent, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice.js';
import { useMood } from '../context/MoodContext.jsx';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
const formatPrice = (price, currency) => new Intl.NumberFormat(undefined, {
  style: 'currency', currency, maximumFractionDigits: 2
}).format(price);

export default function BitcoinRates() {
  const [currency, setCurrency] = useState('USD');
  const { loading, price, error } = useBitcoinPrice(currency);
  const { mood } = useMood();

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>Bitcoin Exchange Rate</Typography>
        <Typography color="text.secondary"></Typography>
      </Box>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <FormControl fullWidth>
              <InputLabel id="currency-label">Choose currency</InputLabel>
              <Select labelId="currency-label" label="Choose currency" value={currency} onChange={event => setCurrency(event.target.value)}>
                {currencies.map(code => <MenuItem key={code} value={code}>{code}</MenuItem>)}
              </Select>
            </FormControl>
            {loading && <Typography role="status">Loading current Bitcoin price…</Typography>}
            {!loading && price !== null && <Typography variant="h3">{formatPrice(price, currency)} <Typography component="span" color="text.secondary" variant="body1">per BTC</Typography></Typography>}
            {error && <Alert severity="warning">{error}</Alert>}
            <Typography variant="body2" color="text.secondary">Prices are retrieved from CoinGecko. If the service blocks or rate-limits requests, try again later.</Typography>
          </Stack>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h6">Your current mood</Typography>
          <Typography variant="h2" sx={{ my: 1 }} aria-label={mood.label}>{mood.emoji}</Typography>
          <Typography>{mood.label}</Typography>
          <Typography variant="body2" color="text.secondary">This mood comes from shared React Context and updates when changed on any page.</Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
