import image5 from '../../../../public/images/image5.png';
import image4 from '../../../../public/images/image4.png';
import image3 from '../../../../public/images/image3.png';
import vector1 from '../../../../public/vector/Vector1.png';
import vector2 from '../../../../public/vector/Vector2.png';
import vector3 from '../../../../public/vector/Vector3.png';
import vector4 from '../../../../public/vector/Vector4.png';
import vector5 from '../../../../public/vector/Vector5.png';
import iconMakananKucing from '../../../../public/icons/iconMakananKucing.png';
import iconMakananAnjing from '../../../../public/icons/iconMakananAnjing.png';
import iconParfum from '../../../../public/icons/iconParfum.png';
import iconVitamin from '../../../../public/icons/iconVitamin.png';
import iconKandang from '../../../../public/icons/iconKandang.png';
import iconSusu from '../../../../public/icons/iconSusu.png';
import iconObat from '../../../../public/icons/iconObat.png';
import iconBoxPasir from '../../../../public/icons/iconBoxPasir.png';
import arrow from '../../../../public/icons/arrow.png';
// import AnimaCareDbSource from '../../../data/animaCaredb-source';
import './beranda.css';

const Beranda = {
  async render() {
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
        <h3 style="font-weight: bold;"><span style="color: #699BF7;">Solusi</span> Kesehatan <span style="color: #699BF7;">Hewan</span> Tersayang</h3>
        <p style="font-size: 17px;">Hadir untuk membantu animal lovers berkonsultasi dengan dokter hewan terpercaya ! Konsultasikan kesehatan hewan secara gratis hanya disini</p>
        <button class="btn button-detail mt-4"><a href="#content-2" class="button-detail">Lebih lengkap</a></button>
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
          <p class="container" style="font-size: 17px;">Layanan online yang menyediakan semua kebutuhan hewan kesayanganmu. Mulai dari konsultasi kesehatan, belanja perlengkapan dan obat-obatan hewan, serta temukan artikel menarik tentang hewan peliharaan agar kamu semakin tahu apa yang dibutuhkan peliharaan kesayangan</p>
        </div>
      </div>
    </div>
  </section>

  <section id="content-3" class="content-3">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 ">
          <h3 class=" font-weight-bold mb-4">Tambah Pengetahuan Seputar Hewan </h3>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
          <a href="#/artikel" class="" style="font-size: 20px;">Lebih banyak</a>
        </div>
      </div>
      <div class="list-artikel d-flex">
        <img class="vector5 img-fluid" src="${vector5}" alt="vector">
        <img class="vector6 img-fluid" src="${vector3}" alt="vector">
        <div class="card" style="width: 18rem;">
          <img src="${image3}" class="card-img-top" alt="image artikel">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="${image3}" class="card-img-top" alt="image artikel">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="${image3}" class="card-img-top" alt="image artikel">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="${image3}" class="card-img-top" alt="image artikel">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="content-4" class="content-4">
    <div class="container mt-5">
      <h3 class=" font-weight-bold mb-4">Belanja Keperluan <span style="color: #699BF7;">Hewan Kesayangan </span></h3>
        <div class="">
        <div class="list-icon-belanja mx-auto">
          <button class="icon-belanja btn">
            <img src="${iconMakananKucing}" alt="Icon Makanan Kucing" width="100px" class=" mx-auto d-block"/>
            <p class="mt-2 text-center icon-belanja-title">Makanan Kucing</p>
          </button>
          <button class="icon-belanja btn">
            <img src="${iconMakananAnjing}" alt="Icon Makanan Anjing" width="100px" class=" mx-auto d-block"/>
            <p class="mt-2 text-center">Makanan Anjing</p>
          </button>
          <button class="icon-belanja btn">
            <img src="${iconParfum}" alt="Icon Parfum" width="100px" class=" mx-auto d-block"/>
            <p class="mt-2 text-center">Parfum</p>
          </button>
          <button class="icon-belanja btn">
            <img src="${iconVitamin}" alt="Icon Vitamin" width="100px" class=" mx-auto d-block"/>
            <p class="mt-2 text-center">Vitamin</p>
          </button>
          <button class="icon-belanja btn">
              <img src="${iconKandang}" alt="Icon Kandang" width="100px" class=" mx-auto d-block"/>
              <p class="mt-2 text-center">Kandang</p>
          </button>
          <button class="icon-belanja btn">
            <img src="${iconSusu}" alt="Icon Susu" height="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Susu</p>
          </button>
          <button class="icon-belanja btn">
            <img src="${iconObat}" alt="Icon Obat" width="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Obat</p>
          </button>
          <button class="icon-belanja btn">
            <img src="${iconBoxPasir}" alt="Icon Box Pasir" width="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Box Pasir</p>
          </button>
        </div>
      </div>
      <div class="container-btn-detail">
      <button class="btn button-detail mt-4">Belanja  <img src="${arrow}" alt=""></button></div>
    </div>
  </section>
    `;
  },

  async afterRender() {
    // const listArtikel = await AnimaCareDbSource.getArtikel();
    // const listArtikelContainer = document.querySelector('.list-artikel');
    // listArtikelContainer.innerHTML = '';
    // listArtikel.forEach(artikel => {
    //   listArtikelContainer.innerHTML += createArtikelItemTemplate(artikel);
    // });
  },
};

export default Beranda;
