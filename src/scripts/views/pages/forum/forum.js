import iconSearch from '../../../../public/icons/iconSearch.png';
import AnimaCareDbSource from '../../../data/animaCaredb-source';
import { createForumItemTemplate } from '../../templates/template-creator';
import './forum.css';

const Forum = {
  async render() {
    return `
    <div class="container">
      <div class="container d-flex justify-content-between my-4">
        <a class="navbar-brand" href="#/post-forum" style="font-weight: bold;"> + <span style="color: #000;">Bagikan pengalaman hewan peliharaanmu disini!</span></a>
        <form class="form-inline search-bar">
          <input class="form-control mr-sm-2" type="search" placeholder="Cari judul topik..." aria-label="Search" id="search-input">
          <button class="btn my-2 my-sm-0" type="submit" id="search-button"><img src="${iconSearch}" alt="icon search" width="30px"> </button>
        </form>
      </div>

      <section id="list-forum-container"></section>
    </div>
    `;
  },

  async afterRender() {
    const listForum = await AnimaCareDbSource.getAllForums();
    const forumContainer = document.querySelector('#list-forum-container');
    forumContainer.innerHTML = '';
    listForum.forEach((forum) => {
      forumContainer.innerHTML += createForumItemTemplate(forum);
    });

    // search forum
    const searchInput = document.querySelector('#search-input');
    const searchButton = document.querySelector('#search-button');
    searchButton.addEventListener('click', async (e) => {
      e.preventDefault();
      const searchText = searchInput.value;
      const listForumSearch = await AnimaCareDbSource.searchForum(searchText);
      forumContainer.innerHTML = '';
      if (listForumSearch.length === 0) {
        forumContainer.innerHTML = `<h3 class="text-center mt-5">Tidak ada hasil pencarian "<span class="font-weight-bold">${searchText}</span>"</h3>`;
      } else {
        listForumSearch.forEach((forum) => {
          forumContainer.innerHTML += createForumItemTemplate(forum);
        });
      }
      searchInput.value = '';
    });
  },
};

export default Forum;
