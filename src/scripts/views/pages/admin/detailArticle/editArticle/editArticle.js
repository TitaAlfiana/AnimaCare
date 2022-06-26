import './editArticle.css';
import vector2 from '../../../../../../public/vector/Vector2.png';
import vector3 from '../../../../../../public/vector/Vector3.png';
import vector5 from '../../../../../../public/vector/Vector5.png';
import UrlParser from '../../../../../routes/url-parser';
import AnimaCareDbSource from '../../../../../data/animaCaredb-source';
import kelinci from '../../../../../../public/images/kelinci.png';
import { creatformEditArticle } from '../../../../templates/template-creator';
import EditArticles from '../../../../../utils/editArtikel-initiator';
import { PrivateRoutes } from '../../../../../utils/firebase-initiator';
import { NavbarAndFooterDisplayNone } from '../../../../../utils/navbarAndFooterDisplay-Initiator';

const EditArticle = {
  async render() {
    const border = document.querySelector('.border');
    border.style.display = 'none';
    NavbarAndFooterDisplayNone();
    PrivateRoutes();

    return `
    <div class="header-admin-back">
    <button class="button-bck"> <img data-src="./icons/back.png" alt="Icon arrow" class="lazyload" width="36px"></button>
    </div>
    <div class="cont-first">
    <h1 style="font-size:28px; padding-left:20px;"> Edit <span style="color: #699BF7;"> Artikel </span></h1>
        <img class="vector5-artikel img-fluid lazyload" data-src="${vector5}" alt="vector">
        <img class="vector6-artikel img-fluid lazyload" data-src="${vector3}" alt="vector">
        <img class="vector7-artikel img-fluid lazyload" data-src="${vector2}" alt="vector">
        
        <div class="form-editArtikel" >
            <div class="cont-editArtikel">
                <div class="cont-img d-flex justify-content-center">
                    <img class='img-fluid text-center lazyload' data-src="${kelinci}" alt='ilustration hewan' width="580px" />
                </div>
                <div id="form-editArtikel"></div>
            </div>

        </div>
      
    </div>
      `;
  },
  async afterRender() {
    window.$crisp.push(['do', 'chat:hide']);

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailArticle = await AnimaCareDbSource.detailArticle(url.id);
    const articleFormEditContainer = document.querySelector('#form-editArtikel');
    articleFormEditContainer.innerHTML = creatformEditArticle(detailArticle);
    const formEditArticle = document.querySelector('#formPost-edit');
    formEditArticle.addEventListener('submit', async (e) => {
      e.preventDefault();
      EditArticles();
      alert('Artikel berhasil diubah');
      window.location.href = `#/artikel-admin/${url.id}`;
    });
    // Button back
    const buttonBack = document.querySelector('.button-bck');
    buttonBack.addEventListener('click', () => {
      window.location.href = `#/artikel-admin/${url.id}`;
    });
  },
};

export default EditArticle;
