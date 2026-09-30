// Typing Effect
const typingElement = document.getElementById('typing');
const words = ['Full Stack Developer', 'AI Enthusiast', 'Software Engineer', 'Problem Solver'];
let wordIndex = 0; let charIndex = 0; let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    let typingSpeed = isDeleting ? 40 : 80;
    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 400;
    }
    setTimeout(type, typingSpeed);
}

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
    reveal(); // Trigger once on load
});

window.addEventListener("scroll", reveal);

// Dark Theme Toggle with LocalStorage
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// Check for saved user preference
if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeBtn.textContent = '☀️';
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeBtn.textContent = '☀️️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});