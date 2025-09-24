// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav__menu--active');
        });

        // Close menu when clicking on a nav link (mobile)
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('nav__menu--active');
            });
        });

        // Close menu when clicking outside (mobile)
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('nav__menu--active')) {
                navMenu.classList.remove('nav__menu--active');
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('nav__link--active');
        } else {
            link.classList.remove('nav__link--active');
        }
    });
});

// Photo Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }

    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-advance carousel every 5 seconds
if (slides.length > 0) {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Research theme toggle functionality
function toggleTheme(headerElement) {
    // Skip the description paragraph and find the theme-content div
    const themeContent = headerElement.nextElementSibling.nextElementSibling;
    const toggleIcon = headerElement.querySelector('.toggle-icon');

    if (themeContent.style.display === 'none' || themeContent.style.display === '') {
        themeContent.style.display = 'block';
        toggleIcon.textContent = '−';
        toggleIcon.style.transform = 'translateY(-50%) rotate(180deg)';
    } else {
        themeContent.style.display = 'none';
        toggleIcon.textContent = '+';
        toggleIcon.style.transform = 'translateY(-50%) rotate(0deg)';
    }
}