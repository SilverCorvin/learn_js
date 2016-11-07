function pickFromObj() {

    // Переводим код в режим соответствия современному стандарту
    'use strict';

    // Определяем переменные и их типы
    let txt = '',
        key = '',
        keys = [],
        user = {},
        new_user_obj = {};

    // Добавляем заголовок 3-го уровня
    txt = '<h3>Задание 3</h3>';

    // Добавляем горизонтальную черту
    txt += '<hr>';

    // Добавляем блок с динамическими данными на страницу
    txt += '<div class="code-data">';

    // Задаем свойства объекта
    user = {
        name: 'Ivan',
        age: 29,
        email: 'example@example.com',
        friends: ['Sveta', 'Artem'],
        id: 1421,
        color: 'blue'
    }

    // Добавляем информацию об объекте на страницу
    // JSON.stringify преобразует user в строку JSON
    txt += `<p><b>Исходный объект</b>: ${JSON.stringify(user)}</p>`;

    // Указываем ключи(свойства) по которым будем искать в объекте
    keys = ['name', 'second-name', 'age', 'id', 'car'];

    // Добавляем данные о ключах(свойствах) на страницу
    txt += `<p><b>Ключи(свойства) для поиска</b>: ${keys}</p>`;

    // Функция поиска ключей(свойств) в объекте
    function pick(obj, keys) {
        
        // Итерируем по каждому из ключей(свойств) в keys
        for (key of keys) {

            // Проверяем есть ли ключ(свойство) в исходном объекте
            if (obj.hasOwnProperty(key)) {

                // Если ключ(свойство) найдено, то добавляем его и значение
                // в новый объект
                new_user_obj[key] = obj[key];
            }
        }
    }

    // Вызываем функцию для заданных данных
    pick(user, keys);

    // Добавляем информацию о новом объекте на страницу
    // JSON.stringify преобразует new_user_obj в строку JSON
    txt += `<p><b>Новый объект</b>: ${JSON.stringify(new_user_obj)}</p>`;

    // Добавляем закрытие блока с динамическими данными на страницу
    txt += '</div>';

    // Добавляем данные из переменной txt в блок "code-box"(div id="code-box")
    document.getElementById("code-box").innerHTML = txt;
}
