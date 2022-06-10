import './artikel.css';
import iconSearch from '../../../../public/icons/iconSearch.png';
import pet1 from '../../../../public/images/pet1.png';
import pet2 from '../../../../public/images/pet2.jpg';
import AnimaCareDbSource from '../../../data/animaCaredb-source';
import { creatArticleItemTemplate } from '../../templates/template-creator';

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
                <li><a href="#" class="nav-link">Semua</a></li>
            </div>
            <div class="fav-article">
                <li><a href="#" class="nav-link">Favorit</a></li>
            </div>
        </div>
    </div>

    <div class="search">
    <form class="search-bar d-flex">
          <input class="form-control" type="search" placeholder="Cari Pengalaman" aria-label="Search" id="search-input">
          <button class="btn my-2 my-sm-0" type="submit" id="search-button"><img src="${iconSearch}" alt="icon search" width="30px"> </button>
        </form>
    </div>

    <div class="list-article-inArtikel"></div>

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
    const listArtikel = await AnimaCareDbSource.listArticle();
    const articlesResult = listArtikel.articles;
    const listArtikelContainer = document.querySelector('.list-article-inArtikel');
    articlesResult.forEach((article) => {
      listArtikelContainer.innerHTML += creatArticleItemTemplate(article);
    });
  },
};

export default Artikel;
