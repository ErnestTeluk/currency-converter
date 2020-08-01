import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import App from 'Components/App/App';
import History from 'History.js';

ReactDOM.render(
  <React.StrictMode>
    <Router history={History}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
