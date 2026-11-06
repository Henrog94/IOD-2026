import { useState } from 'react';
import { useBitcoinPrice } from './hooks/useBitcoinPrice.js';
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
export default function App() {
  const [currency, setCurrency] = useState('USD');
  const { loading, price, error } = useBitcoinPrice(currency);
  const formattedPrice = price === null ? '' : new Intl.NumberFormat(undefined, { style: 'currency', currency, maximumFractionDigits: 2 }).format(price);
  return <main className="panel"><h1>Bitcoin Exchange Rate</h1><label htmlFor="currency">Choose currency</label><select id="currency" value={currency} onChange={e => setCurrency(e.target.value)}>{currencies.map(code => <option key={code}>{code}</option>)}</select>{loading && <p>Loading current Bitcoin price…</p>}{!loading && price !== null && <h2>{formattedPrice} per BTC</h2>}{error && <p className="error">{error}</p>}</main>;
}
