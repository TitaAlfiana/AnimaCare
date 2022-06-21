import UrlParser from '../../../../routes/url-parser';
import AnimaCareDbSource from '../../../../data/animaCaredb-source';
import { creatArticleDetailTemplate } from '../../../templates/template-creator';
import LikeButtonInitiator from '../../../../utils/favoriteArticle-initiator';
import './detailArtikel.css';

const DetailArticle = {
  async render() {
    return `
      <div id="favButtonContainer"></div>
      <div id="detail-article">
      </div>
     
    
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailArticle = await AnimaCareDbSource.detailArticle(url.id);
    const articleDetailContainer = document.querySelector('#detail-article');
    articleDetailContainer.innerHTML = creatArticleDetailTemplate(detailArticle);

    // like button
    LikeButtonInitiator.init({
      likeButtonContainer: document.getElementById('favButtonContainer'),
      article: {
        id: detailArticle._id,
        image: detailArticle.image,
        title: detailArticle.title,
        descript: detailArticle.descript,
      },
    });
  },
};

export default DetailArticle;
