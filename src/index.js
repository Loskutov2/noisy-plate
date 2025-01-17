import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.tsx';
import { GlobalStyle } from './GlobalStyle.tsx';

export const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='/noisy-plate'>
        <ThemeProvider theme={theme}>
            <App/>
            <GlobalStyle/>
            <div className='overlay'></div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
