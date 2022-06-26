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
import { NavbarAndFooterDisplayBlock } from '../../../utils/navbarAndFooterDisplay-Initiator';

const Beranda = {
  async render() {
    NavbarAndFooterDisplayBlock();
    return `
  <section id="content-1" class="content-1">
    <img class="vector1 img-fluid lazyload" data-src="${vector1}" alt="vector">
    <img class="vector2 img-fluid lazyload" data-src="${vector2}" alt="vector">
    <img class="vector3 img-fluid lazyload" data-src="${vector3}" alt="vector">
    <img class="vector4 img-fluid lazyload" data-src="${vector4}" alt="vector">
    <div class="container mt-5 container-hero">
      <div class="hero-left">
      <picture class="hero-image" data-aos="fade-up" data-aos-duration="3000">
      <source class="hero-image lazyload" srcset="./images/image5.webp" type="image/webp" media="all and (min-width: 300px)" />        
      <source class="hero-image lazyload" srcset="./images/image5.jpg" type="image/jpeg" media="all and (min-width: 300px)" />
      <img class="hero-image lazyload" data-src=${image5} alt='hero image'/>
      </picture>
        
      </div>
      <div class="hero-right">
        <h1 style="font-weight: bold;" class="h1-beranda" tabindex="0"><span style="color: #699BF7;">Solusi</span> Kesehatan <span style="color: #699BF7;">Hewan</span> Tersayang</h1>
        <p style="font-size: 17px;" tabindex="0">Hadir untuk membantu animal lovers berkonsultasi dengan dokter hewan terpercaya ! Konsultasikan kesehatan hewan secara gratis hanya disini</p>
        <a href="#content-2" class="button1" tabindex="0">Lebih lengkap</a>
      </div>
    </div>
  </section>

  <section id="content-2" class="content-2">
    <div class="container mt-5">
      <div class="row" tabindex="0">
        <div class="col-md-6">
          <figure class="figure" data-aos="fade-up" data-aos-duration="1000">
          <picture class="figure-img img-fluid rounded">
          <source class="figure-img img-fluid rounded lazyload" srcset="./images/image4.webp" type="image/webp" media="all and (min-width: 300px)" />        
          <source class="figure-img img-fluid rounded lazyload" srcset="./images/image4.jpg" type="image/jpeg" media="all and (min-width: 300px)" />
          <img class="figure-img img-fluid rounded lazyload" data-src=${image4} alt='Ilustration AnimaCare'/>
          </picture>
          </figure>
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
          <h1 class=" font-weight-bold mb-4 h1-beranda">Apa sih AnimaCare?</h1>
          <p class="container">AnimaCare adalah Layanan kesehatan hewan online yang membantu Anda dalam menjaga dan merawat hewan peliharaan. Mulai dari konsultasi kesehatan hewan dengan dokter hewan handal & terpercaya, mencari artikel tentang seputar hewan peliharaan, membagikan cerita pengalaman tentang hewan peliharaannya, dan juga berbelanja kebutuhan dan keperluan hewan peliharaan kesayangan Anda</p>
        </div>
      </div>
    </div>
  </section>

  <section id="content-3" class="content-3">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-6 ">
          <h1 class=" font-weight-bold mb-4 h1-beranda" tabindex="0">Tambah Pengetahuan Seputar Hewan Peliharaan</h1>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
          <a href="#/artikel" class="" style="font-size: 20px;">Lebih banyak</a>
        </div>
      </div>
      <div class="list">
        <img class="vector5 img-fluid lazyload" data-src="${vector5}" alt="vector">
        <img class="vector6 img-fluid lazyload" data-src="${vector3}" alt="vector">
        <img class="vector7 img-fluid lazyload" data-src="${vector2}" alt="vector">
        <div class="list-article">
        
        
        </div>
      </div>
    </div>
  </section>

  <section id="content-4" class="content-4">
    <div class="container mt-5">
      <h1 class=" font-weight-bold h1-beranda" style = "margin-bottom:30px;" tabindex="0">Belanja Keperluan <span style="color: #699BF7;">Hewan Kesayangan </span></h1>
        <div class="">
        <div class="list-icon-belanja mx-auto">
          <button aria-label="Makanan Kucing" class="icon-belanja btn" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="50" id="iconMakananKucing">
            <img data-src="${iconMakananKucing}" alt="Icon Makanan Kucing" width="100px" height="100px" class=" mx-auto d-block lazyload"/>
            <p class="mt-2 text-center">Makanan Kucing</p>
          </button>
          <button aria-label="Makanan Anjing" class="icon-belanja btn" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="100" id="iconMakananAnjing">
            <img data-src="${iconMakananAnjing}" alt="Icon Makanan Anjing" height="100px" width="100px" class=" mx-auto d-block mt-2 lazyload"/>
            <p class="mt-2 text-center">Makanan Anjing</p>
          </button>
          <button aria-label="Parfum Hewan" class="icon-belanja btn" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="150" id="iconParfum">
            <img data-src="${iconParfum}" alt="Icon Parfum" width="100px" height="100px" class=" mx-auto d-block mt-2 lazyload"/>
            <p class="mt-2 text-center">Parfum</p>
          </button>
          <button aria-label="Vitamin Hewan" class="icon-belanja btn" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200" id="iconVitamin">
            <img data-src="${iconVitamin}" alt="Icon Vitamin" width="100px" height="100px" class=" mx-auto d-block mt-2 lazyload"/>
            <p class="mt-2 text-center">Vitamin</p>
          </button>
          <button aria-label="Kandang Hewan" class="icon-belanja btn" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="50" id="iconKandang">
            <img data-src="${iconKandang}" alt="Icon Kandang" width="100px" height="100px" class=" mx-auto d-block mt-2 lazyload" />
            <p class="mt-2 text-center">Kandang</p>
          </button>
          <button aria-label="Susu Untuk Hewan" class="icon-belanja btn" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100" id="iconSusu">
            <img data-src="${iconSusu}" alt="Icon Susu" width="70px" height="100px" class=" mx-auto d-block mt-2 lazyload"/>
            <p class="mt-2 text-center">Susu</p>
          </button>
          <button aria-label="Obat Hewan" class="icon-belanja btn" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="150" id="iconObat">
            <img data-src="${iconObat}" alt="Icon Obat" width="100px" height="100px" class=" mx-auto d-block mt-2 lazyload"/>
            <p class="mt-2 text-center">Obat</p>
          </button>
          <button aria-label="Pasir Hewan" class="icon-belanja btn" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200" id="iconBoxPasir">
            <img data-src="${iconBoxPasir}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2 lazyload"/>
            <p class="mt-2 text-center">Box Pasir</p>
          </button>
        </div>
      </div>
      <div class="container-btn-detail">
      <button class="button2"> Belanja <img data-src="${arrow}" alt="Icon arrow" class="lazyload"></button></div>
    </div>
  </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const listArtikel = await AnimaCareDbSource.listArticle(url.id);
    const listArtikelContainer = document.querySelector('.list-article');
    listArtikel.reverse().forEach((article) => {
      listArtikelContainer.innerHTML += creatArticleItemTemplate(article);
    });

    // button kategori belanja
    const makananKucing = document.getElementById('iconMakananKucing');
    const makananAnjing = document.getElementById('iconMakananAnjing');
    const parfum = document.getElementById('iconParfum');
    const vitamin = document.getElementById('iconVitamin');
    const kandang = document.getElementById('iconKandang');
    const susu = document.getElementById('iconSusu');
    const obat = document.getElementById('iconObat');
    const boxPasir = document.getElementById('iconBoxPasir');

    makananKucing.addEventListener('click', () => {
      window.location.href = '#/makanan-kucing';
    });
    makananAnjing.addEventListener('click', () => {
      window.location.href = '#/makanan-anjing';
    });
    parfum.addEventListener('click', () => {
      window.location.href = '#/parfum';
    });
    vitamin.addEventListener('click', () => {
      window.location.href = '#/vitamin';
    });
    kandang.addEventListener('click', () => {
      window.location.href = '#/kandang';
    });
    susu.addEventListener('click', () => {
      window.location.href = '#/susu';
    });
    obat.addEventListener('click', () => {
      window.location.href = '#/obat';
    });
    boxPasir.addEventListener('click', () => {
      window.location.href = '#/box-pasir';
    });

    const buttonBelanja = document.querySelector('.container-btn-detail');
    buttonBelanja.addEventListener('click', () => {
      window.location.href = '#/belanja';
    });
  },
};

export default Beranda;
