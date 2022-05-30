const Belanja = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';
    
    return `
    <div class="container">
      <h1>Belanja</h1>
    </div>
    `;
  },
};

export default Belanja;
