import { useEffect, useState } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export default function App() {
  const [currency, setCurrency] = useState('USD');
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPrice() {
      setLoading(true); setError(''); setPrice(null);
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`, { signal: controller.signal });
        if (!response.ok) throw new Error('The price service is unavailable.');
        const data = await response.json();
        const currentPrice = data?.bitcoin?.[currency.toLowerCase()];
        if (typeof currentPrice !== 'number') throw new Error('No price was returned. Try again later.');
        setPrice(currentPrice);
      } catch (err) { if (err.name !== 'AbortError') setError(err.message); }
      finally { if (!controller.signal.aborted) setLoading(false); }
    }
    fetchPrice();
    return () => controller.abort();
  }, [currency]);

  const formattedPrice = price === null ? '' : new Intl.NumberFormat(undefined, { style: 'currency', currency, maximumFractionDigits: 2 }).format(price);
  return <main className="panel"><h1>Bitcoin Exchange Rate</h1><label htmlFor="currency">Choose currency</label><select id="currency" value={currency} onChange={e => setCurrency(e.target.value)}>{currencies.map(code => <option key={code}>{code}</option>)}</select>{loading && <p>Loading current Bitcoin price…</p>}{!loading && price !== null && <h2>{formattedPrice} per BTC</h2>}{error && <p className="error">{error}</p>}</main>;
}
