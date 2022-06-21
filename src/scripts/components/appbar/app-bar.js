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
        <a href="/" style="padding: 0;">
        <picture class="logo">
        <source class="logo lazyload" srcset="./logo/logo-bar.webp" type="image/webp" media="all and (max-width: 300px)" />        
        <source class="logo lazyload" srcset="./logo/logo-bar.jpg" type="image/jpeg" media="all and (max-width: 300px)" />
        <source class="logo lazyload" srcset="./logo/logo-bar.webp" type="image/webp" media="all and (min-width: 700px) and (max-width: 900px)" />    
        <source class="logo lazyload" srcset="./logo/logo-bar.jpg" type="image/jpeg" media="all and (min-width: 700px) and (max-width: 900px)" />
        <source class="logo lazyload" srcset="./logo/logo-bar.webp" type="image/webp" media="all and (min-width: 901px)" />        
        <source class="logo lazyload" srcset="./logo/logo-bar.jpg" type="image/jpeg" media="all and (min-width: 901px)" />
        <img class="logo lazyload" data-src=${Logo} alt='Logo'/>
        </picture> 
        </a>
    </div>
    <div class="hamburger">
       <button id="menu" class="header__menu" aria-label="see menu">☰</button> 
    </div>
    <div class="nav-list-container">
        <ul class="nav-list nav_list">
            <li class="nav-item"><a href="/" class="nav-link" id="active">Beranda</a></li>
            <li class="nav-item"><a href="#/artikel" class="nav-link">Artikel</a></li>
            <li class="nav-item"><a href="#/forum" class="nav-link">Sharing</a></li>
            <li class="nav-item"><a href="#/belanja" class="nav-link">Belanja</a></li>
        </ul>
    </div>
</nav>
</div>`;
  }
}

customElements.define('app-bar', appBar);
