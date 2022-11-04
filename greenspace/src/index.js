import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReactSite from './components/ReactSite'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/Navbar';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BasicExample/>
      <ReactSite />
  </Provider>
);

