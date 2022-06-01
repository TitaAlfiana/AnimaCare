const Artikel = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    return `
    <div class="container">
      <h1>Artikel</h1>
    </div>
    `;
  },

  async afterRender() {

  }
};

export default Artikel;
