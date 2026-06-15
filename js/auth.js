var currentUser = null;

function showAuth() {
    document.getElementById('authModal').style.display = 'block';
}

function login() {
    var email = document.getElementById('loginEmail').value.trim();
    var password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        alert('Заполните все поля!');
        return;
    }
    
    var users = JSON.parse(localStorage.getItem('teaUsers') || '[]');
    var foundUser = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            foundUser = users[i];
            break;
        }
    }
    
    if (foundUser) {
        currentUser = foundUser;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        closeModal('authModal');
        updateAuthButton();
        alert('👋 С возвращением, ' + foundUser.name + '!');
    } else {
        alert('❌ Неверный email или пароль!');
    }
}

function register() {
    var name = document.getElementById('regName').value.trim();
    var email = document.getElementById('regEmail').value.trim();
    var password = document.getElementById('regPassword').value;
    
    if (!name || !email || !password) {
        alert('Заполните все поля!');
        return;
    }
    
    if (password.length < 6) {
        alert('Пароль должен быть не менее 6 символов!');
        return;
    }
    
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Введите корректный email!');
        return;
    }
    
    var users = JSON.parse(localStorage.getItem('teaUsers') || '[]');
    
    // Проверяем уникальность email
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            alert('Пользователь с таким email уже существует!');
            return;
        }
    }
    
    var newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        bonuses: 100,
        promocodes: ['WELCOME']
    };
    
    users.push(newUser);
    localStorage.setItem('teaUsers', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    closeModal('authModal');
    updateAuthButton();
    alert('🎉 Регистрация успешна!\nВам начислено 100 бонусов и промокод WELCOME');
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    closeModal('profileModal');
    updateAuthButton();
    alert('👋 Вы вышли из аккаунта');
}

function updateAuthButton() {
    var btn = document.getElementById('authBtn');
    if (!btn) return;
    
    if (currentUser) {
        btn.textContent = '👤 ' + currentUser.name;
        btn.onclick = showProfile;
    } else {
        btn.textContent = '👤 Войти';
        btn.onclick = showAuth;
    }
}

function showProfile() {
    if (!currentUser) return;
    
    var modal = document.getElementById('profileModal');
    var info = document.getElementById('profileInfo');
    var orders = JSON.parse(localStorage.getItem('teaOrders') || '[]');
    
    var html = '';
    
    html += '<h3>👤 Личные данные</h3>';
    html += '<div style="background:#f9f9f9;padding:15px;border-radius:8px;margin-bottom:15px;">';
    html += '<p><strong>Имя:</strong> <input id="editProfileName" value="' + currentUser.name + '" style="width:auto;padding:5px;border:1px solid #ddd;border-radius:4px;"></p>';
    html += '<p><strong>Email:</strong> ' + currentUser.email + '</p>';
    html += '<p><strong>💎 Бонусы:</strong> ' + (currentUser.bonuses || 0) + ' баллов</p>';
    html += '<p><strong>🎫 Промокоды:</strong> ' + (currentUser.promocodes && currentUser.promocodes.length > 0 ? currentUser.promocodes.join(', ') : 'нет') + '</p>';
    html += '</div>';
    html += '<button onclick="saveProfile()" style="background:#4caf50;color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;margin-right:10px;">💾 Сохранить</button>';
    html += '<button onclick="logout()" style="background:#f44336;color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;">🚪 Выйти</button>';
    
    html += '<h3 style="margin-top:20px;">📦 Мои заказы</h3>';
    
    if (orders.length === 0) {
        html += '<p style="color:#999;">У вас пока нет заказов</p>';
    } else {
        for (var i = 0; i < orders.length; i++) {
            var order = orders[i];
            html += '<div style="border:1px solid #ddd;padding:15px;margin:10px 0;border-radius:8px;background:#fafafa;">';
            html += '<p><strong>Заказ №' + order.id + '</strong></p>';
            html += '<p>📅 Дата: ' + order.date + '</p>';
            html += '<p>📊 Статус: <span style="color:#ff9800;">' + order.status + '</span></p>';
            html += '<p>📦 Товаров: ' + order.items.length + ' на сумму <strong>' + order.total + ' ₽</strong></p>';
            html += '</div>';
        }
    }
    
    info.innerHTML = html;
    modal.style.display = 'block';
}

function saveProfile() {
    var newName = document.getElementById('editProfileName').value.trim();
    if (newName && currentUser) {
        currentUser.name = newName;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateAuthButton();
        alert('✅ Имя обновлено!');
    }
}