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

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  	window.location.replace(window.location.href.slice(0, window.location.href.split('/', 3).join('/').length)); // returns to title on reload
}

ReactDOM.render(
  	<React.StrictMode>
    	<App />
  	</React.StrictMode>,
  	document.getElementById('root')
);
$("html").css("overflow", "hidden");
$(".title-img-fade").delay(1000).animate({"opacity": "1"}, 500);
$(".title-logo-fade").delay(2000).fadeIn(500);
$(".title-logo-fade").delay(1000).fadeOut(500);
$(".title-foreground-fade").delay(4000).fadeIn(500);

serviceWorker.unregister();
