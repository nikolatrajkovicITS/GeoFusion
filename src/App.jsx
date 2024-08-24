import React from 'react';
import ThemeRegistry from '@/styles/ThemeRegistry';
import AppContent from '@/components/organisms/AppContent';
import AppState from '@/context/AppState';

function App() {
  return (
    <ThemeRegistry>
      <AppState>
        <AppContent />
      </AppState>
    </ThemeRegistry>
  );
}

export default App;
