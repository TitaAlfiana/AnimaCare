import iconAvatar from '../../../public/icons/iconAvatar.png';
import iconLike from '../../../public/icons/like.png';
import iconLiked from '../../../public/icons/liked.png';
import iconParfum from '../../../public/icons/iconParfum.png';
import CONFIG from '../../globals/config';

const createForumItemTemplate = (forum) => {
  const date = new Date(forum.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `
  <div tabindex="0" class="list-forum">
      <div class="list-forum-item">
          <div class="header-list-forum">
              <p class="name-list-forum"><img src="${iconAvatar}" style="width: 50px; padding-right:10px;">${forum.nama}</p>
              <p class="date-list-forum">${date}</p>
          </div>
          <div class="body-list-forum">
              <p class="title-list-forum"><a href="${`#/forum/${forum._id}`}">${forum.title}</a></p>
              <p class="content-list-forum" style= "font-weight: lighter;">${forum.descript.slice(0, 170) + (forum.descript.length > 130 ? ' . . .' : '')}</p>
          </div>
      </div>
  </div>
    `;
};

const createForumItem = (forum) => `
  <div id="list-forum">
    ${forum.forums.map(createForumItemTemplate).join('')}
  </div>
`;

const createPostKomentarTemplate = (komentar) => {
  const date = new Date(komentar.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `
  <div class="komentar-item shadow p-3 mb-5 bg-white rounded">
      <div class="header-komentar">
          <p class="name-komentar">${komentar.nama}</p>
          <p class="date-komentar">${date}</p>
      </div>
      <div class="body-komentar">
          <p class="content-forum">${komentar.comment}</p>
      </div>
  </div>
    `;
};

const createForumDetailTemplate = (forums) => {
  const date = new Date(forums.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `
  <div class="detail-forum-item">
    <div class="header-forum my-4">
      <p class="name-forum"><img src="${iconAvatar}" style="width: 50px; padding-right:10px;">${forums.nama}</p>
      <p class="date-forum">${date}</p>
    </div>
    <div class="body-forum">
      <p class="title-forum">${forums.title}</p>
      <p class="content-forum">${forums.descript}</p>
    </div>
  </div>
  <h3 tabindex="0" class="title-komentar">Komentar</h3>
        
  <div class="container" id="list-komentar">
    ${forums.comments.map(createPostKomentarTemplate).join('')}
  </div>
    `;
};

const creatArticleItemTemplate = (article) => `
<a href="${`#/artikel/${article._id}`}" id="anchor">
<div class="card">
  <img src="${CONFIG.BASE_IMAGE_URL + article.image}" class="card-img-top" alt="image artikel">
  <div class="card-body">
    <h5 class="card-title" style="font-weight:bold;">${article.title}</h5>
    <p class="card-text">${article.descript.slice(0, 170) + (article.descript.length > 100 ? ' . . .' : '')}</p>
  </div>
</div>
</a>`;

const creatArticleItemTemplateInFavorite = (article) => `
<a href="${`#/artikel/${article.id}`}" id="anchor">
<div class="card">
  <img src="${CONFIG.BASE_IMAGE_URL + article.image}" class="card-img-top" alt="image artikel">
  <div class="card-body">
    <h5 class="card-title" style="font-weight:bold;">${article.title}</h5>
    <p class="card-text">${article.descript.slice(0, 170) + (article.descript.length > 100 ? ' . . .' : '')}</p>
  </div>
</div>
</a>`;

const creatArticleDetailTemplate = (DetailArticle) => `
<div class="artikel-detail">
        <h1 class="title-artcle" style="font-weight:bold; font-size: 30px" >${DetailArticle.title}</h1>
        <div class="img-artcl mt-5"><img src="${CONFIG.BASE_IMAGE_URL + DetailArticle.image}" class="img-fluid" alt="Responsive image"></div>
        <div class="deskripsi">
            <p class="paragraf">${DetailArticle.descript}</p>
        </div>
        
        <div class="deskrip-chill">
            <h2 class="title-artcle-subjudul mb-3" style="font-weight:bold; font-size: 20px">${DetailArticle.subFirstTitle}</h2>
                <p class="paragraf">${DetailArticle.descriptSubFirstTitle}</p>
                <h2 class="title-artcle-subjudul mb-3 mt-5" style="font-weight:bold; font-size: 20px">${DetailArticle.subSecondTitle}</h2>
                    <p class="paragraf">${DetailArticle.descriptSubSecondTitle}</p>
        </div>
    </div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this article;" id="likeButton" class="like">
  <img src="${iconLike}" class="img-like" alt="image artikel">
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this article" id="likeButton" class="like">
  <img src="${iconLiked}" class="img-like" alt="image artikel">
  </button>
`;

const createCardProductTemplate = (product) => `
<a href="${`https://www.tokopedia.com/search?st=product&q=${product.name}&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=`}" id="anchor" target="_blank" rel="noopener">
  <button class="icon-belanja btn" id="iconParfum">
    <img src="${CONFIG.BASE_IMAGE_URL + product.image}" alt="${product.name}" width="100px" height="100px" class=" mx-auto d-block mt-2"/>
    <p class="mt-2 text-center">${product.name}</p>
  </button>
</a>
`;

export {
  createForumItem,
  createForumItemTemplate,
  createPostKomentarTemplate,
  createForumDetailTemplate,
  creatArticleItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  creatArticleDetailTemplate,
  creatArticleItemTemplateInFavorite,
  createCardProductTemplate,
};
