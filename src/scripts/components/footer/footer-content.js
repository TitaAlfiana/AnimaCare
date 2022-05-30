import './footer.css';

class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer">
        <p style="color: #ffffff;">Copyright &#169; 2022 - AnimaCare</p>
      </div>
      `;
  }
}

customElements.define('footer-content', FooterContent);
