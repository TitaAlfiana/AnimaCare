import image2 from '../../../../public/images/image2.png';
import './login.css';

const Login = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'none';
    const footer = document.querySelector('.footer');
    footer.style.display = 'none';
    return `
  <div>
    <div class="container-login">
      <div class="login-left">
        <h1>Selamat Datang!</h1>
        <p class='text-center'>Untuk tetap terhubung dengan kami, Masuk menggunakan akun yang sudah terdaftar</p>
        <img class='rounded mx-auto d-block' src=${image2} alt='ilustration hewan' />
      </div>

      <div class="login-right">
        <h1>Masuk</h1>
        <form>
        <div class="form-group">
          <label for="formGroupExampleInput" class="label">Email</label>
          <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Masukkan Email..." required>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2" class="label">Kata Sandi</label>
          <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Masukkan Kata Sandi..." required>
        </div>
      </form>
        <a href='#/lupa-kata-sandi'class='forget'>Lupa kata sandi?</a>
        <button class="btn btn-light button-login" type="submit" title='Login'>Login</button>
        <p class='text-center'>Belum punya akun? <a href='#/register'>Daftar disini</a></p>
      </div>
    </div>
  </div>
      `;
  },

  async afterRender() {

  }
};

export default Login;
