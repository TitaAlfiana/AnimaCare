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
    <div class="container">
      <div class="container d-flex justify-content-between my-4">
        <a class="navbar-brand" href="#/post-forum" style="font-weight: bold;"> + <span style="color: #000;">Bagi Pengalaman</span></a>
        <form class="form-inline search-bar">
          <input class="form-control mr-sm-2" type="search" placeholder="Cari Pengalaman" aria-label="Search">
          <button class="btn my-2 my-sm-0" type="submit"><img src="${iconSearch}" alt="icon search" width="30px"> </button>
        </form>
      </div>

      <section id="list-forum"></section>
      
    </div>
    `;
  },

  async afterRender() {
    const listForum = await AnimaCareDbSource.getAllForums();
    const forumContainer = document.querySelector('#list-forum');
    forumContainer.innerHTML = '';
    listForum.forEach((forum) => {
      forumContainer.innerHTML += createForumItemTemplate(forum);
    });
  },
};

export default Forum;
