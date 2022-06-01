import image6 from '../../../../public/images/image6.png';
import './lupaKataSandi.css';

const LupaKataSandi = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'none';
    const footer = document.querySelector('.footer');
    footer.style.display = 'none';

    return `
    <div class="d-flex flex-column position-relative">
      <div class="up text-center">
        <h1 class="mt-5 " style="color:#fff">Lupa Kata Sandi ?</h1>
      </div>
      <div class="container border layer-up position-absolute d-flex justify-content-center">
          <img src=${image6} class="image6" alt="Ilustration Lupa Kata Sandi">
          <div class="container_content">
            <p class="text-center headline">Masukkan alamat email yang sebelumnya telah terdaftar pada akun Anda</p>
            <form>
              <div class="form-group">
                <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Alamat email yang telah terdaftar" width="100%" required>
                <button class="btn button-forget-password" type="submit" title='Kirim link pulihan'>Kirim link pulihan</button>
              </div>
        </div>
      </div>
      <div class="down"></div>
    </div>
    `;
  },

  async after_render() {

  },
};

export default LupaKataSandi;
