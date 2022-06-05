import Logo from '../../../public/logo/logo-bar.png';
import './appbar.css';

class appBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="border">
    <nav class="nav container" id="nav">
    <div class="logo-apps">
        <a href="#/home" style="padding: 0;"> <img src=${Logo} alt="Logo" class="logo"></a>
    </div>
    <div class="hamburger">
       <button id="menu" class="header__menu" aria-label="see menu">☰</button> 
    </div>
    <div class="nav-list-container">
        <ul class="nav-list nav_list">
            <li class="nav-item"><a href="/" class="active nav-link" id="active">Beranda</a></li>
            <li class="nav-item"><a href="#/artikel" class="nav-link">Artikel</a></li>
            <li class="nav-item"><a href="#/forum" class="nav-link">Forum</a></li>
            <li class="nav-item"><a href="#/belanja" class="nav-link">Belanja</a></li>
        </ul>
    </div>
</nav>
</div>`;
  }
}

customElements.define('app-bar', appBar);
