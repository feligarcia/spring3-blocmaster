import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {store} from './redux/store/store'

ReactDOM.render(
  <Provider store={store}>
  
    <AppRouter />
 
  </Provider>,
  document.getElementById('root')
);


