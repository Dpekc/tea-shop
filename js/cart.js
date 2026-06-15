var cart = [];

function addToCart(productId) {
    var product = findProduct(productId);
    if (!product) return;
    
    var existing = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) {
            existing = cart[i];
            break;
        }
    }
    
    if (existing) {
        existing.quantity = existing.quantity + 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveToStorage();
    updateAllCounters();
    
    var btns = document.querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) {
        if (btns[i].textContent.indexOf('В корзину') !== -1 && btns[i].onclick.toString().indexOf(productId) !== -1) {
            var btn = btns[i];
            var originalText = btn.textContent;
            btn.textContent = '✓ Добавлено!';
            btn.style.background = '#ff9800';
            setTimeout(function() {
                btn.textContent = originalText;
                btn.style.background = '#4caf50';
            }, 1000);
            break;
        }
    }
}

function showCart() {
    var modal = document.getElementById('cartModal');
    var itemsDiv = document.getElementById('cartItems');
    
    var html = '';
    var total = 0;
    
    if (cart.length === 0) {
        html = '<p style="text-align:center;padding:20px;">Корзина пуста</p>';
    } else {
        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            var itemTotal = item.price * item.quantity;
            total = total + itemTotal;
            
            html += '<div style="display:flex;align-items:center;gap:10px;margin:10px 0;padding:10px;border:1px solid #eee;border-radius:8px;">';
            html += '<img src="' + item.image + '" style="width:60px;height:60px;object-fit:cover;border-radius:4px;">';
            html += '<div style="flex:1;">';
            html += '<p><strong>' + item.title + '</strong></p>';
            html += '<p>' + item.price + ' ₽ x ' + item.quantity + ' = <strong>' + itemTotal + ' ₽</strong></p>';
            html += '</div>';
            html += '<button onclick="removeFromCart(' + item.id + ')" style="background:#f44336;color:white;border:none;padding:8px 12px;border-radius:4px;cursor:pointer;">Удалить</button>';
            html += '</div>';
        }
    }
    
    itemsDiv.innerHTML = html;
    document.getElementById('cartTotal').textContent = total;
    modal.style.display = 'block';
}

function removeFromCart(productId) {
    var newCart = [];
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id !== productId) {
            newCart.push(cart[i]);
        }
    }
    cart = newCart;
    saveToStorage();
    updateAllCounters();
    showCart();
}

function applyPromo() {
    var code = document.getElementById('promoInput').value.trim();
    var promoCodes = {
        'TEA10': 10,
        'COFFEE20': 20,
        'WELCOME': 15
    };
    
    if (promoCodes[code]) {
        alert('✅ Промокод применён! Скидка ' + promoCodes[code] + '%');
        document.getElementById('promoInput').value = '';
    } else if (currentUser && currentUser.promocodes && currentUser.promocodes.indexOf(code) !== -1) {
        alert('✅ Ваш персональный промокод применён! Скидка 15%');
        document.getElementById('promoInput').value = '';
    } else {
        alert('❌ Неверный промокод');
    }
}

function checkout() {
    if (!currentUser) {
        alert('🔒 Для оформления заказа необходимо войти в аккаунт!');
        return;
    }
    
    if (cart.length === 0) {
        alert('🛒 Корзина пуста!');
        return;
    }
    
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total = total + cart[i].price * cart[i].quantity;
    }
    
    var order = {
        id: Date.now(),
        items: cart.slice(),
        total: total,
        date: new Date().toLocaleString('ru-RU'),
        status: 'В обработке'
    };
    
    var orders = JSON.parse(localStorage.getItem('teaOrders') || '[]');
    orders.unshift(order);
    localStorage.setItem('teaOrders', JSON.stringify(orders));
    
    cart = [];
    saveToStorage();
    updateAllCounters();
    closeModal('cartModal');
    
    alert('✅ Заказ №' + order.id + ' успешно оформлен!\nСумма: ' + total + ' ₽\nСтатус: В обработке');
}