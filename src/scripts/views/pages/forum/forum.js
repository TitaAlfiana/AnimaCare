import image3 from '../../../../public/images/image3.png';
import iconSearch from '../../../../public/icons/search-status.png';
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
