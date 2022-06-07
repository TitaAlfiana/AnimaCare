import PostForum from '../../../../utils/postForum';
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
    <form>
      <div class="mb-3">
        <input name="inputNamaPostForum" placeholder="Masukkan Nama" type="text" class="form-control" id="inputNamaPostForum">
      </div>
      <div class="mb-3">
        <input name="inputJudul" placeholder="Masukkan Judul" type="text" class="form-control" id="inputJudul">
      </div>
      <div class="mb-3">
        <textarea class="form-control" id="inputDeskripsiForum" rows="7" placeholder="Ceritakkan Pengalamanmu..."></textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button id="submit-forum" type="submit" class="btn submit-komentar">Unggah</button>
      </div>
    </form>
  </div>
      `;
  },

  async afterRender() {
    const inputNamaPostForum = document.querySelector('#inputNamaPostForum');
    const inputJudul = document.querySelector('#inputJudul');
    const inputDeskripsiForum = document.querySelector('#inputDeskripsiForum');
    const submitForum = document.getElementById('submit-forum');

    submitForum.addEventListener('click', () => {
      PostForum();
      alert('Forum berhasil diunggah');
      inputNamaPostForum.value = '';
      inputJudul.value = '';
      inputDeskripsiForum.value = '';
    });
  },
};

export default Forum;
