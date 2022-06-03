import './forum.css';

const Forum = {
  async render() {
    const nav = document.getElementById('nav');
    nav.style.display = 'flex';
    const footer = document.querySelector('.footer');
    footer.style.display = 'block';

    return `
    <div class="container>
      <h1>Forum</h1>
    </div>
    `;
  },
};

export default Forum;
