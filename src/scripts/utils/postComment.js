import AnimaCareDbSource from '../data/animaCaredb-source';
import UrlParser from '../routes/url-parser';

const PostComment = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputCommentName = document.querySelector('#inputName');
  const inputComment = document.querySelector('#inputKomentar');
  const commentContainer = document.querySelector('#list-komentar');

  const dataInput = {
    id: url.id,
    nama: inputCommentName.value,
    comment: inputComment.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newComment = `
    <div class="komentar-item shadow p-3 mb-5 bg-white rounded">
    <div class="header-komentar">
        <p class="name-komentar">${dataInput.nama}</p>
        <p class="date-komentar">${date}</p>
    </div>
    <div class="body-komentar">
        <p class="content-forum">${dataInput.comment}</p>
    </div>
</div>
    `;

  await AnimaCareDbSource.postComment(dataInput);
  commentContainer.innerHTML += newComment;
  inputCommentName.value = '';
  inputComment.value = '';
};

export default PostComment;
