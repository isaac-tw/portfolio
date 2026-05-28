import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import 'photoswipe/dist/photoswipe.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './data/theme';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const IS_GA_ENABLED = typeof GA_MEASUREMENT_ID === 'string' && GA_MEASUREMENT_ID.length > 0;

if (IS_GA_ENABLED) {
  ReactGA.initialize([
    {
      trackingId: GA_MEASUREMENT_ID
    }
  ]);

  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname + window.location.search
  });
}

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
