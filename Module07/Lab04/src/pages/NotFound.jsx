import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return <Stack spacing={2}><Typography variant="h4">Page not found</Typography><Typography>The URL does not match a page in this app.</Typography><Button component={Link} to="/" variant="contained" sx={{ alignSelf: 'flex-start' }}>Return Home</Button></Stack>;
}
