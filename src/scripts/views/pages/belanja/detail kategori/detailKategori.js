import { createCardProductTemplate } from '../../../templates/template-creator';
import AnimaCareDbSource from '../../../../data/animaCaredb-source';
import './detailKategori.css';

const DetailKategori = {
  async render() {
    return `
    <section id="hero">
        <div class="row">
            <div class="col-md-12">
                <div class="hero-content">
                    <h1 class="text-center">Belanja</h1>
                    <p class="text-center"> Belanja dengan mudah dan cepat </p>
                </div>
            </div>
        </div>

    </section>

    <section> 
        <div class="row m-0">
            <div class="col-8">
                <div class="container ml-5 mt-5" id="list-produk">

                </div>
            </div>

            <div class="col-4 container-card-category">
                <div class="container">
                    <div class="card-category border mt-5 bg-white shadow p-3 mb-5 rounded-lg">
                        <h1 class="text-center">Kategori</h1>
                        <div class="container-list-category">
                            <div class="list-category pl-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio1" value="option1">
                                    <label class="form-check-label" for="radio1">Makanan Kucing</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio2" value="option2">
                                    <label class="form-check-label" for="radio2">Makanan Anjing</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio3" value="option3">
                                    <label class="form-check-label" for="radio3">Parfum</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio4" value="option4">
                                    <label class="form-check-label" for="radio4">Vitamin</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio5" value="option5">
                                    <label class="form-check-label" for="radio5">Kandang</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio6" value="option6">
                                    <label class="form-check-label" for="radio6">Susu</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio7" value="option7">
                                    <label class="form-check-label" for="radio7">Obat</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio8" value="option8">
                                    <label class="form-check-label" for="radio8">Box Pasir</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio9" value="option9">
                                    <label class="form-check-label" for="radio9">Pasir</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio10" value="option10">
                                    <label class="form-check-label" for="radio10">Aksesoris</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio11" value="option11">
                                    <label class="form-check-label" for="radio11">Sampo</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radio" id="radio12" value="option12">
                                    <label class="form-check-label" for="radio12">Tas Hewan</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        `;
  },

  async afterRender() {
    const getMakananKucing = await AnimaCareDbSource.getMakananKucing();
    const getMakananAnjing = await AnimaCareDbSource.getMakananAnjing();
    const getParfum = await AnimaCareDbSource.getParfum();
    const getVitamin = await AnimaCareDbSource.getVitamin();
    const getKandang = await AnimaCareDbSource.getKandang();
    const getSusu = await AnimaCareDbSource.getSusu();
    const getObat = await AnimaCareDbSource.getObat();
    const getBoxPasir = await AnimaCareDbSource.getBoxPasir();
    const getPasir = await AnimaCareDbSource.getPasir();
    const getAksesoris = await AnimaCareDbSource.getAksesoris();
    const getSampo = await AnimaCareDbSource.getShampo();
    const getTasHewan = await AnimaCareDbSource.getTasHewan();
    const containerListProduct = document.querySelector('#list-produk');
    
    // list produk
    if (window.location.href.includes('makanan-kucing')) {
      document.querySelector('#radio1').checked = true;
      containerListProduct.innerHTML = '<h1>Makanan Kucing</h1>';
      getMakananKucing.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('makanan-anjing')) {
      document.querySelector('#radio2').checked = true;
      containerListProduct.innerHTML = '<h1>Makanan Anjing</h1>';
      getMakananAnjing.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('parfum')) {
      document.querySelector('#radio3').checked = true;
      containerListProduct.innerHTML = '<h1>Parfum</h1>';
      getParfum.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('vitamin')) {
      document.querySelector('#radio4').checked = true;
      containerListProduct.innerHTML = '<h1>Vitamin</h1>';
      getVitamin.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('kandang')) {
      document.querySelector('#radio5').checked = true;
      containerListProduct.innerHTML = '<h1>Kandang</h1>';
      getKandang.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('susu')) {
      document.querySelector('#radio6').checked = true;
      containerListProduct.innerHTML = '<h1>Susu</h1>';
      getSusu.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('obat')) {
      document.querySelector('#radio7').checked = true;
      containerListProduct.innerHTML = '<h1>Obat</h1>';
      getObat.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('box-pasir')) {
      document.querySelector('#radio8').checked = true;
      containerListProduct.innerHTML = '<h1>Box Pasir</h1>';
      getBoxPasir.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('pasir')) {
      document.querySelector('#radio9').checked = true;
      containerListProduct.innerHTML = '<h1>Pasir</h1>';
      getPasir.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('aksesoris')) {
      document.querySelector('#radio10').checked = true;
      containerListProduct.innerHTML = '<h1>Aksesoris</h1>';
      getAksesoris.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('sampo')) {
      document.querySelector('#radio11').checked = true;
      containerListProduct.innerHTML = '<h1>Sampo</h1>';
      getSampo.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    } else if (window.location.href.includes('tas-hewan')) {
      document.querySelector('#radio12').checked = true;
      containerListProduct.innerHTML = '<h1>Tas Hewan</h1>';
      getTasHewan.forEach((product) => {
        containerListProduct.innerHTML += (createCardProductTemplate(product));
      });
    }

    // kategori klik
    const radio = document.querySelectorAll('input[type="radio"]');
    radio.forEach((item) => {
      item.addEventListener('click', () => {
        const { value } = item;
        if (value === 'option1') {
          containerListProduct.innerHTML = '<h1>Makanan Kucing</h1>';
          getMakananKucing.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option2') {
          containerListProduct.innerHTML = '<h1>Makanan Anjing</h1>';
          getMakananAnjing.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option3') {
          containerListProduct.innerHTML = '<h1>Parfum</h1>';
          getParfum.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option4') {
          containerListProduct.innerHTML = '<h1>Vitamin</h1>';
          getVitamin.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option5') {
          containerListProduct.innerHTML = '<h1>Kandang</h1>';
          getKandang.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option6') {
          containerListProduct.innerHTML = '<h1>Susu</h1>';
          getSusu.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option7') {
          containerListProduct.innerHTML = '<h1>Obat</h1>';
          getObat.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option8') {
          containerListProduct.innerHTML = '<h1>Box Pasir</h1>';
          getBoxPasir.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option9') {
          containerListProduct.innerHTML = '<h1>Pasir</h1>';
          getPasir.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option10') {
          containerListProduct.innerHTML = '<h1>Aksesoris</h1>';
          getAksesoris.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option11') {
          containerListProduct.innerHTML = '<h1>Sampo</h1>';
          getSampo.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        } else if (value === 'option12') {
          containerListProduct.innerHTML = '<h1>Tas Hewan</h1>';
          getTasHewan.forEach((product) => {
            containerListProduct.innerHTML += (createCardProductTemplate(product));
          });
        }
      });
    });
  },
};

export default DetailKategori;
