import { useState } from 'react';
import { Alert, Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (password.length < 5) {
      setMessage('Password must be at least 5 characters long.');
    } else if (password === email) {
      setMessage('Password must not match the email address.');
    } else {
      setMessage(`Demo login successful. Welcome, ${name.trim() || email}!`);
    }
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h4" component="h1">Login</Typography>
      <Typography color="text.secondary">A front-end practice form based on the module's login example. It does not authenticate against a real server.</Typography>
      <Card><CardContent>
        <Stack component="form" spacing={2} onSubmit={handleSubmit}>
          <TextField label="Name" value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
          <TextField label="Email" type="email" required value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
          <TextField label="Password" type="password" required value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
          <Button type="submit" variant="contained">Log In</Button>
          {message && <Alert severity={message.startsWith('Demo login') ? 'success' : 'warning'}>{message}</Alert>}
        </Stack>
      </CardContent></Card>
    </Stack>
  );
}
