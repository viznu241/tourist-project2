// Ensure scrolling is enabled
document.body.style.overflow = "auto";

let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let loginForm = document.querySelector('.login-form');
let loginBtn = document.querySelector('#login-btn');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let themeBtn = document.querySelector('#theme-btn');

if (menuBtn && navbar) {
    menuBtn.onclick = (e) => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        loginForm.classList.remove('active');
        e.stopPropagation();
    };
} else {
    console.error("Error: Navbar or menu button not found!");
}

if (loginBtn && loginForm) {
    loginBtn.onclick = (e) => {
        loginForm.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        e.stopPropagation();
    };
} else {
    console.error("Error: Login button or form not found!");
}

if (searchBtn && searchForm) {
    searchBtn.onclick = (e) => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        loginForm.classList.remove('active');
        e.stopPropagation();
    };
} else {
    console.error("Error: Search button or form not found!");
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        navbar.classList.remove('active');
    }
    if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!loginForm.contains(e.target) && !loginBtn.contains(e.target)) {
        loginForm.classList.remove('active');
    }
});

// Close dropdowns on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};

// Theme toggle
if (themeBtn) {
    themeBtn.onclick = () => {
        themeBtn.classList.toggle('fa-sun');
        document.body.classList.toggle('active');
    };
};

var swiper = new Swiper(".review-slider", {
    loop: true, 
    spaceBetween: 30,
    centeredSlides: true, // ✅ Corrected property name
    autoplay: {
        delay: 5500, // ✅ Fixed typo
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true, // Allows users to click pagination dots
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: { slidesPerView: 3 }, // Desktop: 3 reviews per view
        768: { slidesPerView: 2 }, // Tablet: 2 reviews per view
        480: { slidesPerView: 1 }, // Mobile: 1 review per view
    }
});
