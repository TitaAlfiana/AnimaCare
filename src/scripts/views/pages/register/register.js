import image1 from '../../../../public/images/image1.png';
import logo from '../../../../public/logo/logo-bar.png';
import './register.css';

const Register = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'none';
    const footer = document.querySelector('.footer');
    footer.style.display = 'none';
    return `
  <div>
    <div class="container-daftar">
      <div class="register-left">
        <h1>Haloo... Pecinta Hewan</h1>
        <p class='text-center'>Isi data dirimu dengan melengkapi form ini untuk bergabung bersama kami, <img src=${logo} alt= 'Logo animacare' class='logo'/></p>
        <img class='rounded mx-auto d-block ilustration-hewan' src=${image1} alt='ilustration hewan'/>
      </div>
  
      <div class="register-right">
        <h1>Daftar</h1>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput" class="label">Nama</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Masukkan Nama..." required>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput" class="label">Email</label>
            <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Masukkan Email..." required>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2" class="label">Kata Sandi</label>
            <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Masukkan Kata Sandi..." required>
          </div>
        </form>
        <p>Sudah punya akun? <a href='#/login'>Masuk</a></p>
        <button class="btn btn-light button-daftar" type="submit" title='Daftar'>Daftar</button>
      </div>
    </div>
  </div>
        `;
  },

  async afterRender() {

  },
};

export default Register;
