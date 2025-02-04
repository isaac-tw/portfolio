import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import 'photoswipe/dist/photoswipe.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './data/theme';
import ReactGA from 'react-ga4';

ReactGA.initialize([
  {
    trackingId: 'G-7PKHRMDY9J',
    gaOptions: {
      debug_mode: true
    },
    gtagOptions: {
      debug_mode: true
    }
  }
]);

ReactGA.send('Hello pageview!');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
