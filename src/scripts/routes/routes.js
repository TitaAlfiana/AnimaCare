import Beranda from '../views/pages/beranda/beranda';
import Artikel from '../views/pages/artikel/artikel';
import Forum from '../views/pages/forum/forum';
import Belanja from '../views/pages/belanja/belanja';
import PostForum from '../views/pages/forum/Post Forum/postForum';
import DetailForum from '../views/pages/forum/detail forum/detailForum';
import DetailArticle from '../views/pages/artikel/detail artikel/detailArtikel';
import DetailKategori from '../views/pages/belanja/detail kategori/detailKategori';

const routes = {
  '/': Beranda,
  '/artikel': Artikel,
  '/artikel/:id': DetailArticle,
  '/forum': Forum,
  '/forum/:id': DetailForum,
  '/post-forum': PostForum,
  '/belanja': Belanja,
  '/makanan-kucing': DetailKategori,
  '/makanan-anjing': DetailKategori,
  '/parfum': DetailKategori,
  '/vitamin': DetailKategori,
  '/kandang': DetailKategori,
  '/susu': DetailKategori,
  '/obat': DetailKategori,
  '/box-pasir': DetailKategori,
  '/pasir': DetailKategori,
  '/aksesoris': DetailKategori,
  '/sampo': DetailKategori,
  '/tas-hewan': DetailKategori,
};

export default routes;
