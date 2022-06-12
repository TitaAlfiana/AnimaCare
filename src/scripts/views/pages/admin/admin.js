const Admin = {
    async render() {
        const nav = document.getElementById('nav');
        nav.style.display = 'none';
        const footer = document.querySelector('.footer');
        footer.style.display = 'none';
        return `
            <h1>Admin</h1>`;
    },

    async afterRender() {

    }
} 

export default Admin;