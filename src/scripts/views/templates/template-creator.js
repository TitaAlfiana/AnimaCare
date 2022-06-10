import iconAvatar from '../../../public/icons/iconAvatar.png';
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
              <p class="content-list-forum" style= "font-weight: lighter;">${forum.descript}</p>
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
<div class="card">
  <img src="${CONFIG.BASE_IMAGE_URL + article.image}" class="card-img-top" alt="image artikel">
  <div class="card-body">
    <h5 class="card-title" style="font-weight:bold;">${article.title}</h5>
    <p class="card-text">${article.descript.slice(0, 170) + (article.descript.length > 100 ? ' . . .' : '')}</p>
  </div>
</div>`;

export {
  createForumItem,
  createForumItemTemplate,
  createPostKomentarTemplate,
  createForumDetailTemplate,
  creatArticleItemTemplate,
};
