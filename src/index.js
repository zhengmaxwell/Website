import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import 'bootstrap-social/bootstrap-social.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as $ from 'jquery';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
$(".title-img-fade").delay(1000).animate({"opacity": "1"}, 700);
$(".title-foreground-fade").delay(2000).animate({"opacity": "1"}, 700);

serviceWorker.unregister();
