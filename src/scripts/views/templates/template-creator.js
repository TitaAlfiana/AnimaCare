import iconAvatar from '../../../public/icons/iconAvatar.png';
import iconLike from '../../../public/icons/like.png';
import iconLiked from '../../../public/icons/liked.png';
// import iconParfum from '../../../public/icons/iconParfum.png';
import CONFIG from '../../globals/config';

const createForumItemTemplate = (forum) => {
  const date = new Date(forum.date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `
  <div tabindex="0" class="list-forum" data-aos="fade-up" data-aos-duration="1000">
      <div class="list-forum-item">
          <div class="header-list-forum">
              <p class="name-list-forum"><img src="${iconAvatar}" style="width: 50px; padding-right:10px;">${forum.nama}</p>
              <p class="date-list-forum">${date}</p>
          </div>
          <div class="body-list-forum">
              <h1 class="title-list-forum"><a href="${`#/forum/${forum._id}`}">${forum.title}</a></h1>
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
      <h1 class="title-forum">${forums.title}</h1>
      <p class="content-forum">${forums.descript}</p>
    </div>
  </div>

  <div class="cont-comment">
    <h2 tabindex="0" class="title-komentar">Komentar</h2>
          
    <div class="container" id="list-komentar">
      ${forums.comments.map(createPostKomentarTemplate).join('')}
    </div>
  </div>
    `;
};

const creatArticleItemTemplate = (article) => `
<a href="${`#/artikel/${article._id}`}" id="anc">
<div class="card" data-aos="zoom-in" data-aos-duration="1000">
<picture class="card-img-top">
<source class="card-img-top lazyload" srcset="${CONFIG.BASE_IMAGE_URL + article.image}" type="image/webp" media="all and (min-width: 300px)" />        
<source class="card-img-top lazyload" srcset="${CONFIG.BASE_IMAGE_URL + article.image}" type="image/jpeg" media="all and (min-width: 300px)" />
<img data-src="${CONFIG.BASE_IMAGE_URL + article.image}" class="card-img-top" alt="image artikel">
</picture>
  
  <div class="card-body">
    <h1 class="card-title" style="font-weight:bold; font-size:20px;">${article.title}</h1>
    <p class="card-text">${article.descript.slice(0, 170) + (article.descript.length > 100 ? ' . . .' : '')}</p>
  </div>
</div>
</a>`;

const creatArticleItemTemplateInFavorite = (article) => `
<a href="${`#/artikel/${article.id}`}" id="anc">
<div class="card">
<picture class="card-img-top">
<source class="card-img-top lazyload" srcset="${CONFIG.BASE_IMAGE_URL + article.image}" type="image/webp" media="all and (min-width: 300px)" />        
<source class="card-img-top lazyload" srcset="${CONFIG.BASE_IMAGE_URL + article.image}" type="image/jpeg" media="all and (min-width: 300px)" />
<img data-src="${CONFIG.BASE_IMAGE_URL + article.image}" class="card-img-top" alt="image artikel">
</picture>
  
  <div class="card-body">
    <h1 class="card-title" style="font-weight:bold; font-size:25px;">${article.title}</h1>
    <p class="card-text">${article.descript.slice(0, 170) + (article.descript.length > 100 ? ' . . .' : '')}</p>
  </div>
</div>
</a>`;

const creatArticleItemTemplateInAdmin = (article) => `
<a href="${`#/artikel-admin/${article._id}`}" id="anc">
<div class="card">
<picture class="card-img-top">
<source class="card-img-top lazyload" srcset="${CONFIG.BASE_IMAGE_URL + article.image}" type="image/webp" media="all and (min-width: 300px)" />        
<source class="card-img-top lazyload" srcset="${CONFIG.BASE_IMAGE_URL + article.image}" type="image/jpeg" media="all and (min-width: 300px)" />
<img data-src="${CONFIG.BASE_IMAGE_URL + article.image}" class="card-img-top" alt="image artikel">
</picture>
  
  <div class="card-body">
    <h1 class="card-title" style="font-weight:bold; font-size:25px;">${article.title}</h1>
    <p class="card-text">${article.descript.slice(0, 170) + (article.descript.length > 100 ? ' . . .' : '')}</p>
  </div>
</div>
</a>`;

const creatArticleDetailTemplate = (DetailArticle) => `
<div class="artikel-detail">
        <h1 class="title-artcle" style="font-weight:bold; font-size: 30px" >${DetailArticle.title}</h1>
        <div class="img-artcl mt-5">
        <picture class="img-fluid">
        <source class="img-fluid lazyload" srcset="${CONFIG.BASE_IMAGE_URL + DetailArticle.image}" type="image/webp" media="all and (min-width: 300px)" />        
        <source class="img-fluid lazyload" srcset="${CONFIG.BASE_IMAGE_URL + DetailArticle.image}" type="image/jpeg" media="all and (min-width: 300px)" />
        <img data-src="${CONFIG.BASE_IMAGE_URL + DetailArticle.image}" class="img-fluid" alt="image of article">
        </picture>
        
        </div>
        <div class="deskripsi">
            <p class="paragraf">${DetailArticle.descript}</p>
        </div>
        
        <div class="deskrip-child">
            <h2 class="title-artcle-subjudul mb-3" style="font-weight:bold; font-size: 20px">${DetailArticle.subFirstTitle}</h2>
                <p class="paragraf">${DetailArticle.descriptSubFirstTitle}</p>
                <h2 class="title-artcle-subjudul mb-3 mt-5" style="font-weight:bold; font-size: 20px">${DetailArticle.subSecondTitle}</h2>
                    <p class="paragraf">${DetailArticle.descriptSubSecondTitle}</p>
        </div>
    </div>`;

const creatArticleDetailTemplateinAdmin = (DetailArticle) => `
      <div class="artikel-detail">
        <div class="button-crud d-flex justify-content-end pr-5">
          <div class="btn-edt">
            <button type="submit" class="button-edit mb-4">Edit<img data-src="./icons/iconedit.png" alt="Icon edit" class="lazyload img-fluid"></button>
          </div>
          <div class="btn-hps">
            <button type="submit" class="button-hapus">Hapus<img data-src="./icons/iconsampah.png" alt="Icon edit" class="lazyload img-fluid"></button>
          </div>
        </div>
        <h1 class="title-artcle" style="font-weight:bold; font-size: 30px" >${DetailArticle.title}</h1>
        <div class="img-artcl mt-5">
          <picture class="img-fluid">
            <source class="img-fluid lazyload" srcset="${CONFIG.BASE_IMAGE_URL + DetailArticle.image}" type="image/webp" media="all and (min-width: 300px)" />        
            <source class="img-fluid lazyload" srcset="${CONFIG.BASE_IMAGE_URL + DetailArticle.image}" type="image/jpeg" media="all and (min-width: 300px)" />
            <img data-src="${CONFIG.BASE_IMAGE_URL + DetailArticle.image}" class="img-fluid" alt="image of article">
          </picture>
        </div>
        <div class="deskripsi">
            <p class="paragraf">${DetailArticle.descript}</p>
        </div>
        <div class="deskrip-child">
            <h2 class="title-artcle-subjudul mb-3" style="font-weight:bold; font-size: 20px">${DetailArticle.subFirstTitle}</h2>
            <p class="paragraf">${DetailArticle.descriptSubFirstTitle}</p>
            <h2 class="title-artcle-subjudul mb-3 mt-5" style="font-weight:bold; font-size: 20px">${DetailArticle.subSecondTitle}</h2>
            <p class="paragraf">${DetailArticle.descriptSubSecondTitle}</p>
        </div>
      </div>`;

const creatformEditArticle = (article) => `
<form id="formPost-edit">
            <div class="form-group">
                <label style="font-weight: bold;" for="exampleFormControlInput1">Judul Artikel</label>
                <input type="text" class="form-control" id="inputJudulArtikel" value="${article.title}">
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskrispi Artikel</label>
                <textarea class="form-control" id="inputDeskripsiArtikel" rows="3">${article.descript}</textarea>
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlInput1">Sub Judul Pertama Artikel</label>
                <input type="text" class="form-control" id="inputJudulPertamaArtikel" value="${article.subFirstTitle}">
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskripi Bahasan Pertama</label>
                <textarea class="form-control" id="inputDeskripiBahasanPertama" rows="3" >${article.descriptSubFirstTitle}</textarea>
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlInput1">Sub Judul Kedua Artikel</label>
                <input type="text" class="form-control" id="inputSubJudulKeduaArtikel" value="${article.subSecondTitle}">
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlTextarea1">Deskripi Bahasan Kedua</label>
                <textarea class="form-control" id="inputDeskripiBahasanKedua" rows="3">${article.descriptSubSecondTitle}</textarea>
            </div>

            <div class="form-group mt-3">
                <label style="font-weight: bold;" for="exampleFormControlFile1">Unggah Gambar Artikel</label>
                <input type="file" class="form-control-file" id="inputUnggahGambarArtikel" value="${article.image}">
            </div>
            <div class="button-unggah d-flex justify-content-end">
            <button type="submit" class="button2" id="unggah">Perbarui</button></div>
            </form>
`;

const createLikeButtonTemplate = () => `
<div class= "button-fav">
  <button aria-label="like this article;" id="likeButton" class="like">
  <h5 style="font-weight:bold;" class="ket-button"> Tandai sebagai favorit</h5>
  <img src="${iconLike}" class="img-like unlike" alt="icon favorit artikel">
  </button>
</div>
`;

const createLikedButtonTemplate = () => `
<div class= "button-fav">
  <button aria-label="unlike this article" id="likeButton" class="like">
  <h5 style="font-weight:bold;" class="ket-button"> Hapus artikel favorit</h5>
  <img src="${iconLiked}" class="img-like laik" alt="icon favorit artikel">
  </button>
</div>
`;

const createCardProductTemplate = (product) => `
<a href="${`https://www.tokopedia.com/search?st=product&q=${product.name}&srp_component_id=02.01.00.00&srp_page_id=&srp_page_title=&navsource=`}" id="anc" target="_blank" rel="noopener">
  <button class="product btn shadow-sm" id="iconParfum">
    <img src="${CONFIG.BASE_IMAGE_URL + product.image}" alt="${product.name}" width="120px" height="150px" class=" mx-auto d-block mt-2"/>
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
  creatArticleItemTemplateInAdmin,
  creatArticleDetailTemplateinAdmin,
  creatformEditArticle,
};
