/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './components/appbar/app-bar';
import './components/footer/footer-content';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './views/app';
// import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('.nav-list-container'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
