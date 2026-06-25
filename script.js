document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const level = document.getElementById('level').value;
  const goal = document.getElementById('goal').value.trim();
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = `Hello Josiah, my name is ${name}. I would like to book the ₦15,000 Data Analysis Mentorship Program.%0A%0AEmail: ${email}%0APhone: ${phone}%0ASkill Level: ${level}%0AWhat I want to learn: ${goal}%0APreferred Date: ${date}%0APreferred Time: ${time}`;
  window.open(`https://wa.me/2347045774139?text=${message}`, '_blank');
});
