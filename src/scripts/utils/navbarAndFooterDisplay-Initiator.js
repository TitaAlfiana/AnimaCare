const NavbarAndFooterDisplayNone = () => {
  const nav = document.getElementById('nav');
  nav.style.display = 'none';
  const footer = document.querySelector('.footer');
  footer.style.display = 'none';
};

const NavbarAndFooterDisplayBlock = () => {
  const nav = document.getElementById('nav');
  nav.style.display = 'flex';
  const footer = document.querySelector('.footer');
  footer.style.display = 'block';
};

export { NavbarAndFooterDisplayBlock, NavbarAndFooterDisplayNone };
