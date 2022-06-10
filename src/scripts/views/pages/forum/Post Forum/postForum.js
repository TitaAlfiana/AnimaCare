import PostForum from '../../../../utils/postForum';

const Forum = {
  async render() {
    return `
    <div class="container mt-5">
    <form>
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
