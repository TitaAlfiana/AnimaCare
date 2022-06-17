import image5 from '../../../../public/images/image5.png';
import image4 from '../../../../public/images/image4.png';
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
import AnimaCareDbSource from '../../../data/animaCaredb-source';
import { creatArticleItemTemplate } from '../../templates/template-creator';
import './beranda.css';
import UrlParser from '../../../routes/url-parser';

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
        <img class="hero-image" src=${image5} alt='hero image' data-aos="fade-up" data-aos-duration="3000"/>
      </div>
      <div class="hero-right">
        <h3 style="font-weight: bold;"><span style="color: #699BF7;">Solusi</span> Kesehatan <span style="color: #699BF7;">Hewan</span> Tersayang</h3>
        <p style="font-size: 17px;">Hadir untuk membantu animal lovers berkonsultasi dengan dokter hewan terpercaya ! Konsultasikan kesehatan hewan secara gratis hanya disini</p>
        <button class="button1"><a href="#content-2">Lebih lengkap</a></button>
      </div>
    </div>
  </section>

  <section id="content-2" class="content-2">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6">
          <figure class="figure" data-aos="fade-up" data-aos-duration="1000">
            <img src=${image4} class="figure-img img-fluid rounded" alt="Ilustration AnimaCare">
          </figure>
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <h3 class=" font-weight-bold mb-4">Apa sih AnimaCare?</h3>
          <p class="container">AnimaCare adalah layanan kesehatan hewan online yang membantu Anda dalam menjaga dan merawat hewan peliharaan Anda. Mulai dari konsultasi kesehatan hewan peliharaan dengan dokter hewan handal & terpercaya, mencari artikel tentang seputar hewan peliharaan, membagikan cerita pengalaman para pencinta hewan peliharaan tentang hewan peliharaannya, dan juga berbelanja kebutuhan dan keperluan hewan peliharaan kesayangan Anda.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="content-3" class="content-3">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 ">
          <h3 class=" font-weight-bold mb-4">Dalami Pengetahuanmu Seputar Dunia Hewan Peliharaan</h3>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
          <a href="#/artikel" class="" style="font-size: 20px;">Lebih banyak</a>
        </div>
      </div>
      <div class="list">
        <img class="vector5 img-fluid" src="${vector5}" alt="vector">
        <img class="vector6 img-fluid" src="${vector3}" alt="vector">
        <div class="list-article">
        
        
        </div>
      </div>
    </div>
  </section>

  <section id="content-4" class="content-4">
    <div class="container mt-5">
      <h3 class=" font-weight-bold" style = "margin-bottom:30px;">Belanja Keperluan <span style="color: #699BF7;">Hewan Kesayangan </span></h3>
        <div class="">
        <div class="list-icon-belanja mx-auto">
          <button class="icon-belanja btn" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="50">
            <img src="${iconMakananKucing}" alt="Icon Makanan Kucing" width="100px" height="100px" class=" mx-auto d-block"/>
            <p class="mt-2 text-center">Makanan Kucing</p>
          </button>
          <button class="icon-belanja btn" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="100">
            <img src="${iconMakananAnjing}" alt="Icon Makanan Anjing" height="100px" width="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Makanan Anjing</p>
          </button>
          <button class="icon-belanja btn" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="150">
            <img src="${iconParfum}" alt="Icon Parfum" width="100px" height="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Parfum</p>
          </button>
          <button class="icon-belanja btn" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
            <img src="${iconVitamin}" alt="Icon Vitamin" width="100px" height="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Vitamin</p>
          </button>
          <button class="icon-belanja btn" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="50">
            <img src="${iconKandang}" alt="Icon Kandang" width="100px" height="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Kandang</p>
          </button>
          <button class="icon-belanja btn" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">
            <img src="${iconSusu}" alt="Icon Susu" width="70px" height="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Susu</p>
          </button>
          <button class="icon-belanja btn" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="150">
            <img src="${iconObat}" alt="Icon Obat" width="100px" height="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Obat</p>
          </button>
          <button class="icon-belanja btn" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200">
            <img src="${iconBoxPasir}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2"/>
            <p class="mt-2 text-center">Box Pasir</p>
          </button>
        </div>
      </div>
      <div class="container-btn-detail">
      <button class="button2"><a href="#/belanja">Belanja  </a><img src="${arrow}"></button></div>
    </div>
  </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const listArtikel = await AnimaCareDbSource.listArticle(url.id);
    const listArtikelContainer = document.querySelector('.list-article');
    listArtikel.forEach((article) => {
      listArtikelContainer.innerHTML += creatArticleItemTemplate(article);
    });
  },
};

export default Beranda;
