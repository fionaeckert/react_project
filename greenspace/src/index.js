import React from 'react';
import ReactDOM from 'react-dom/client';
import './styling/index.css';
import ReactSite from './components/ReactSite'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import NavBar from './components/Navbar';
// import configureStore from "./store/configureStore";
// import Posts from './components/posts';

// const store = configureStore();
const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} className="container">
      <NavBar/>
      <ReactSite/>
      
  </Provider>
);

