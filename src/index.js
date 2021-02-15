import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
// import Admin from './admin';
// import Home from './pages/route_demo/route1/Home'
// import Router from './pages/route_demo/route2/router.js'
// import Router from './pages/route_demo/route3/router.js'
import Router from './router.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Admin /> */}
    {/* <Home/> */}
    {/* <Router/> */}
    
    <Router/>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
