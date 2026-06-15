function loadFromStorage() {
    var savedCart = localStorage.getItem('teaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    var savedFav = localStorage.getItem('teaFavorites');
    if (savedFav) {
        favorites = JSON.parse(savedFav);
    }
    
    var savedRecent = localStorage.getItem('teaRecent');
    if (savedRecent) {
        recentlyViewed = JSON.parse(savedRecent);
    }
    
    var savedReviews = localStorage.getItem('teaReviews');
    if (savedReviews) {
        reviews = JSON.parse(savedReviews);
    }
    
    var savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
    }
    
    updateAllCounters();
}

function saveToStorage() {
    localStorage.setItem('teaCart', JSON.stringify(cart));
    localStorage.setItem('teaFavorites', JSON.stringify(favorites));
    localStorage.setItem('teaRecent', JSON.stringify(recentlyViewed));
    localStorage.setItem('teaReviews', JSON.stringify(reviews));
}

function updateAllCounters() {
    // Счётчик корзины
    var cartCount = 0;
    for (var i = 0; i < cart.length; i++) {
        cartCount = cartCount + cart[i].quantity;
    }
    var cartEl = document.getElementById('cartCount');
    if (cartEl) cartEl.textContent = cartCount;
    
    // Счётчик избранного
    var favEl = document.getElementById('favCount');
    if (favEl) favEl.textContent = favorites.length;
}