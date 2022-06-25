import './postArticle.css';
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
    <div class="cont-first">
        <h1 style="font-size:28px;"> Unggah <span style="color: #699BF7;"> Artikel </span></h1>
        <img class="vector5-artikel img-fluid lazyload" data-src="${vector5}" alt="vector">
        <img class="vector6-artikel img-fluid lazyload" data-src="${vector3}" alt="vector">
        <img class="vector7-artikel img-fluid lazyload" data-src="${vector2}" alt="vector">

        <div class="form-postArtikel">

            <div class="cont-postArtikel">
                <div class="cont-img d-flex justify-content-center">
                <img class='img-fluid text-center' src="./images/ucinganjing.png" alt='ilustration hewan' width="550px" /></div>
                <form id="formPost">
                    <div class="form-group">
                        <label style="font-weight: bold;" for="exampleFormControlInput1">Judul Artikel</label>
                        <input type="text" class="form-control" id="inputJudulArtikel">
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskrispi Artikel</label>
                        <textarea class="form-control" id="inputDeskripsiArtikel" rows="3"></textarea>
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlInput1">Sub Judul Pertama Artikel</label>
                        <input type="text" class="form-control" id="inputJudulPertamaArtikel" >
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskripi Bahasan Pertama</label>
                        <textarea class="form-control" id="inputDeskripiBahasanPertama" rows="3"></textarea>
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlInput1">Sub Judul Kedua Artikel</label>
                        <input type="text" class="form-control" id="inputSubJudulKeduaArtikel" >
                    </div>

                    <div class="form-group mt-3">
                        <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskripi Bahasan Kedua</label>
                        <textarea class="form-control" id="inputDeskripiBahasanKedua" rows="3"></textarea>
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
    formPost.addEventListener('submit', async (e) => {
      e.preventDefault();
      PostArticles();
      alert('Artikel berhasil diunggah');
      window.location.href = '#/admin';
    });
  },
};

export default PostArticle;
