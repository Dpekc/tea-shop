var currentSlide = 0;

function nextSlide() {
    var slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    var slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = 'none';
        }
    }
};

function changeTheme() {
    document.body.classList.toggle('dark');
    var themeBtn = document.querySelector('button[onclick="changeTheme()"]');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function toggleAccessibility() {
    document.body.classList.toggle('accessibility');
}

function initApp() {
    loadFromStorage();
    loadProducts();
    updateAuthButton();
    
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
    
    setInterval(nextSlide, 4000);
    
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
    
    console.log('☕ TeaShop запущен! Всего товаров: ' + teaCoffeeProducts.length);
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', initApp);