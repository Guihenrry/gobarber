import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
);

export default App;
