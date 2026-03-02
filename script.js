const navToggle=document.querySelector('.nav-toggle');
const navMenu=document.querySelector('.nav-menu');
const closeBtn=document.querySelector('.close-btn i');
const faBars=document.querySelectorAll('.fa-bars');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu when X mark is clicked
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
});


