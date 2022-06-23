import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './dasboard.css';

const firebaseConfig = {
  apiKey: 'AIzaSyBjO2ot5P_nK3AIvFZOAcDQ0YdqhxM2NMM',
  authDomain: 'developer-introvert.firebaseapp.com',
  projectId: 'developer-introvert',
  storageBucket: 'developer-introvert.appspot.com',
  messagingSenderId: '274558345593',
  appId: '1:274558345593:web:9a0984032cb7984d6e0fa8',
  measurementId: 'G-29K1W180JQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const Login = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'none';
    const footer = document.querySelector('.footer');
    footer.style.display = 'none';

    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          window.location.href = '#/admin';
        }
      } else {
        window.location.href = '#/login';
      }
    });
    return `
    <h1>Selamat Datang!</h1>
    <button class="btn btn-light button-login" type="submit" title='Login' id="logout">Logout</button>
      `;
  },

  async afterRender() {
    window.$crisp.push(['do', 'chat:hide']);

    const logout = document.getElementById('logout');
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      const auth = getAuth();
      auth.signOut()
        .then(() => {
          window.location.href = '#/login';
        });
    });
  },
};

export default Login;
