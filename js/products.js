var allProducts = [];
var filteredProducts = [];
var currentPage = 1;
var productsPerPage = 8;

function loadProducts() {
    var container = document.getElementById('productsList');
    container.innerHTML = '<p style="text-align:center;padding:40px;">Загрузка товаров...</p>';
    
    setTimeout(function() {
        allProducts = teaCoffeeProducts.slice();
        filteredProducts = allProducts.slice();
        showProducts();
        showRecentlyViewed();
        showPopular();
        updateProductsCount();
    }, 500);
}

function showProducts() {
    var container = document.getElementById('productsList');
    var start = (currentPage - 1) * productsPerPage;
    var end = start + productsPerPage;
    var pageProducts = filteredProducts.slice(start, end);
    
    if (pageProducts.length === 0) {
        container.innerHTML = '<p style="text-align:center;padding:40px;">Товары не найдены</p>';
        document.getElementById('pagination').innerHTML = '';
        return;
    }
    
    var html = '';
    for (var i = 0; i < pageProducts.length; i++) {
        var p = pageProducts[i];
        var isFav = isInFavorites(p.id);
        html += createProductCard(p, isFav);
    }
    
    container.innerHTML = html;
    showPagination();
    updateProductsCount();
}

function createProductCard(product, isFav) {
    var html = '<div class="product-card">';
    html += '<img src="' + product.image + '" alt="' + product.title + '" onclick="openProduct(' + product.id + ')" style="cursor:pointer;">';
    html += '<h3>' + product.title + '</h3>';
    html += '<p>⭐ ' + product.rating + ' | ' + product.weight + 'г | ' + product.country + '</p>';
    html += '<p class="price">' + product.price + ' ₽</p>';
    html += '<button class="btn-fav" onclick="toggleFavorite(' + product.id + ')">' + (isFav ? '❤ В избранном' : '🤍 Добавить') + '</button>';
    html += '<button class="btn-cart" onclick="addToCart(' + product.id + ')">🛒 В корзину</button>';
    html += '<button class="btn-detail" onclick="openProduct(' + product.id + ')">Подробнее</button>';
    html += '</div>';
    return html;
}

function showPagination() {
    var totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    var pagDiv = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagDiv.innerHTML = '';
        return;
    }
    
    var html = '';
    for (var i = 1; i <= totalPages; i++) {
        html += '<button class="' + (i === currentPage ? 'active' : '') + '" onclick="goToPage(' + i + ')">' + i + '</button>';
    }
    
    pagDiv.innerHTML = html;
}

function goToPage(page) {
    currentPage = page;
    showProducts();
    window.scrollTo({ top: 400, behavior: 'smooth' });
}

function updateProductsCount() {
    var countEl = document.getElementById('productsCount');
    if (countEl) {
        countEl.textContent = 'Найдено: ' + filteredProducts.length + ' товаров';
    }
}

function applyFilters() {
    var priceMin = Number(document.getElementById('priceMin').value) || 0;
    var priceMax = Number(document.getElementById('priceMax').value) || 99999;
    var rating = Number(document.getElementById('ratingFilter').value);
    var weight = document.getElementById('weightFilter').value;
    var country = document.getElementById('countryFilter').value;
    
    filteredProducts = allProducts.filter(function(p) {
        if (p.price < priceMin || p.price > priceMax) return false;
        if (rating > 0 && p.rating < rating) return false;
        if (weight !== 'all' && p.weight !== Number(weight)) return false;
        if (country !== 'all' && p.country !== country) return false;
        return true;
    });
    
    currentPage = 1;
    showProducts();
}

function filterByCategory(category) {
    if (category === 'all') {
        filteredProducts = allProducts.slice();
    } else {
        filteredProducts = allProducts.filter(function(p) {
            return p.category === category;
        });
    }
    currentPage = 1;
    showProducts();
}

function resetFilters() {
    document.getElementById('priceMin').value = 0;
    document.getElementById('priceMax').value = 10000;
    document.getElementById('ratingFilter').value = 0;
    document.getElementById('weightFilter').value = 'all';
    document.getElementById('countryFilter').value = 'all';
    filteredProducts = allProducts.slice();
    currentPage = 1;
    showProducts();
}

function applySort() {
    var sortType = document.getElementById('sortSelect').value;
    
    if (sortType === 'priceAsc') {
        filteredProducts.sort(function(a, b) { return a.price - b.price; });
    } else if (sortType === 'priceDesc') {
        filteredProducts.sort(function(a, b) { return b.price - a.price; });
    } else if (sortType === 'rating') {
        filteredProducts.sort(function(a, b) { return b.rating - a.rating; });
    } else if (sortType === 'popular') {
        filteredProducts.sort(function(a, b) { return (b.popular ? 1 : 0) - (a.popular ? 1 : 0); });
    }
    
    currentPage = 1;
    showProducts();
}

function searchProducts() {
    var query = document.getElementById('searchInput').value.toLowerCase().trim();
    
    if (query === '') {
        filteredProducts = allProducts.slice();
    } else {
        filteredProducts = allProducts.filter(function(p) {
            return p.title.toLowerCase().indexOf(query) !== -1 ||
                   p.description.toLowerCase().indexOf(query) !== -1 ||
                   p.country.toLowerCase().indexOf(query) !== -1;
        });
    }
    
    currentPage = 1;
    showProducts();
}

function findProduct(productId) {
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].id === productId) return allProducts[i];
    }
    return null;
}

function getCategoryName(cat) {
    var names = { 'tea': 'Чай', 'coffee': 'Кофе', 'accessories': 'Аксессуары' };
    return names[cat] || cat;
}

function getTeaTypeName(type) {
    var names = { 'black': 'Чёрный', 'green': 'Зелёный', 'herbal': 'Травяной' };
    return names[type] || type;
}