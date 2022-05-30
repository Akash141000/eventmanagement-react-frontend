import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from "react-redux"
import { store } from './store/redux';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header/header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Header/>
    <App />
    </Provider>
    </BrowserRouter>

  </React.StrictMode>
);
