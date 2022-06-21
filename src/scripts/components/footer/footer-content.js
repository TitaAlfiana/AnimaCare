import iconTelepon from '../../../public/icons/iconTelepon.png';
import iconChat from '../../../public/icons/iconChat.png';
import iconEmail from '../../../public/icons/iconEmail.png';
import iconMaps from '../../../public/icons/iconMaps.png';
import './footer.css';

class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <footer class="footer pt-3">
    <div class="container py-3">
      <div class="row grid-footer">
        <div class="col footer-kontak">
          <h2>Kontak</h3>
          <ul>
            <li><img data-src="${iconTelepon}" alt="iconTelepon" width="20px" class="lazyload"/>+62 867-5340-9873</li>
            <li><img src="${iconChat}" alt="iconChat" width="15px" class="lazyload"/> +62 867-5340-9873</li>
          </ul>
        </div>
        <div class="col footer-email">
          <h2>Email</h3>
          <ul>
            <li><img data-src="${iconEmail}" alt="iconEmail" width="17px" class="lazyload"/> animacare15@gmail.com</li>
          </ul>
        </div>
        <div class="col footer-alamat">
          <h2>Alamat</h3>
          <p><img data-src="${iconMaps}" alt="iconMaps" width="15px" class="lazyload"/>  Jl. Dipati Ukur, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</p>
        </div>
      </div>
    </div>
    <p class="text-center mt-2 pb-2">©<span style="color: #fff; font-weight: bold;">AnimaCare</span>, 2022. All Rights Reserved</p>
  </footer>
      `;
  }
}

customElements.define('footer-content', FooterContent);
