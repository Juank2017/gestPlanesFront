
import ReactDOM from 'react-dom/client'


import { GestPlanApp } from './GestPlanApp'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store} >
    <BrowserRouter>
      <GestPlanApp />
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
)
