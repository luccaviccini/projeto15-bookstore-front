import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from "./components/App"
import GlobalStyle from './styles/GlobalStyles';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);