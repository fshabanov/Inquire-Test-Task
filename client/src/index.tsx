import { HistoryRouter, Toast } from 'components/components';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { navigation as navigationService } from 'services/services';
import { store } from 'store/store';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const { history } = navigationService;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
        <Toast />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
