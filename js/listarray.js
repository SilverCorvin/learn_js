function listArray() {

    // Переводим код в режим соответствия современному стандарту
    'use strict';

    // Определяем переменные и их типы
    let txt = '';

    // Добавляем заголовок 3-го уровня
    txt = '<h3>Задание 1</h3>';

    // Добавляем горизонтальную черту
    txt += '<hr>';

    // Добавляем данные из переменной txt в блок "code-box"(div id="code-box")
    document.getElementById("code-box").innerHTML = txt;
}
