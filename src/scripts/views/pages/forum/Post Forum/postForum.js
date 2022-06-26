import Swal from 'sweetalert2';
import PostForum from '../../../../utils/postForum-initiator';
import image2 from '../../../../../public/images/image2.png';
import './postForum.css';
import { NavbarAndFooterDisplayBlock } from '../../../../utils/navbarAndFooterDisplay-Initiator';

const Forum = {
  async render() {
    NavbarAndFooterDisplayBlock();
    return `
    <div class="container my-5">
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
      if (inputNamaPostForum.value === '' || inputJudul.value === '' || inputDeskripsiForum.value === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Inputan tidak boleh ada yang kosong!',
        });
        inputNamaPostForum.value = '';
        inputJudul.value = '';
        inputDeskripsiForum.value = '';
      } else {
        PostForum();
        Swal.fire(
          'Good job!',
          'Pengalaman Berhasil Diunggah!',
          'success',
        ).then(() => {
          window.location.href = '#/forum';
        });
        inputNamaPostForum.value = '';
        inputJudul.value = '';
        inputDeskripsiForum.value = '';
      }
    });
  },
};

export default Forum;
