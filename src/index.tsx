import {StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from './app/app.component';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
