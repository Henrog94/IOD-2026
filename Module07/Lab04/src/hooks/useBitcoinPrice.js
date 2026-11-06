import { useEffect, useReducer } from 'react';

const initialState = { loading: false, price: null, currency: '', error: '' };

function bitcoinReducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { loading: true, price: null, currency: action.currency, error: '' };
    case 'FETCH_SUCCESS':
      return { loading: false, price: action.price, currency: action.currency, error: '' };
    case 'FETCH_ERROR':
      return { loading: false, price: null, currency: action.currency, error: action.message };
    default:
      return state;
  }
}

// Exercise 2: reusable custom hook. Exercise 1's effect and Exercise 2's
// reducer-based loading/data/error handling live here.
export function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(bitcoinReducer, initialState);

  useEffect(() => {
    if (!currency) return undefined;
    const controller = new AbortController();

    async function loadPrice() {
      dispatch({ type: 'FETCH_START', currency });
      try {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${encodeURIComponent(currency.toLowerCase())}`;
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error(`Price service returned HTTP ${response.status}.`);
        const json = await response.json();
        const price = json?.bitcoin?.[currency.toLowerCase()];
        if (typeof price !== 'number') throw new Error('The price was not included in the API response. Please try another currency later.');
        dispatch({ type: 'FETCH_SUCCESS', price, currency });
      } catch (error) {
        if (error.name !== 'AbortError') {
          dispatch({ type: 'FETCH_ERROR', currency, message: `${error.message} The API may be temporarily unavailable or rate-limited.` });
        }
      }
    }

    loadPrice();
    // Cleanup aborts a stale request if the currency changes or component unmounts.
    return () => controller.abort();
  }, [currency]);

  return state;
}
