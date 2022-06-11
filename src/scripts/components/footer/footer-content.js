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
<footer class="footer mt-5">
  <div class="container py-3">
  <div class="row ">
    <div class="col footer-kontak">
      <h3>Kontak</h3>
      <ul>
        <li><img src="${iconTelepon}" alt="iconTelepon" />+62 867-5340-9873</li>
        <li><img src="${iconChat}" alt="iconChat" /> +62 867-5340-9873</li>
      </ul>
    </div>
    <div class="col footer-email">
      <h3>Email</h3>
      <ul>
        <li><img src="${iconEmail}" alt="iconEmail" /> animacare15@gmail.com</li>
      </ul>
    </div>
    <div class="col footer-alamat">
      <h3>Alamat</h3>
      <p><img src="${iconMaps}" alt="iconMaps"/>Jl. Dipati Ukur, Lebakgede, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132</p>
    </div>
  </div>
    <p class="text-center mt-2">©<span style="color: #fff; font-weight: bold;">AnimaCare</span>, 2022. All Rights Reserved</p>
    <div>
</footer>
      `;
  }
}

customElements.define('footer-content', FooterContent);
