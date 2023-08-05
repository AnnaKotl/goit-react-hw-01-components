import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const mainTheme = {
  colors: {
    deepOrange: '#FFA500',
    warmOrange: '#FFCC00',
    peach: '#FFDAB9',
    terracotta: '#E2725B',
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
