/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/style.css';
import './components/appbar/app-bar';
import './components/footer/footer-content';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';

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
  swRegister();
});

// eslint-disable-next-line func-names
// nav-link active
// eslint-disable-next-line func-names
$('.nav-link').on('click', function () {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
});

// zoom animate for icon store
// const animateIcon = document.querySelectorAll('.icon-belanja');
// animateIcon.forEach((crd, i) => {
//   // eslint-disable-next-line no-param-reassign
//   crd.dataset.aos = 'fade-up';
//   // eslint-disable-next-line no-param-reassign
//   crd.dataset.aosDelay = i * 500;
//   // eslint-disable-next-line no-param-reassign
//   crd.dataset.aosDuration = 5000;
// });

// for animate
AOS.init({
//  once: true,
});
