import Swal from 'sweetalert2';
import UrlParser from '../../../../routes/url-parser';
import AnimaCareDbSource from '../../../../data/animaCaredb-source';
import { createForumDetailTemplate } from '../../../templates/template-creator';
import PostComment from '../../../../utils/postComment-initiator';
import './detailForum.css';
import { NavbarAndFooterDisplayBlock } from '../../../../utils/navbarAndFooterDisplay-Initiator';

const DetailForum = {
  async render() {
    NavbarAndFooterDisplayBlock();
    return `
    <div class="container">
      <div tabindex="0" class="detail-forum">

        <section id="detail-forum"></section>

          <div class="form-komentar container">
            <form method="POST">
              <div class="mb-3">
                <label for="inputName" class="form-label">Nama</label>
                <input name="name" placeholder="Masukkan Nama..." type="text" class="form-control" id="inputName">
              </div>
              <div class="mb-3">
                <label for="inputKomentar">Komentar</label>
                <textarea class="form-control" id="inputKomentar" rows="7" placeholder="Tulis Komentar" name="comment"></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button id="submit-komentar" type="submit" class="btn submit-komentar">Kirim</button>
              </div>
            </form>
          </div>
      </div>
    </div>  
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const forums = await AnimaCareDbSource.detailForum(url.id);
    const forumContainer = document.querySelector('#detail-forum');
    forumContainer.innerHTML = createForumDetailTemplate(forums);

    // post comment
    const submitReview = document.getElementById('submit-komentar');
    const inputName = document.getElementById('inputName');
    const inputComment = document.getElementById('inputKomentar');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      if (inputName.value === '' || inputComment.value === '') {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Inputan tidak boleh ada yang kosong!',
        });
        inputName.value = '';
        inputComment.value = '';
      } else {
        PostComment();
        inputName.value = '';
        inputComment.value = '';
      }
    });
  },
};

export default DetailForum;
