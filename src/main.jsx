
import ReactDOM from 'react-dom/client'


import { GestPlanApp } from './GestPlanApp'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { store } from './store/store';
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import 'moment/locale/es';
import moment from 'moment-timezone';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='es'>
      <Provider store={store} >
        <HashRouter>
          <GestPlanApp />
        </HashRouter>
      </Provider>

    </LocalizationProvider>
  </React.StrictMode>


)
