import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const cool = require('cool-ascii-faces');
// const express = require('express');
// const path = require('path');
// const PORT = 3000
//
// express()
//     .use(express.static(path.join(__dirname, 'public')))
//     .set('views', path.join(__dirname, 'views'))
//     .set('view engine', 'ejs')
//     .get('/', (req, res) => res.render('pages/index'))
//     .get('/cool', (req, res) => res.send(cool()))
//     .listen(PORT, () => console.log(`Listening on ${ PORT }`));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
