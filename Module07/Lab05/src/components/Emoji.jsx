import { Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { useMood } from '../context/MoodContext.jsx';

// Module 7 Exercise 3: the mood is shared through React Context.
export default function Emoji() {
  const { mood, changeMood } = useMood();

  return (
    <Card>
      <CardContent>
        <Stack spacing={1.5} alignItems="flex-start">
          <Typography variant="h5" component="h2">Emoji Mood</Typography>
          <Typography variant="h2" component="p" aria-label={mood.label}>
            {mood.emoji}
          </Typography>
          <Typography>Current mood: <strong>{mood.label}</strong></Typography>
          <Button variant="contained" onClick={changeMood}>Change Mood</Button>
          <Typography variant="body2" color="text.secondary">
            This button changes the shared mood. Visit Bitcoin Rates to see the same emoji there.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
