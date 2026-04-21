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

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  await fetch("https://script.google.com/macros/s/AKfycbz77UTq3SuEjYSj02V1PGGcouJ_93rj22eIciO4uarzH9QmRSD7UZl7nSv1rCKRFqu8/exec", {
    method: "POST",
    body: JSON.stringify(data)
  });

  alert("Message sent!");
});
