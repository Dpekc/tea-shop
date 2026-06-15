var favorites = [];

function toggleFavorite(productId) {
    var product = findProduct(productId);
    if (!product) return;
    
    if (isInFavorites(productId)) {
        var newFav = [];
        for (var i = 0; i < favorites.length; i++) {
            if (favorites[i].id !== productId) {
                newFav.push(favorites[i]);
            }
        }
        favorites = newFav;
    } else {
        favorites.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        });
    }
    
    saveToStorage();
    updateAllCounters();
    showProducts();
}

function isInFavorites(productId) {
    for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].id === productId) return true;
    }
    return false;
}

function showFavorites() {
    var modal = document.getElementById('favModal');
    var itemsDiv = document.getElementById('favItems');
    
    if (favorites.length === 0) {
        itemsDiv.innerHTML = '<p style="text-align:center;padding:20px;">Нет избранных товаров</p>';
    } else {
        var html = '<div class="products-grid" style="padding:0;">';
        for (var i = 0; i < favorites.length; i++) {
            var item = favorites[i];
            html += '<div class="product-card">';
            html += '<img src="' + item.image + '" onclick="openProduct(' + item.id + ');closeModal(\'favModal\');">';
            html += '<h3>' + item.title + '</h3>';
            html += '<p class="price">' + item.price + ' ₽</p>';
            html += '<button class="btn-cart" onclick="addToCart(' + item.id + ')">🛒 В корзину</button>';
            html += '<button style="background:#f44336;color:white;width:100%;margin-top:5px;padding:10px;border:none;border-radius:6px;cursor:pointer;" onclick="removeFromFavorites(' + item.id + ')">🗑 Удалить</button>';
            html += '</div>';
        }
        html += '</div>';
        itemsDiv.innerHTML = html;
    }
    
    modal.style.display = 'block';
}

function removeFromFavorites(productId) {
    var newFav = [];
    for (var i = 0; i < favorites.length; i++) {
        if (favorites[i].id !== productId) {
            newFav.push(favorites[i]);
        }
    }
    favorites = newFav;
    saveToStorage();
    updateAllCounters();
    showFavorites();
    showProducts();
}