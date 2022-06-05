const Artikel = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    return `
    <h1>After Login</h1>
    `;
  },
};

export default Artikel;
