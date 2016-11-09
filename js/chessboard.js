function ChessBoard() {
    // Переводим код в режим соответствия современному стандарту
    'use strict';

    // Определяем переменные и их типы
    let txt = '',
        letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        // Задаем массивы из Unicode символов шахмат,
        black_chesses = ['\u265C', '\u265E', '\u265D', '\u265B', '\u265A', '\u265D', '\u265E', '\u265C'],
        white_chesses = ['\u2656', '\u2658', '\u2657', '\u2655', '\u2654', '\u2657', '\u2658', '\u2656'],
        // плюс две переменные для пешек
        black_pawn = '\u265F',
        white_pawn = '\u2659';

    // Добавляем блок с цифрами
    txt = '<div id="chessBoardNumbers"></div>';
    // Добавляем блок с шахматами
    txt += '<div id="mainChessBoard"></div>';
    // Добавляем блок с буквами
    txt += '<div id="chessBoardLetters"></div>';
    // Отображаем на странице
    document.getElementById("code-data").innerHTML = txt;
    // Создаем шахматную доску в цикле
    for (let i = 0; i < 64; i++) {
        // Объявляем вспомогательный объект
        let element = {};
        // Находим элемент по id='mainChessBoard', т.е. шахматную доску
        element = document.getElementById('mainChessBoard');
        // Добавляем дочерний div в элемент, т.е. одну клетку
        element.appendChild(document.createElement('div'))
            // Добавляем класс равный первичному или вторичному цвету
        element.childNodes[i].setAttribute('class', parseInt((i / 8) + i) % 2 == 0 ? 'first-color' : 'second-color');
    }

    // Итерируем по клеткам доски
    for (let i = 0, j = 8; i < 8; i++, j--) {
        // Объявляем вспомогательный объект
        let element = {};
        // Находим элемент по id='mainChessBoard', т.е. шахматную доску
        element = document.getElementById('mainChessBoard');
        // В первом ряду добавляем i-тый элемент массива с черными фигурами
        element.childNodes[i].textContent = black_chesses[i];
        // Во втором ряду добавляем черные пешки
        element.childNodes[i + 8].textContent = black_pawn;
        // В предпоследнем ряду добавляем белые пешки
        element.childNodes[i + 48].textContent = white_pawn;
        // В последнем ряду добавляем i-тый элемент массива с белыми фигурами
        element.childNodes[i + 56].textContent = white_chesses[i];
        // Находим элемент по id='chessBoardLetters', т.е. блок с буквами
        element = document.getElementById('chessBoardLetters');
        // Добавляем блок и задаем ему i-тое значение из массива с буквами
        element.appendChild(document.createElement('div')).textContent = letters[i];
        // Находим элемент по id='chessBoardNumbers', т.е. блок с цифрами
        element = document.getElementById('chessBoardNumbers');
        // Добавляем блок и задаем ему значение j, т.е. цифру
        element.appendChild(document.createElement('div')).textContent = j;
    }
}

window.onload = ChessBoard;
