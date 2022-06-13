import './artikel.css';
import iconSearch from '../../../../public/icons/iconSearch.png';
import pet1 from '../../../../public/images/pet1.png';
import pet2 from '../../../../public/images/pet2.jpg';
import AnimaCareDbSource from '../../../data/animaCaredb-source';
import FavoriteArticleIdb from '../../../data/animaCare-favArticleIDB';
import { creatArticleItemTemplate, creatArticleItemTemplateInFavorite } from '../../templates/template-creator';
import UrlParser from '../../../routes/url-parser';

const Artikel = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    return `
    <article>
        <div class="slideshow-container topping-slide">
            <div class="slideses" id="slideses">
                <div class="kanan1">
                    <div class="deskrip">
                        <h1>Syarat-syarat yang harus dipenuhi sebelum vaksinasi kucing</h1>
                        <p>Sama seperti manusia, seekor kucing juga perlu diberi beberapa jenis vaksin, seperti vaksin
                            F3 (tricat), vaksin F4 (tetracat), vaksin rabies, dan sebagainya. Pemberian vaksin pada
                            kucing sangatlah penting, karena itu menjadi
                            salah satu pencegahan dari beragam penyakit yang mungkin akan timbul nantinya.</p>
                    </div>
                </div>
                <div class="kiri">
                    <img src="${pet1}" alt="poster" class="img-artikel">
                </div>
            </div>

            <div class="slideses" id="slideses">
                <div class="kanan2">
                    <div class="deskrip">
                        <h1>Ketahui! Makanan manusia yang boleh dikonsumsi anjing</h1>
                        <p>Anda gemas ingin membagikan makanan yang Anda makan kepada Anjing kesayangan? Ditambah lagi,
                            jika ia memasang wajah memelas ketika melihat kita makan. Tetapi, apakah boleh makanan yang
                            dimakan manusia dimakan oleh anjing? Belum lagi,
                            khawatir makanan yang kita makan</p>
                    </div>
                </div>
                <div class="kiri">
                    <img src="${pet2}" alt="poster" class="img-artikel">
                </div>
            </div>
        </div>
    </article>

    <div class="cont">
        <div class="container-nav">
            <div class="all-article">
                <li data-tab-target="#list-article-inArtikel"><a class="nav-link">Semua</a></li>
            </div>
            <div class="fav-article">
                <li data-tab-target="#favorite-article"><a class="nav-link">Favorit</a></li>
            </div>
        </div>
    </div>
  
    <div class="tab-content container-article">
        <div data-tab-content id="list-article-inArtikel" class="active">
          <div class="search">
            <form class="search-bar d-flex">
                  <input class="search-input-article form-control" type="search" placeholder="Cari Artikel..." aria-label="Search" id="search-input-article">
                  <button class="btn my-2 my-sm-0" type="submit" id="search-button-article"><img src="${iconSearch}" alt="icon search" width="30px"> </button>
            </form>
          </div>
            <div class="artcl-update"><h1>Artikel terbaru</h1></div>
            <div class="list-article-inArtikel "></div>
        </div>
        <div data-tab-content  id="favorite-article">
            <div class="artcl-fav"><h1>Artikel favorite</h1></div>
            <div class="list-article-fav"></div>
        </div>
    </div>
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    let myIndex = 0;
    // eslint-disable-next-line no-use-before-define
    carousel();

    function carousel() {
      let i;
      const x = document.getElementsByClassName('slideses');
      // eslint-disable-next-line no-plusplus
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      // eslint-disable-next-line no-plusplus
      myIndex++;
      if (myIndex > x.length) { myIndex = 1; }
      x[myIndex - 1].style.display = '';
      setTimeout(carousel, 2000); // Change image every 2 seconds
    }

    // get data article
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const listArtikel = await AnimaCareDbSource.listArticle(url.id);
    const listArtikelContainer = document.querySelector('.list-article-inArtikel');
    listArtikel.reverse().forEach((article) => {
      listArtikelContainer.innerHTML += creatArticleItemTemplate(article);
    });

    // making tabs nav
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');
    // eslint-disable-next-line arrow-parens
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        // eslint-disable-next-line arrow-parens
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active');
        });
        target.classList.add('active');
      });
    });

    // search article
    const searchInput = document.querySelector('#search-input-article');
    const searchButton = document.querySelector('#search-button-article');
    searchButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const searchText = searchInput.value;
      const listArticleSearch = await AnimaCareDbSource.searchArticle(searchText);
      listArtikelContainer.innerHTML = '';
      if (listArticleSearch.length === 0) {
        listArtikelContainer.innerHTML = `<h3 class="text-center mt-5">Tidak ada hasil pencarian "<span class="font-weight-bold">${searchText}</span>"</h3>`;
      } else {
        listArticleSearch.forEach((article) => {
          listArtikelContainer.innerHTML += creatArticleItemTemplate(article);
        });
      }
      searchInput.value = '';
    });

    // get data favorite article
    const articles = await FavoriteArticleIdb.getAllArticle();
    const articleFavoriteContainer = document.querySelector('.list-article-fav');
    if (articles.length === 0) {
      articleFavoriteContainer.style.display = 'block';
      articleFavoriteContainer.innerHTML = `
      <h2 class="text-center mt-5">Tidak ada favorite artikel yang ditampilkan</h2>
      `;
    }

    articles.forEach((article) => {
      articleFavoriteContainer.innerHTML += creatArticleItemTemplateInFavorite(article);
    });

    // skip link
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  },
};

export default Artikel;
