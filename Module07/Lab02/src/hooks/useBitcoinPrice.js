import { useEffect, useReducer } from 'react';
const initialState = { loading: false, price: null, error: '' };
function reducer(state, action) {
  switch (action.type) {
    case 'start': return { loading: true, price: null, error: '' };
    case 'success': return { loading: false, price: action.price, error: '' };
    case 'error': return { loading: false, price: null, error: action.message };
    default: return state;
  }
}
export function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      dispatch({ type: 'start' });
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`, { signal: controller.signal });
        if (!response.ok) throw new Error('The price service is unavailable.');
        const data = await response.json();
        const price = data?.bitcoin?.[currency.toLowerCase()];
        if (typeof price !== 'number') throw new Error('No price was returned. Try again later.');
        dispatch({ type: 'success', price });
      } catch (err) { if (err.name !== 'AbortError') dispatch({ type: 'error', message: err.message }); }
    }
    load();
    return () => controller.abort();
  }, [currency]);
  return state;
}
