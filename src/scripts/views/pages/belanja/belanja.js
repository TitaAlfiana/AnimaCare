import iconMakananKucing from '../../../../public/icons/iconMakananKucing.png';
import iconMakananAnjing from '../../../../public/icons/iconMakananAnjing.png';
import iconKandang from '../../../../public/icons/iconKandang.png';
import iconSusu from '../../../../public/icons/iconSusu.png';
import iconObat from '../../../../public/icons/iconObat.png';
import iconBoxPasir from '../../../../public/icons/iconBoxPasir.png';
import iconPasir from '../../../../public/icons/iconPasir.png';
import iconAksesoris from '../../../../public/icons/iconAksesoris.png';
import iconSampo from '../../../../public/icons/iconSampo.png';
import logoTroli from '../../../../public/images/logo-troli.png';
import logoToko from '../../../../public/images/logo-toko.png';
import logoTas from '../../../../public/images/logo-tas.png';

const Belanja = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    return `
    <div class="container">
      <h2 class="title__header">Temukan produk yang dibutuhkan untuk <span style="color: #699BF7">Hewan Kesayanganmu!</span></h2>

      <section id="content-1" class="content-1>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <img src="${logoTroli}" alt="Logo Troli"/>
              <p class="text-center logo-troli">Selamat berbelanja!, silahkan pilih kategori produk sesuai kebutuhan yang Anda inginkan</p>
            </div>
            <div class="col-sm">
              <img src="${logoToko}" alt="Logo Toko"/>
              <p class="text-center logo-toko">Setelah Anda memilih kategori produk dan memilih salah satu produk yang Anda inginkan, kami akan mengarahkan Anda ke salah satu platform marketplace terbaik dan terpercaya</p>
            </div>
            <div class="col-sm">
              <img src="${logoTas}" alt="Logo Tas"/>
              <p class="text-center logo-tas">Selesaikan proses belanja Anda dan temukan banyak diskon yang bisa Anda dapatkan pada produk yang diinginkan.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="content-2" class="content-2">
        <div class="container mt-5">
          <h3 class=" font-weight-bold mb-4">Kategori Pilihan</h3>
            <div class="">
            <div class="list-icon-belanja mx-auto">
              <button class="icon-belanja btn">
                <img src="${iconAksesoris}" alt="Icon Gunting Kuku Hewan" width="100px" class=" mx-auto d-block"/>
                <p class="mt-2 text-center icon-belanja-title">Gunting Kuku Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconAksesoris}" alt="Icon Kalung Hewan" width="100px" class=" mx-auto d-block"/>
                <p class="mt-2 text-center">Kalung Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconKandang}" alt="Icon Kandang Hewan" width="100px" class=" mx-auto d-block"/>
                <p class="mt-2 text-center">Kandang Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconPasir}" alt="Icon Mainan Hewan" width="100px" class=" mx-auto d-block"/>
                <p class="mt-2 text-center">Mainan Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconMakananKucing}" alt="Icon Makanan Hewan" width="100px" class=" mx-auto d-block"/>
                <p class="mt-2 text-center">Makanan Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconObat}" alt="Icon Obat & Vitamin Hewan" height="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Obat & Vitamin Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconBoxPasir}" alt="Icon Pasir Kucing" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Pasir Kucing</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconSampo}" alt="Icon Shampoo Hewan" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Shampoo Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconAksesoris}" alt="Icon Sikat Gigi Hewan" height="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Sikat Gigi Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconAksesoris}" alt="Icon Sisir Bulu Hewan" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Sisir Bulu Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconSusu}" alt="Icon Susu Hewan" height="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Susu Hewan</p>
              </button>
              <button class="icon-belanja btn">
                <img src="${iconMakananAnjing}" alt="Icon Tali Tuntun Anjing" width="100px" class=" mx-auto d-block mt-2"/>
                <p class="mt-2 text-center">Tali Tuntun Anjing</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    `;
  },
};

export default Belanja;
