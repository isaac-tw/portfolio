import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import theme from './data/theme';
import ReactGA from "react-ga4";

ReactGA.initialize([
  {
    trackingId: "G-7PKHRMDY9J",
    gaOptions: {
      debug_mode: true,
    },
    gtagOptions: {
      debug_mode: true,
    },
  },
]);

ReactGA.send("Hello pageview!");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
