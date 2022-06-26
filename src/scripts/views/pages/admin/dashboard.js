import AnimaCareDbSource from '../../../data/animaCaredb-source';
import { creatArticleItemTemplateInAdmin } from '../../templates/template-creator';
import UrlParser from '../../../routes/url-parser';
import logoDashboard from '../../../../public/logo/logo-transparan.png';
import iconSearch from '../../../../public/icons/iconSearch.png';
import { Logout, PrivateRoutes } from '../../../utils/firebase-initiator';
import './dasboard.css';
import { NavbarAndFooterDisplayNone } from '../../../utils/navbarAndFooterDisplay-Initiator';

const Login = {
  async render() {
    const border = document.querySelector('.border');
    border.style.display = 'none';
    NavbarAndFooterDisplayNone();
    PrivateRoutes();

    return `
    <div class="header-admin">
      <div class="left-header d-flex">
        <h1 style="padding-right:20px; margin-top:7px;">Dashboard</h1>
        <img style="margin-top:7px;" src="${logoDashboard}" class="img-fluid img-dashboard" alt="icon Animacare" width="170px"></div>

      <div class="right-header">
        <button class="btn btn-light button-logout" type="submit" title='Logout' id="logout">Logout</button></div>
    </div>


    <div class="cont-first">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
        <a href="#/post-artikel" id="anc">
          <div class="card-header"><img src="./images/img0.png" class="img-fluid" alt="icon"></div>
            <div class="card-body">
              <h1 style="font-size:20px; color:#699BF7;" class="card-title text-center">Unggah Artikel Baru</h1>
            </div></a>
        </div>

        <div class="daftar-artikel-admin d-flex justify-content-between">
          <h2 style="font-size:25px; font-weight: bold;">Daftar Artikel</h2>
          <form class="d-flex search-bar-forum">
              <input class="form-control mr-sm-2" type="search" placeholder="Cari artikel . . ." aria-label="Search" id="search-input-article">
              <button class="btn my-2 my-sm-0" type="submit" id="search-button-article"><img src="${iconSearch}" alt="icon search" width="30px"> </button>
          </form>
        </div>

        <div class="list-article-adminPage"></div>
    </div>

      `;
  },

  async afterRender() {
    window.$crisp.push(['do', 'chat:hide']);
    // get data article
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const listArtikel = await AnimaCareDbSource.listArticle(url.id);
    const listArtikelContainer = document.querySelector('.list-article-adminPage');
    listArtikel.reverse().forEach((article) => {
      listArtikelContainer.innerHTML += creatArticleItemTemplateInAdmin(article);
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
        listArtikelContainer.innerHTML = `<h1 class="text-center mt-5" style="font-size:20px; color:#699BF7;">Tidak ada hasil pencarian "<span class="font-weight-bold">${searchText}</span>"</h1>`;
      } else {
        listArticleSearch.forEach((article) => {
          listArtikelContainer.innerHTML += creatArticleItemTemplateInAdmin(article);
        });
      }
      searchInput.value = '';
    });

    // logout
    const logout = document.getElementById('logout');
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      Logout();
    });
  },
};

export default Login;
