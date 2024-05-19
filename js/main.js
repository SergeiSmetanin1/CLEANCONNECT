function processParagraphs() {
    const paragraphs = document.querySelectorAll('.underline');
    
    paragraphs.forEach(element => {
        const maxChars = calculateMaxChars();
        const text = element.textContent;
        const words = text.split(' ');
        let line = '';
        element.innerHTML = '';

        words.forEach(word => {
            if ((line + word).length <= maxChars) {
                line += word + ' ';
            } else {
                if (line.trim()) {
                    const span = document.createElement('span');
                    span.textContent = line.trim();
                    element.appendChild(span);
                }
                line = word + ' ';
            }
        });

        if (line.trim()) {
            const span = document.createElement('span');
            span.textContent = line.trim();
            element.appendChild(span);
        }
    });
}

function calculateMaxChars() {
    const width = window.innerWidth;
    if (width > 1900) return 90;
    if (width > 1500) return 70;
    if (width > 1000) return 60;
    if (width > 900) return 20;
    return 20;
}

processParagraphs();

window.addEventListener('resize', processParagraphs);


// Получаем все радио-кнопки
const radioButtons = document.querySelectorAll('input[name="cleaning_type"]');
// Получаем контейнер для карточки профиля
const cardContainer = document.querySelector("#card-ex-prof");

// Добавляем обработчик события change к каждой радио-кнопке
radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
        // Проверяем, какая радио-кнопка выбрана
        if (this.checked) {
            const selectedCleaningType = this.value;
            // Удаляем все классы у контейнера
            cardContainer.classList.remove('dry-cleaning', 'window-cleaning', 'daily-cleaning', 'deep-cleaning', 'post-renovation-cleaning');
            // Добавляем класс в зависимости от выбранного типа уборки
            switch (selectedCleaningType) {
                case '1':
                    cardContainer.classList.add('dry-cleaning');
                    break;
                case '2':
                    cardContainer.classList.add('window-cleaning');
                    break;
                case '3':
                    cardContainer.classList.add('daily-cleaning');
                    break;
                case '4':
                    cardContainer.classList.add('deep-cleaning');
                    break;
                case '5':
                    cardContainer.classList.add('post-renovation-cleaning');
                    break;
                default:
                    console.error("Неизвестный тип уборки:", selectedCleaningType);
            }
        }
    });
});



