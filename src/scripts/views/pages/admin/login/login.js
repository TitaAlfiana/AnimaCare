import image2 from '../../../../../public/images/image2.png';
import './login.css';
import { LoginForm } from '../../../../utils/firebase-initiator';
import { NavbarAndFooterDisplayNone } from '../../../../utils/navbarAndFooterDisplay-Initiator';

const Login = {
  async render() {
    NavbarAndFooterDisplayNone();
    return `
  <div class="container-login">
    <div class="login border shadow rounded">
      <div class="login-left">
        <h1 class="title-login mt-3" style="font-size:28px">Selamat Datang Admin Animacare!</h1>
        <p class='text-center mt-2' style="font-size:16px">Untuk mengelola Website AnimaCare, Masuk menggunakan akun yang sudah terdaftar</p>
        <img class='rounded mx-auto d-block' src=${image2} alt='ilustration hewan' />
      </div>
      <div class="login-right">
        <h1>Masuk</h1>
        <form id="login-form">
        <div class="form-group">
          <label for="formGroupExampleInput" class="label">Email</label>
          <input type="email" class="form-control" id="login-email" placeholder="Masukkan Email..." required>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2" class="label">Kata Sandi</label>
          <input type="password" class="form-control" id="login-pass" placeholder="Masukkan Kata Sandi..." required>
        </div>
        <button class="btn btn-light button-login mt-4 btn-lgn" type="submit" title='Login' id="login" style="font-size:15px">Login</button>
      </form>
      </div>
    </div>
  </div>
      `;
  },

  async afterRender() {
    window.$crisp.push(['do', 'chat:hide']);

    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      LoginForm();
    });
  },
};

export default Login;
