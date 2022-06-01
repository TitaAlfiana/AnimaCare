import Beranda from '../views/pages/beranda/beranda';
import Artikel from '../views/pages/artikel/artikel';
import Forum from '../views/pages/forum/forum';
import Belanja from '../views/pages/belanja/belanja';
import Login from '../views/pages/login/login';
import Register from '../views/pages/register/register';
import LupaKataSandi from '../views/pages/lupakatasandi/lupaKataSandi';
import AfterLogin from '../views/pages/after login/afterLogin';

const routes = {
  '/': Beranda,
  '/artikel': Artikel,
  '/forum': Forum,
  '/login': Login,
  '/register': Register,
  '/belanja': Belanja,
  '/lupa-kata-sandi': LupaKataSandi,
  '/after-login': AfterLogin,
};

export default routes;
