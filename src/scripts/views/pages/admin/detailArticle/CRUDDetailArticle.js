import './CRUDDetailArticle.css';
import UrlParser from '../../../../routes/url-parser';
import AnimaCareDbSource from '../../../../data/animaCaredb-source';
import { creatArticleDetailTemplateinAdmin } from '../../../templates/template-creator';

const CRUDDetailArticle = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'none';
    const footer = document.querySelector('.footer');
    footer.style.display = 'none';
    const border = document.querySelector('.border');
    border.style.display = 'none';
    return `
    
    <div class="detailArtikelAdmin" id="detailArtikelAdmin">
    </div>
    
    
    `;
  },
  async afterRender() {
    window.$crisp.push(['do', 'chat:hide']);

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailArticle = await AnimaCareDbSource.detailArticle(url.id);
    console.log(detailArticle);
    const articleDetailContainer = document.querySelector('#detailArtikelAdmin');
    articleDetailContainer.innerHTML = creatArticleDetailTemplateinAdmin(detailArticle);
  },
};

export default CRUDDetailArticle;
