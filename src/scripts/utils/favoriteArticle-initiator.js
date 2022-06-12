import FavoriteArticleIdb from '../data/animaCare-favArticleIDB';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, article }) {
    this._likeButtonContainer = likeButtonContainer;
    this._article = article;
    await this._renderButton();
  },

  async _renderButton() {
    const {
      id,
    } = this._article;

    if (await this._isArticleExist(id)) {
      this._renderLikedButton();
    } else {
      this._renderLikeButton();
    }
  },

  async _isArticleExist(id) {
    const article = await FavoriteArticleIdb.getArticle(id);
    return !!article;
  },

  _renderLikeButton() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.getElementById('likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteArticleIdb.putArticle(this._article);
      this._renderButton();
    });
  },

  _renderLikedButton() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likedButton = document.getElementById('likeButton');
    likedButton.addEventListener('click', async () => {
      await FavoriteArticleIdb.deleteArticle(this._article.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
