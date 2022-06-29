import './CRUDDetailArticle.css';
import Swal from 'sweetalert2';
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
    <div class="header-admin-back bg-dark">
    <button class="button-bck bg-dark"> <img data-src="./icons/back.png" alt="Icon arrow" class="lazyload" width="36px"></button>
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
      Swal.fire({
        title: 'Yakin Ingin Menghapus Artikel?',
        text: 'Artikel yang telah dihapus tidak dapat dipulihkan!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Hapus',
      }).then((result) => {
        if (result.value) {
          AnimaCareDbSource.deleteArticle(url.id);
          Swal.fire(
            'Dihapus!',
            'Artikel berhasil dihapus.',
            'success',
          ).then(() => {
            window.location.href = '#/admin';
          });
        }
      });
    });

    // Button back
    const buttonBack = document.querySelector('.button-bck');
    buttonBack.addEventListener('click', () => {
      window.location.href = '#/admin';
    });
  },
};

export default CRUDDetailArticle;
