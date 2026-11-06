import { createContext, useContext, useMemo, useState } from 'react';

// Module 6 Exercise 3 starts happy and switches between two emojis.
const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😢', label: 'Sad' }
];

const MoodContext = createContext(null);

export function MoodProvider({ children }) {
  const [moodIndex, setMoodIndex] = useState(0);

  const value = useMemo(() => ({
    mood: moods[moodIndex],
    changeMood: () => setMoodIndex(current => (current + 1) % moods.length)
  }), [moodIndex]);

  return (
    <MoodContext.Provider value={value}>
      {children}
    </MoodContext.Provider>
  );
}

export function useMood() {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error('useMood must be used inside MoodProvider');
  }
  return context;
}
