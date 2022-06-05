import UrlParser from '../../../../routes/url-parser';
import AnimaCareDbSource from '../../../../data/animaCaredb-source';
import { createForumDetailTemplate } from '../../../templates/template-creator';
import PostComment from '../../../../utils/postComment';
import './detailForum.css';

const DetailForum = {
  async render() {
    return `
    <div class="container">
      <div tabindex="0" class="detail-forum">

        <section id="detail-forum"></section>

          <div class="form-komentar container">
            <forma ction="/comment" method="POST">
              <div class="mb-3">
                <label for="inputName" class="form-label">Nama</label>
                <input name="inputName" placeholder="Masukkan Nama..." type="text" class="form-control" id="inputName">
              </div>
              <div class="mb-3">
                <label for="inputKomentar">Komentar</label>
                <textarea class="form-control" id="inputKomentar" rows="7" placeholder="Tulis Komentar" name="descript"></textarea>
              </div>
              <div class="d-flex justify-content-end">
                <button id="submit-komentar" type="submit" class="btn submit-komentar">Kirim</button>
              </div>
            </forma>
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
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      PostComment();
    });
  },
};

export default DetailForum;
