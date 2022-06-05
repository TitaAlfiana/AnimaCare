import AnimaCareDbSource from '../data/animaCaredb-source';
import UrlParser from '../routes/url-parser';
import iconAvatar from '../../public/icons/iconAvatar.png';

const PostForum = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputNama = document.querySelector('#inputNamaPostForum');
  const inputJudul = document.querySelector('#inputJudul');
  const inputDeskripsiForum = document.querySelector('#inputDeskripsiForum');
  const containerListForum = document.querySelector('#list-forum');

  const dataInput = {
    id: url.id,
    name: inputNama.value,
    title: inputJudul.value,
    descript: inputDeskripsiForum.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newForum = `
        <div tabindex="0" class="list-forum">
            <div class="list-forum-item">
                <div class="header-list-forum">
                    <p class="name-list-forum"><img src="${iconAvatar}" style="width: 50px; padding-right:10px;">${dataInput.name}</p>
                    <p class="date-list-forum">${date}</p>
                </div>
                <div class="body-list-forum">
                    <p class="title-list-forum">${dataInput.title}</a></p>
                    <p class="content-list-forum">${dataInput.descript}</p>
                </div>
            </div>
        </div>
    `;

  await AnimaCareDbSource.postForum(dataInput);
  containerListForum.innerHTML += newForum;
  inputNama.value = '';
  inputJudul.value = '';
  inputDeskripsiForum.value = '';
};

export default PostForum;
