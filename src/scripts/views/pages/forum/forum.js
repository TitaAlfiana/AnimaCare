import iconSearch from '../../../../public/icons/iconSearch.png';
import AnimaCareDbSource from '../../../data/animaCaredb-source';
import { createForumItemTemplate } from '../../templates/template-creator';
import './forum.css';

const Forum = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    return `
    <div class="container  my-4">
      <div class="row">
        <div class="col">
          <a aria-label="Bagikan pengalamanmu" class="navbar-brand" href="#/post-forum" style="font-weight: bold;"> + <span style="color: #000;">Bagikan pengalamanmu!</span></a>
        </div>
        <div class="col">
          <form class="d-flex search-bar-forum">
            <input class="form-control mr-sm-2" type="search" placeholder="Cari judul topik..." aria-label="Search" id="search-input">
            <button class="btn my-2 my-sm-0" type="submit" id="search-button"><img src="${iconSearch}" alt="icon search" width="30px"> </button>
          </form>
        </div>
      </div>
      <div class="container d-flex justify-content-between">
        
      </div>
      <section id="list-forum-container"></section>
    </div>

    `;
  },

  async afterRender() {
    const listForum = await AnimaCareDbSource.getAllForums();
    const forumContainer = document.querySelector('#list-forum-container');
    forumContainer.innerHTML = '';

    listForum.reverse().forEach((forum) => {
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
