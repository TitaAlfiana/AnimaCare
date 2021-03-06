import './postArticle.css';
import Swal from 'sweetalert2';
import vector2 from '../../../../../public/vector/Vector2.png';
import vector3 from '../../../../../public/vector/Vector3.png';
import vector5 from '../../../../../public/vector/Vector5.png';
import PostArticles from '../../../../utils/postArtikel-initiator';
import { PrivateRoutes } from '../../../../utils/firebase-initiator';
import { NavbarAndFooterDisplayNone } from '../../../../utils/navbarAndFooterDisplay-Initiator';

const PostArticle = {
  async render() {
    const border = document.querySelector('.border');
    border.style.display = 'none';
    NavbarAndFooterDisplayNone();
    PrivateRoutes();

    return `
    <div class="header-admin-back bg-dark">
    <button class="button-bck bg-dark"> <img data-src="./icons/back.png" alt="Icon arrow" class="lazyload" width="36px"></button>
    </div>
    <div class="cont-first">
        <h1 style="font-size:28px;"> Unggah <span style="color: #699BF7;"> Artikel </span></h1>
        <img class="vector5-artikel img-fluid lazyload" data-src="${vector5}" alt="vector">
        <img class="vector6-artikel img-fluid lazyload" data-src="${vector3}" alt="vector">
        <img class="vector7-artikel img-fluid lazyload" data-src="${vector2}" alt="vector">

        <div class="form-postArtikel">

            <div class="cont-postArtikel">
                <div class="cont-img d-flex justify-content-center">
                <img class='img-fluid text-center lazyload' data-src="./images/ucinganjing.png" alt='ilustration hewan' width="550px" /></div>
                <form id="formPost">
                    <div class="form-group">
                        <label style="font-weight: bold;" for="exampleFormControlInput1">Judul Artikel</label>
                        <input type="text" class="form-control" id="inputJudulArtikel">
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskrispi Artikel</label>
                        <textarea class="form-control " id="inputDeskripsiArtikel" rows="5"></textarea>
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlInput1">Sub Judul Pertama Artikel</label>
                        <input type="text" class="form-control" id="inputJudulPertamaArtikel" >
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskripi Bahasan Pertama</label>
                        <textarea class="form-control" id="inputDeskripiBahasanPertama" rows="5"></textarea>
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlInput1">Sub Judul Kedua Artikel</label>
                        <input type="text" class="form-control" id="inputSubJudulKeduaArtikel" >
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskripi Bahasan Kedua</label>
                        <textarea class="form-control" id="inputDeskripiBahasanKedua" rows="5"></textarea>
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlFile1">Unggah Gambar Artikel</label>
                        <input type="file" class="form-control-file" id="inputUnggahGambarArtikel">
                    </div>
                    <div class="button-unggah d-flex justify-content-end">
                    <button type="submit" class="button2" id="unggah">Unggah</button></div>
                </form>
            </div>
        </div>
    
    </div>

   
    `;
  },

  async afterRender() {
    window.$crisp.push(['do', 'chat:hide']);

    const formPost = document.getElementById('formPost');
    const inputJudul = document.getElementById('inputJudulArtikel');
    const inputDeskrip = document.getElementById('inputDeskripsiArtikel');
    const inputSubjudul1 = document.getElementById('inputJudulPertamaArtikel');
    const inputBahasan1 = document.getElementById('inputDeskripiBahasanPertama');
    const inputSubjudul2 = document.getElementById('inputSubJudulKeduaArtikel');
    const inputBahasan2 = document.getElementById('inputDeskripiBahasanKedua');
    const inputImg = document.getElementById('inputUnggahGambarArtikel');
    formPost.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (inputJudul.value === ''
      || inputDeskrip.value === ''
      || inputSubjudul1.value === ''
      || inputBahasan1.value === ''
      || inputSubjudul2.value === ''
      || inputBahasan2.value === ''
      || inputImg.value === null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Inputan tidak boleh ada yang kosong!',
        });
        inputJudul.value = '';
        inputDeskrip.value = '';
        inputSubjudul1.value = '';
        inputBahasan1.value = '';
        inputSubjudul2.value = '';
        inputBahasan2.value = '';
        inputImg.value = null;
      } else {
        PostArticles();
        Swal.fire(
          'Good job!',
          'Artikel Berhasil Diunggah!',
          'success',
        ).then(() => {
          window.location.href = '#/admin';
        });
        inputJudul.value = '';
        inputDeskrip.value = '';
        inputSubjudul1.value = '';
        inputBahasan1.value = '';
        inputSubjudul2.value = '';
        inputBahasan2.value = '';
        inputImg.value = null;
      }
    });
    // Button back
    const buttonBack = document.querySelector('.button-bck');
    buttonBack.addEventListener('click', () => {
      window.location.href = '#/admin';
    });
  },
};

export default PostArticle;
