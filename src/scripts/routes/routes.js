import Beranda from '../views/pages/beranda/beranda';
import Artikel from '../views/pages/artikel/artikel';
import Forum from '../views/pages/forum/forum';
import Belanja from '../views/pages/belanja/belanja';
import PostForum from '../views/pages/forum/Post Forum/postForum';
import DetailForum from '../views/pages/forum/detail forum/detailForum';
import DetailArticle from '../views/pages/artikel/detail artikel/detailArtikel';
import Admin from '../views/pages/admin/admin';

const routes = {
  '/': Beranda,
  '/artikel': Artikel,
  '/forum': Forum,
  '/belanja': Belanja,
  '/post-forum': PostForum,
  '/forum/:id': DetailForum,
  '/artikel/:id': DetailArticle,
  '/admin': Admin,
};

export default routes;
