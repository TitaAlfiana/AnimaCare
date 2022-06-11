import UrlParser from '../../../../routes/url-parser';
import AnimaCareDbSource from '../../../../data/animaCaredb-source';
import { creatArticleDetailTemplate, createLikeButtonTemplate } from '../../../templates/template-creator';
import './detailArtikel.css';

const DetailArticle = {
  async render() {
    return `
      <div id="detail-article" class="movie">
      </div>
      <div id="favButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailArticle = await AnimaCareDbSource.detailArticle(url.id);
    console.log(detailArticle);
    const articleDetailContainer = document.querySelector('#detail-article');
    articleDetailContainer.innerHTML = creatArticleDetailTemplate(detailArticle);

    const likeButtonContainer = document.querySelector('#favButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default DetailArticle;
