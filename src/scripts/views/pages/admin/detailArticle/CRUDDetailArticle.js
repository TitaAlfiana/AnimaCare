import './CRUDDetailArticle.css';
import UrlParser from '../../../../routes/url-parser';
import AnimaCareDbSource from '../../../../data/animaCaredb-source';
import { creatArticleDetailTemplateinAdmin } from '../../../templates/template-creator';
import { PrivateRoutes } from '../../../../utils/firebase-initiator';
import { NavbarAndFooterDisplayNone } from '../../../../utils/navbarAndFooterDisplay-Initiator';

const CRUDDetailArticle = {
  async render() {
    const border = document.querySelector('.border');
    border.style.display = 'none';
    NavbarAndFooterDisplayNone();
    PrivateRoutes();

    return `
    <div class="header-admin-back">
    <button class="button-bck"> <img data-src="./icons/back.png" alt="Icon arrow" class="lazyload" width="36px"></button>
    </div>
      <div class="detailArtikelAdmin" id="detailArtikelAdmin">
      </div>
    
    
    `;
  },
  async afterRender() {
    window.$crisp.push(['do', 'chat:hide']);

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailArticle = await AnimaCareDbSource.detailArticle(url.id);
    const articleDetailContainer = document.querySelector('#detailArtikelAdmin');
    articleDetailContainer.innerHTML = creatArticleDetailTemplateinAdmin(detailArticle);

    // UPDATE ARTICLE
    const buttonEdit = document.querySelector('.button-edit');
    buttonEdit.addEventListener('click', () => {
      window.location.href = `#/edit-artikel/${url.id}`;
    });

    // DELETE ARTICLE
    const buttonDelete = document.querySelector('.button-hapus');
    buttonDelete.addEventListener('click', async () => {
      const response = await AnimaCareDbSource.deleteArticle(url.id);
      if (response.status === 'success') {
        window.location.href = '#/admin';
      } else {
        alert('Gagal menghapus artikel');
      }
    });
    // Button back
    const buttonBack = document.querySelector('.button-bck');
    buttonBack.addEventListener('click', () => {
      window.location.href = '#/admin';
    });
  },
};

export default CRUDDetailArticle;
