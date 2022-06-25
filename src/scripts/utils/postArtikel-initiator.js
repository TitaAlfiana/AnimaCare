import AnimaCareDbSource from '../data/animaCaredb-source';

const PostArticles = async () => {
  const judulArtikel = document.getElementById('inputJudulArtikel');
  const deskripsiArtikel = document.getElementById('inputDeskripsiArtikel');
  const judulPertamaArtikel = document.getElementById('inputJudulPertamaArtikel');
  const deskripsiBahasanPertama = document.getElementById('inputDeskripiBahasanPertama');
  const subJudulKeduaArtikel = document.getElementById('inputSubJudulKeduaArtikel');
  const deskripsiBahasanKedua = document.getElementById('inputDeskripiBahasanKedua');
  const unggahGambarArtikel = document.querySelector('input[type="file"]');
  const formData = new FormData();
  formData.append('title', judulArtikel.value);
  formData.append('descript', deskripsiArtikel.value);
  formData.append('subFirstTitle', judulPertamaArtikel.value);
  formData.append('descriptSubFirstTitle', deskripsiBahasanPertama.value);
  formData.append('subSecondTitle', subJudulKeduaArtikel.value);
  formData.append('descriptSubSecondTitle', deskripsiBahasanKedua.value);
  formData.append('image', unggahGambarArtikel.files[0]);

  await AnimaCareDbSource.postArticle(formData);
  judulArtikel.value = '';
  deskripsiArtikel.value = '';
  judulPertamaArtikel.value = '';
  deskripsiBahasanPertama.value = '';
  subJudulKeduaArtikel.value = '';
  deskripsiBahasanKedua.value = '';
  unggahGambarArtikel.value = '';
};

export default PostArticles;
