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
import iconTasHewan from '../../../../public/icons/iconTasHewan.png';
import logoTroli from '../../../../public/images/logo-troli.png';
import logoToko from '../../../../public/images/logo-toko.png';
// eslint-disable-next-line import/no-unresolved
import iconSampo from '../../../../public/icons/iconSampo.png';
import logoTas from '../../../../public/images/logo-tas.png';

const Belanja = {

  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    return `
  <div class="container">
      <h3 class="title__header mt-5 font-weight-bold">Temukan produk yang dibutuhkan untuk <span style="color: #699BF7">Hewan Kesayanganmu!</span></h3>
      <section id="content-1" class="content-1 my-5">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img src="${logoTroli}" alt="Logo Troli" class="mx-auto d-block" width="200px"/>
              <p class="text-center mt-3">Selamat berbelanja!, silahkan pilih kategori produk sesuai kebutuhan yang Anda inginkan</p>
            </div>
            <div class="col-sm">
              <img src="${logoToko}" alt="Logo Toko" class="mx-auto d-block" width="200px"/>
              <p class="text-center mt-3">Setelah Anda memilih kategori produk dan memilih salah satu produk yang Anda inginkan, kami akan mengarahkan Anda ke salah satu platform marketplace terbaik dan terpercaya</p>
            </div>
            <div class="col-sm">
              <img src="${logoTas}" alt="Logo Tas" class="mx-auto d-block" width="200px"/>
              <p class="text-center mt-3">Selesaikan proses belanja Anda dan temukan banyak diskon yang bisa Anda dapatkan pada produk yang diinginkan.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="content-2" class="content-2">
        <div class="container mt-5">
          <h3 class=" font-weight-bold mb-4">Kategori Pilihan</h3>
            <div class="list-icon-belanja mx-auto" id="containerCategory">
              <button class="icon-belanja btn" id="iconMakananKucing">
                <img src="${iconMakananKucing}" alt="Icon Makanan Kucing" width="100px" height="100px" class=" mx-auto d-block"/>
                <p class="mt-2 text-center">Makanan Kucing</p>
              </button>
              <button class="icon-belanja btn" id="iconMakananAnjing">
                <img src="${iconMakananAnjing}" alt="Icon Makanan Anjing" height="100px" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Makanan Anjing</p>
              </button>
              <button class="icon-belanja btn" id="iconParfum">
                <img src="${iconParfum}" alt="Icon Parfum" width="100px" height="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Parfum</p>
              </button>
              <button class="icon-belanja btn" id="iconVitamin">
                <img src="${iconVitamin}" alt="Icon Vitamin" width="100px" height="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Vitamin</p>
              </button>
              <button class="icon-belanja btn" id="iconKandang">
                <img src="${iconKandang}" alt="Icon Kandang" width="100px" height="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Kandang</p>
              </button>
              <button class="icon-belanja btn" id="iconSusu">
                <img src="${iconSusu}" alt="Icon Susu" width="70px" height="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Susu</p>
              </button>
              <button class="icon-belanja btn" id="iconObat">
                <img src="${iconObat}" alt="Icon Obat" width="100px" height="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Obat</p>
              </button>
              <button class="icon-belanja btn" id="iconBoxPasir">
                <img src="${iconBoxPasir}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Box Pasir</p>
              </button>
              <button class="icon-belanja btn" id="iconPasir">
                <img src="${iconPasir}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Box Pasir</p>
              </button>
              <button class="icon-belanja btn" id="iconAksesoris">
                <img src="${iconAksesoris}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Box Pasir</p>
              </button>
              <button class="icon-belanja btn" id="iconSampo">
                <img src="${iconSampo}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Box Pasir</p>
              </button>
              <button class="icon-belanja btn" id="iconTasHewan">
                <img src="${iconTasHewan}" alt="Icon Box Pasir" height="100px" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Box Pasir</p>
              </button>
            </div>
        </div>
      </section>
  </div>
    `;
  },

  async afterRender() {
    
  },
};

export default Belanja;
