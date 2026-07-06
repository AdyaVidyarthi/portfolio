document.addEventListener('DOMContentLoaded', function() {
    const navLinks=document.querySelectorAll('.nav-links a');
    const currentPage=window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkPage=link.getAttribute('href').split('/').pop();
        if(linkPage===currentPage) {
            link.classList.add('active');
        }
    });
});

const menuToggle=document.getElementById('menuToggle');
const navLink=document.getElementById('navLinks');

menuToggle?.addEventListener('click',() => {
    navLinks.classList.toggle('active');
})