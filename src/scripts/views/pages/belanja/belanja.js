import iconMakananKucing from '../../../../public/icons/iconMakananKucing.png';
import iconMakananAnjing from '../../../../public/icons/iconMakananAnjing.png';
import iconParfum from '../../../../public/icons/iconParfum.png';
import iconVitamin from '../../../../public/icons/iconVitamin.png';
import iconKandang from '../../../../public/icons/iconKandang.png';
import iconSusu from '../../../../public/icons/iconSusu.png';
import iconObat from '../../../../public/icons/iconObat.png';
import iconBoxPasir from '../../../../public/icons/iconBoxPasir.png';
import iconPasir from '../../../../public/icons/iconPasir.png';
import iconAksesoris from '../../../../public/icons/iconAksesoris.png';
import iconSampo from '../../../../public/icons/iconSampo.png';
import iconTasHewan from '../../../../public/icons/iconTasHewan.png';
import logoTroli from '../../../../public/images/logo-troli.png';
import logoToko from '../../../../public/images/logo-toko.png';
import logoTas from '../../../../public/images/logo-tas.png';
import './belanja.css';
import { NavbarAndFooterDisplayBlock } from '../../../utils/navbarAndFooterDisplay-Initiator';

const Belanja = {

  async render() {
    NavbarAndFooterDisplayBlock();

    return `
  <div class="container">
      <h1 class="title__header-belanja mt-5 font-weight-bold">Temukan produk yang dibutuhkan untuk <span style="color: #699BF7">Hewan Kesayanganmu!</span></h1>
      <section id="content-1" class="content-1 my-5">
        <div class="container">
          <div class="row">
            <div class="col-sm crd-rule">
              <picture class="mx-auto d-block" width="200px" data-aos="fade-up" data-aos-duration="1000">
              <source type="image/webp" srcset="./images/logo-troli.webp">
              <source type="image/jpeg" srcset="./images/logo-troli.jpg">
              <img src="${logoTroli}" alt="Logo Troli" class="mx-auto d-block" width="200px">
              </picture>
              <p class="text-center mt-3">Selamat berbelanja!, silahkan pilih kategori produk sesuai kebutuhan yang Anda inginkan</p>
            </div>
            <div class="col-sm crd-rule">
              <picture class="mx-auto d-block" width="200px" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
              <source type="image/webp" srcset="./images/logo-toko.webp">
              <source type="image/jpeg" srcset="./images/logo-toko.jpg">
              <img src="${logoToko}" alt="Logo Toko" class="mx-auto d-block" width="200px">
              </picture>
              <p class="text-center mt-3">Setelah Anda memilih kategori produk dan memilih salah satu produk yang Anda inginkan, kami akan mengarahkan Anda ke salah satu platform marketplace terbaik dan terpercaya</p>
            </div>
            <div class="col-sm crd-rule">
              <picture class="mx-auto d-block" width="200px" data-aos="fade-up" data-aos-duration="1000"/>
              <source type="image/webp" srcset="./images/logo-tas.webp">
              <source type="image/jpeg" srcset="./images/logo-tas.jpg">
              <img src="${logoTas}" alt="Logo Tas" class="mx-auto d-block" width="200px">
              </picture>
              <p class="text-center mt-3">Selesaikan proses belanja Anda dan temukan banyak diskon yang bisa Anda dapatkan pada produk yang diinginkan.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="content-2" class="content-2-belanja">
        <div class="container content-2-belanja">
          <h1 class=" font-weight-bold mb-5">Kategori Pilihan</h1>
            <div class="list-icon-belanja mx-auto" id="containerCategory">
              <button aria-label="makanan kucing" class="icon-belanja btn" id="iconMakananKucing" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="50">
                <img data-src="${iconMakananKucing}" alt="Icon Makanan Kucing" width="100px" height="100px" class=" mx-auto d-block lazyload"/>
                <p class="mt-2 text-center">Makanan Kucing</p>
              </button>
              <button aria-label="makanan anjing" class="icon-belanja btn" id="iconMakananAnjing" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="100">
                <img data-src="${iconMakananAnjing}" alt="Icon Makanan Anjing" height="100px" width="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Makanan Anjing</p>
              </button>
              <button aria-label="Parfum Hewan" class="icon-belanja btn" id="iconParfum" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="150">
                <img data-src="${iconParfum}" alt="Icon Parfum" width="100px" height="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Parfum</p>
              </button>
              <button aria-label="vitamin Hewan" class="icon-belanja btn" id="iconVitamin" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
                <img data-src="${iconVitamin}" alt="Icon Vitamin" width="100px" height="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Vitamin</p>
              </button>
              <button aria-label="kandang Hewan" class="icon-belanja btn" id="iconKandang" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="50">
                <img data-src="${iconKandang}" alt="Icon Kandang" width="100px" height="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Kandang</p>
              </button>
              <button aria-label="kandang Hewan" class="icon-belanja btn" id="iconSusu" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="100">
                <img data-src="${iconSusu}" alt="Icon Susu" width="70px" height="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Susu</p>
              </button>
              <button aria-label="Obat Hewan" class="icon-belanja btn" id="iconObat" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="150">
                <img data-src="${iconObat}" alt="Icon Obat" width="100px" height="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Obat</p>
              </button>
              <button aria-label="Box Pasir Hewan" class="icon-belanja btn" id="iconBoxPasir" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="200">
                <img data-src="${iconBoxPasir}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Box Pasir</p>
              </button>
              <button aria-label="Pasir Hewan" class="icon-belanja btn" id="iconPasir" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="50">
                <img data-src="${iconPasir}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Pasir</p>
              </button>
              <button aria-label="Aksesoris Hewan" class="icon-belanja btn" id="iconAksesoris" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="100">
                <img data-src="${iconAksesoris}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Aksesoris</p>
              </button>
              <button aria-label="shampo Hewan" class="icon-belanja btn" id="iconSampo" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="150">
                <img data-src="${iconSampo}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Shampo</p>
              </button>
              <button aria-label="Tas Hewan" class="icon-belanja btn" id="iconTasHewan" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="200">
                <img data-src="${iconTasHewan}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2 lazyload"/>
                <p class="mt-2 text-center">Tas Hewan</p>
              </button>
            </div>
        </div>
      </section>
  </div>
    `;
  },

  async afterRender() {
    const makananKucing = document.getElementById('iconMakananKucing');
    const makananAnjing = document.getElementById('iconMakananAnjing');
    const parfum = document.getElementById('iconParfum');
    const vitamin = document.getElementById('iconVitamin');
    const kandang = document.getElementById('iconKandang');
    const susu = document.getElementById('iconSusu');
    const obat = document.getElementById('iconObat');
    const boxPasir = document.getElementById('iconBoxPasir');
    const pasir = document.getElementById('iconPasir');
    const aksesoris = document.getElementById('iconAksesoris');
    const sampo = document.getElementById('iconSampo');
    const tasHewan = document.getElementById('iconTasHewan');

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
    pasir.addEventListener('click', () => {
      window.location.href = '#/pasir';
    });
    aksesoris.addEventListener('click', () => {
      window.location.href = '#/aksesoris';
    });
    sampo.addEventListener('click', () => {
      window.location.href = '#/sampo';
    });
    tasHewan.addEventListener('click', () => {
      window.location.href = '#/tas-hewan';
    });
  },
};

export default Belanja;
