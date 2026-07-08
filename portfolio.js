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

const menuToggle=document.getElementById('menuToggle');
const navLink=document.getElementById('navLinks');
const profileLink=document.getElementById('profile-link');

menuToggle?.addEventListener('click',() => {
    navLink.classList.toggle('active');
    profileLink.classList.toggle('active');

});


const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const root = document.documentElement;


const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
  root.setAttribute('data-theme', 'light');
  themeIcon?.classList.replace('fa-moon', 'fa-sun');
}

themeToggle?.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';

  if (isLight) {
    root.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
    themeIcon?.classList.replace('fa-sun', 'fa-moon');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeIcon?.classList.replace('fa-moon', 'fa-sun');
  }
});



});