import PostForum from '../../../../utils/postForum';
import image2 from '../../../../../public/images/image2.png';
import './postForum.css';

// eslint-disable-next-line no-unused-vars
import UrlParser from '../../../../routes/url-parser';
// eslint-disable-next-line no-unused-vars
import AnimaCareDbSource from '../../../../data/animaCaredb-source';
// eslint-disable-next-line no-unused-vars
import { createForumItemTemplate } from '../../../templates/template-creator';

const Forum = {
  async render() {
    return `
    <div class="container mt-5">
      <div class="sharing">
        <div class="form-post-sharing">
          <form class="form-sharing">
            <div class="mb-3">
              <input name="inputNamaPostForum" placeholder="Ketikkan nama anda disini..." type="text" class="form-control" id="inputNamaPostForum">
            </div>
            <div class="mb-3">
              <input name="inputJudul" placeholder="Ketikkan judul topik pengalaman anda disini..." type="text" class="form-control" id="inputJudul">
            </div>
            <div class="mb-3">
              <textarea class="form-control" id="inputDeskripsiForum" rows="7" placeholder="Ceritakan pengalamanmu disini..."></textarea>
            </div>
            <div class="d-flex justify-content-end">
              <button id="submit-forum" type="submit" class="btn submit-komentar">Kirim</button>
            </div>
          </form>
        </div>
        <div class="img-post-sharing">
        <img class="image2 img-fluid" src="${image2}" alt="image decoration">
        </div>
      </div>
    </div>
      `;
  },

  async afterRender() {
    const inputNamaPostForum = document.querySelector('#inputNamaPostForum');
    const inputJudul = document.querySelector('#inputJudul');
    const inputDeskripsiForum = document.querySelector('#inputDeskripsiForum');
    const submitForum = document.getElementById('submit-forum');

    submitForum.addEventListener('click', (e) => {
      e.preventDefault();
      PostForum();
      alert('Forum berhasil diunggah');
      inputNamaPostForum.value = '';
      inputJudul.value = '';
      inputDeskripsiForum.value = '';
      window.location.href = '#/forum';
    });
  },
};

export default Forum;
