const toggle = document.getElementById('toggle');
const nav = document.getElementsByTagName('nav');

toggle.addEventListener('click', () => {
    nav[0].classList.toggle('active');
});