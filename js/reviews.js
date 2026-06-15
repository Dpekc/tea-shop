var reviews = [];
var recentlyViewed = [];

function openProduct(productId) {
    var product = findProduct(productId);
    if (!product) return;
    
    addToRecentlyViewed(product);
    
    var modal = document.getElementById('productModal');
    var detail = document.getElementById('productDetail');
    
    var productReviews = [];
    for (var i = 0; i < reviews.length; i++) {
        if (reviews[i].productId === productId) {
            productReviews.push(reviews[i]);
        }
    }
    
    var isFav = isInFavorites(productId);
    
    var html = '';
    html += '<div style="display:flex;gap:20px;flex-wrap:wrap;">';
    html += '<div style="flex:1;min-width:250px;">';
    html += '<img src="' + product.image + '" style="width:100%;border-radius:8px;" id="mainImage">';
    if (product.images && product.images.length > 1) {
        html += '<div style="display:flex;gap:5px;margin-top:10px;flex-wrap:wrap;">';
        for (var i = 0; i < product.images.length; i++) {
            html += '<img src="' + product.images[i] + '" style="width:60px;height:60px;object-fit:cover;cursor:pointer;border-radius:4px;border:2px solid #ddd;" onclick="document.getElementById(\'mainImage\').src=\'' + product.images[i] + '\'" onmouseover="this.style.border=\'2px solid #5d4037\'" onmouseout="this.style.border=\'2px solid #ddd\'">';
        }
        html += '</div>';
    }
    html += '</div>';
    
    html += '<div style="flex:1;min-width:250px;">';
    html += '<h2>' + product.title + '</h2>';
    html += '<p style="color:#666;">' + product.description + '</p>';
    html += '<p>⭐ <strong>' + product.rating + '</strong> | Категория: ' + getCategoryName(product.category) + '</p>';
    html += '<p> Вес: ' + product.weight + 'г |  Страна: ' + product.country + '</p>';
    html += '<p> Тип: ' + getTeaTypeName(product.teaType) + '</p>';
    html += '<p style="font-size:28px;color:#e65100;font-weight:bold;">' + product.price + ' ₽</p>';
    html += '<button class="btn-cart" onclick="addToCart(' + product.id + ')" style="width:100%;padding:15px;font-size:18px;">🛒 Добавить в корзину</button>';
    html += '<button class="btn-fav" onclick="toggleFavorite(' + product.id + ');openProduct(' + product.id + ');" style="width:100%;margin-top:10px;">' + (isFav ? '❤ В избранном' : '🤍 Добавить в избранное') + '</button>';
    html += '</div>';
    html += '</div>';
    html += '<div style="margin-top:30px;">';
    html += '<h3>📝 Отзывы (' + productReviews.length + ')</h3>';
    
    if (productReviews.length > 0) {
        for (var j = 0; j < productReviews.length; j++) {
            var rev = productReviews[j];
            html += '<div class="review">';
            html += '<p><strong>' + rev.userName + '</strong> <span class="review-stars">';
            for (var s = 0; s < rev.rating; s++) {
                html += '★';
            }
            for (var s2 = rev.rating; s2 < 5; s2++) {
                html += '☆';
            }
            html += '</span> <small>' + rev.date + '</small></p>';
            html += '<p>' + rev.text + '</p>';
            html += '</div>';
        }
    } else {
        html += '<p style="color:#999;">Пока нет отзывов. Будьте первым!</p>';
    }
    
    if (currentUser) {
        html += '<div style="margin-top:15px;padding:15px;background:#f5f5f5;border-radius:8px;">';
        html += '<h4>✍ Оставить отзыв</h4>';
        html += '<label>Оценка: <select id="reviewRating" style="width:auto;padding:5px;">';
        html += '<option value="5">★★★★★ Отлично</option>';
        html += '<option value="4">★★★★ Хорошо</option>';
        html += '<option value="3">★★★ Нормально</option>';
        html += '<option value="2">★★ Плохо</option>';
        html += '<option value="1">★ Ужасно</option>';
        html += '</select></label>';
        html += '<textarea id="reviewText" placeholder="Напишите ваш отзыв о товаре..." style="width:100%;height:80px;margin-top:10px;padding:10px;border:1px solid #ddd;border-radius:4px;"></textarea>';
        html += '<button onclick="addReview(' + productId + ')" style="background:#5d4037;color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;margin-top:10px;">📨 Отправить отзыв</button>';
        html += '</div>';
    } else {
        html += '<p style="margin-top:15px;padding:15px;background:#fff3e0;border-radius:8px;">🔒 <a href="#" onclick="closeModal(\'productModal\');showAuth();" style="color:#e65100;font-weight:bold;">Войдите в аккаунт</a>, чтобы оставить отзыв</p>';
    }
    
    html += '</div>';
    
    detail.innerHTML = html;
    modal.style.display = 'block';
}

function addReview(productId) {
    var rating = Number(document.getElementById('reviewRating').value);
    var text = document.getElementById('reviewText').value.trim();
    
    if (text === '') {
        alert('Пожалуйста, напишите текст отзыва!');
        return;
    }
    
    reviews.push({
        productId: productId,
        userName: currentUser.name,
        rating: rating,
        text: text,
        date: new Date().toLocaleDateString('ru-RU')
    });
    
    saveToStorage();
    openProduct(productId); // Обновляем карточку с новым отзывом
}

function addToRecentlyViewed(product) {
    var newRecent = [];
    for (var i = 0; i < recentlyViewed.length; i++) {
        if (recentlyViewed[i].id !== product.id) {
            newRecent.push(recentlyViewed[i]);
        }
    }
    recentlyViewed = newRecent;
    
    recentlyViewed.unshift({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
    });
    
    if (recentlyViewed.length > 8) {
        recentlyViewed = recentlyViewed.slice(0, 8);
    }
    
    saveToStorage();
    showRecentlyViewed();
}

function showRecentlyViewed() {
    var container = document.getElementById('recentlyViewed');
    if (!container) return;
    
    if (recentlyViewed.length === 0) {
        container.innerHTML = '<p style="padding:0 20px;color:#999;">Вы пока ничего не смотрели</p>';
        return;
    }
    
    var html = '';
    for (var i = 0; i < recentlyViewed.length; i++) {
        var item = recentlyViewed[i];
        html += '<div class="product-card">';
        html += '<img src="' + item.image + '" onclick="openProduct(' + item.id + ')" style="cursor:pointer;">';
        html += '<h3>' + item.title + '</h3>';
        html += '<p class="price">' + item.price + ' ₽</p>';
        html += '<button class="btn-cart" onclick="addToCart(' + item.id + ')">🛒 В корзину</button>';
        html += '</div>';
    }
    
    container.innerHTML = html;
}

function showPopular() {
    var container = document.getElementById('popularProducts');
    if (!container) return;
    
    var popular = [];
    for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].popular) {
            popular.push(allProducts[i]);
        }
    }
    popular = popular.slice(0, 4);
    
    var html = '';
    for (var i = 0; i < popular.length; i++) {
        var p = popular[i];
        html += '<div class="product-card">';
        html += '<img src="' + p.image + '" onclick="openProduct(' + p.id + ')" style="cursor:pointer;">';
        html += '<h3>' + p.title + '</h3>';
        html += '<p>⭐ ' + p.rating + '</p>';
        html += '<p class="price">' + p.price + ' ₽</p>';
        html += '<button class="btn-cart" onclick="addToCart(' + p.id + ')">🛒 В корзину</button>';
        html += '</div>';
    }
    
    container.innerHTML = html;
}