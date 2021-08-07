import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.css';
import reportWebVitals from './reportWebVitals';
import RouterApp from './components/RouterApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux-saga/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <div>
          <RouterApp/>
          <ToastContainer/>
        </div>
      
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
