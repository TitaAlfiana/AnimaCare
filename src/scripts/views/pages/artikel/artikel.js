const Artikel = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    return `
   
    `;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {

  },
};

export default Artikel;
