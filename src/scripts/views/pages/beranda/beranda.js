import image5 from '../../../../public/images/image5.png';
import image4 from '../../../../public/images/image4.png';
import vector1 from '../../../../public/vector/Vector1.png';
import vector2 from '../../../../public/vector/Vector2.png';
import vector3 from '../../../../public/vector/Vector3.png';
import vector4 from '../../../../public/vector/Vector4.png';
import './beranda.css';

const Beranda = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    return `
    <section id="content-1" class="content-1">
    <img class="vector1 img-fluid" src="${vector1}" alt="vector">
    <img class="vector2 img-fluid" src="${vector2}" alt="vector">
    <img class="vector3 img-fluid" src="${vector3}" alt="vector">
    <img class="vector4 img-fluid" src="${vector4}" alt="vector">
    <div class="container mt-5 container-hero">
      <div class="hero-left">
        <img class="hero-image" src=${image5} alt='hero image'/>
      </div>
      <div class="hero-right">
        <h3><span style="color: #699BF7;">Solusi</span> Kesehatan <span style="color: #699BF7;">Hewan</span> Tersayang</h3>
        <p>Hadir untuk membantu animal lovers berkonsultasi dengan dokter hewan terpercaya !</p>
        <a href="#content-2" class="button-detail">Lebih lengkap</a>
      </div>
    </div>
  </section>
  <section id="content-2" class="content-2">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <figure class="figure">
            <img src=${image4} class="figure-img img-fluid rounded" alt="Ilustration AnimaCare">
          </figure>
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center ">
          <h3 class=" font-weight-bold mb-4">Apa sih AnimaCare?</h3>
          <p class="container">Layanan online yang menyediakan semua kebutuhan hewan kesayanganmu. Mulai dari konsultasi kesehatan, belanja perlengkapan dan obat-obatan hewan, serta temukan artikel menarik tentang hewan peliharaan agar kamu semakin tahu apa yang dibutuhkan peliharaan kesayangan</p>
        </div>
      </div>
    </div>
  </section>
  <section id="content-3" class="content-3">
    <div class="container mt-5">
      
  </section>
    `;
  },
};

export default Beranda;
