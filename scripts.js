window.addEventListener('load', () => {
    // Remove splash screen after 2 seconds
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
    }, 500);
});

let lastScrollTop = 0;
const mainHeader = document.getElementById('main-header');
const smileIcon = document.getElementById('smile-icon');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        mainHeader.style.top = '-100px'; // Hides the header
    } else {
        mainHeader.style.top = '0'; // Shows the header
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

smileIcon.addEventListener('click', () => {
    const menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.style.display = menuOverlay.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('#menu-overlay a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-overlay').style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Navegação automática (opcional)
    setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos

    document.getElementById('carousel-next').addEventListener('click', nextSlide);
    document.getElementById('carousel-prev').addEventListener('click', prevSlide);
});

// TETRIS Game
