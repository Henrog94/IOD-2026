import { Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Emoji from '../components/Emoji.jsx';

export default function Home() {
  return (
    <Stack spacing={3}>
      <div>
        <Chip color="secondary" label="Module 7 · React JS 2/2" />
        <Typography variant="h2" component="h1" sx={{ mt: 2, mb: 1 }}>Welcome to the React lab hub</Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>Explore React Hooks, shared Context, client-side routing, and Material UI styling in one small application.</Typography>
      </div>
      <Emoji />
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>Navigate the app</Typography>
          <Typography sx={{ mb: 2 }}>Use the navigation bar to switch between Home, Login, and Bitcoin Rates without a full page reload.</Typography>
          <Button component={Link} to="/bitcoin-rates" variant="outlined">View Bitcoin Rates</Button>
        </CardContent>
      </Card>
    </Stack>
  );
}
