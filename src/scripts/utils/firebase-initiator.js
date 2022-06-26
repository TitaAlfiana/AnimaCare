/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Swal from 'sweetalert2';

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

const LoginForm = () => {
  const loginForm = document.getElementById('login-form');
  const email = loginForm['login-email'].value;
  const password = loginForm['login-pass'].value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = '#/admin';
      loginForm.reset();
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email atau Katasandi Anda Salah!',
      });
    });
};

const Logout = () => {
  const auth = getAuth();
  auth.signOut()
    .then(() => {
      window.location.href = '#/login';
    });
};

const PrivateRoutes = () => {
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
};

export { LoginForm, Logout, PrivateRoutes };
