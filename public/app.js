const openNav = document.getElementById('nav-button');
const nav = document.getElementById('navigation');
const closeNav = document.getElementById('close-nav');
const navLinks = document.querySelectorAll('.smooth-scroll');

openNav.addEventListener('click', () =>{
    nav.classList.add('active');
})

closeNav.addEventListener('click', () => {
        nav.classList.remove('active');
})

navLinks.forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('active');
  
}));

