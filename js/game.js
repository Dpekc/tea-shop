var secretNumber = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 5) + 1;
    
    console.log('Загадано число: ' + secretNumber); // Для отладки, можно удалить
    
    document.getElementById('gameModal').style.display = 'block';
    document.getElementById('gameResult').textContent = '';
    document.getElementById('gameResult').style.color = '#333';
    document.getElementById('guessNumber').value = '';
    document.getElementById('guessNumber').focus();
}

function checkGuess() {
    var guessInput = document.getElementById('guessNumber');
    var guess = Number(guessInput.value);
    var resultEl = document.getElementById('gameResult');
    
    if (!guess || guess < 1 || guess > 5) {
        resultEl.textContent = '⚠ Введите число от 1 до 5!';
        resultEl.style.color = '#ff9800';
        guessInput.value = '';
        guessInput.focus();
        return;
    }
    
    if (guess === secretNumber) {
        resultEl.textContent = '🎉 Поздравляем! Вы угадали число ' + secretNumber + '!';
        resultEl.style.color = 'green';
        guessInput.disabled = true;
        
        if (currentUser) {
            if (!currentUser.bonuses) currentUser.bonuses = 0;
            currentUser.bonuses = currentUser.bonuses + 50;
            
            if (!currentUser.promocodes) currentUser.promocodes = [];
            var newCode = 'BONUS' + Math.floor(Math.random() * 900 + 100);
            currentUser.promocodes.push(newCode);
            
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            setTimeout(function() {
                alert('🎁 Вы выиграли!\n💎 +50 бонусов\n🎫 Промокод: ' + newCode + ' (скидка 10%)');
                closeModal('gameModal');
                guessInput.disabled = false;
            }, 1000);
        } else {
            setTimeout(function() {
                alert('🎉 Вы угадали!\n\n🔒 Войдите в аккаунт, чтобы получить бонусы и промокоды!');
                closeModal('gameModal');
                guessInput.disabled = false;
                showAuth();
            }, 1000);
        }
        
    } else if (guess < secretNumber) {
        resultEl.textContent = '📈 Загаданное число БОЛЬШЕ! Попробуйте ещё раз';
        resultEl.style.color = '#2196f3';
        guessInput.value = '';
        guessInput.focus();
    } else {
        resultEl.textContent = '📉 Загаданное число МЕНЬШЕ! Попробуйте ещё раз';
        resultEl.style.color = '#2196f3';
        guessInput.value = '';
        guessInput.focus();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var guessInput = document.getElementById('guessNumber');
    if (guessInput) {
        guessInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkGuess();
            }
        });
    }
});