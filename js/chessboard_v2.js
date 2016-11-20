function chessBoard() {
    'use strict';

    let nums = [8, 7, 6, 5, 4, 3, 2, 1],
        letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        cell = '';

    $('.code-data').append('<table cellspacing="0" cellpadding="0" class="boardLetters"></table>');
    $('.boardLetters:eq(0)').append('<tr></tr>');
    for (let i = -1; i < 8; i++) {
        if (i != -1) {
            $('.boardLetters:eq(0) > tr').append(`<td>${letters[i]}</td>`);
        } else {
            $('.boardLetters:eq(0) > tr').append('<td></td>');
        }
    }

    $('.code-data').append('<table cellspacing="0" cellpadding="0" class="boardNums"></table>');
    for (let i = 8; i > 0; i--) {
        let table = $('.boardNums:eq(0)');
        table.append(`<tr><td>${i}</td></tr>`);
    }

    $('.code-data').append('<table cellspacing="0" cellpadding="0" id="chessBoard" class="chessBoard"></table>');
    for (let i = 0; i < 8; i++) {
        let table = $('.chessBoard');
        table.append('<tr></tr>');
        for (let j = 0; j < 8; j++) {
            let tr = $(`.chessBoard > tr:eq(${i})`);
            tr.append('<td></td>');
        }
    }

    $('.code-data').append('<table cellspacing="0" cellpadding="0" class="boardNums"></table>');
    for (let i = 8; i > 0; i--) {
        let table = $('.boardNums:eq(1)');
        table.append(`<tr><td>${i}</td></tr>`);
    }

    $('.code-data').append('<table cellspacing="0" cellpadding="0" class="boardLetters"></table>');
    $('.boardLetters:eq(1)').append('<tr></tr>');
    for (let i = -1; i < 8; i++) {
        if (i != -1) {
            $('.boardLetters:eq(1) > tr').append(`<td>${letters[i]}</td>`);
        } else {
            $('.boardLetters:eq(1) > tr').append('<td></td>');
        }
    }

    $('.code-data').append('<div class="step">Текущая ячейка:</div>');

    $('.code-data').append('<div class="removed"></div>');

    $('.removed').append('<table class="removed-white" cellspacing="0" cellpadding="0"></table>');
    $('.removed-white').append('<tr></tr>');

    for (let i = 0; i < 16; i++) {
        $('.removed-white tr').append('<td></td>');
    }

    $('.removed').append('<table class="removed-black" cellspacing="0" cellpadding="0"></table>');
    $('.removed-black').append('<tr></tr>');

    for (let i = 0; i < 16; i++) {
        $('.removed-black tr').append('<td></td>');
    }

    $('.chessBoard tr:eq(0) td:eq(0)').append('<img src="img/black_rook.png" alt="b_rook" height="48px" width="48px">');
    $('.chessBoard tr:eq(0) td:eq(7)').append('<img src="img/black_rook.png" alt="b_rook" height="48px" width="48px">');
    $('.chessBoard tr:eq(0) td:eq(1)').append('<img src="img/black_knight.png" alt="b_knight" height="48px" width="48px">');
    $('.chessBoard tr:eq(0) td:eq(6)').append('<img src="img/black_knight.png" alt="b_knight" height="48px" width="48px">');
    $('.chessBoard tr:eq(0) td:eq(2)').append('<img src="img/black_bishop.png" alt="b_bishop" height="48px" width="48px">');
    $('.chessBoard tr:eq(0) td:eq(5)').append('<img src="img/black_bishop.png" alt="b_bishop" height="48px" width="48px">');
    $('.chessBoard tr:eq(0) td:eq(3)').append('<img src="img/black_queen.png" alt="b_queen" height="48px" width="48px">');
    $('.chessBoard tr:eq(0) td:eq(4)').append('<img src="img/black_king.png" alt="b_king" height="48px" width="48px">');
    $('.chessBoard tr:eq(1) td').append('<img src="img/black_pawn.png" alt="b_pawn" height="48px" width="48px">');

    $('.chessBoard tr:eq(7) td:eq(0)').append('<img src="img/white_rook.png" alt="w_rook" height="48px" width="48px">');
    $('.chessBoard tr:eq(7) td:eq(7)').append('<img src="img/white_rook.png" alt="w_rook" height="48px" width="48px">');
    $('.chessBoard tr:eq(7) td:eq(1)').append('<img src="img/white_knight.png" alt="w_knight" height="48px" width="48px">');
    $('.chessBoard tr:eq(7) td:eq(6)').append('<img src="img/white_knight.png" alt="w_knight" height="48px" width="48px">');
    $('.chessBoard tr:eq(7) td:eq(2)').append('<img src="img/white_bishop.png" alt="w_bishop" height="48px" width="48px">');
    $('.chessBoard tr:eq(7) td:eq(5)').append('<img src="img/white_bishop.png" alt="w_bishop" height="48px" width="48px">');
    $('.chessBoard tr:eq(7) td:eq(3)').append('<img src="img/white_queen.png" alt="w_queen" height="48px" width="48px">');
    $('.chessBoard tr:eq(7) td:eq(4)').append('<img src="img/white_king.png" alt="w_king" height="48px" width="48px">');
    $('.chessBoard tr:eq(6) td').append('<img src="img/white_pawn.png" alt="w_pawn" height="48px" width="48px">');

    function extractCell() {
        let letter = '',
            num = 0;
        letter = letters[$('.checked').index()];
        num = nums[$('.checked').parent().index()];
        $('.step').text(`Текущая ячейка: ${letter + num}`);
        return letter + num;
    }

    function checkCell(event, cell = undefined) {
        let tr = 0,
            td = 0;
        $('.chessBoard tr td').removeClass('checked');
        if (cell !== undefined) {
            tr = (8 - (+cell[1]) === 8 ? 0 : 8 - (+cell[1]));
            td = (cell[0].charCodeAt(0) - 65 === 8 ? 0 : cell[0].charCodeAt(0) - 65);
            $(`.chessBoard tr:eq(${tr}) td:eq(${td})`).addClass('checked');
        } else {
            $(this).addClass('checked');
        }
    }

    function removeImg(event, cell = undefined) {
        let tr = 0,
            td = 0;
        if (cell !== undefined) {
            tr = (8 - (+cell[1]) === 8 ? 0 : 8 - (+cell[1]));
            td = (cell[0].charCodeAt(0) - 65 === 8 ? 0 : cell[0].charCodeAt(0) - 65);
            $(`.chessBoard tr:eq(${tr}) td:eq(${td}) img`).css('display', 'none');
        } else {
            $(this).css('display', 'none');
        }

    }

    function addImage(event, cell = undefined) {
        let tr = 0,
            td = 0;

    }

    $('.chessBoard tr td').on('click', checkCell);
    $('.chessBoard tr td').on('click', extractCell);
    $('.chessBoard tr td img').on('click', removeImg);
    $(document).keydown(function(e) {

        switch (e.which) {
            case 37: //left
                e.preventDefault();
                cell = extractCell();
                cell = String.fromCharCode(cell[0].charCodeAt(0) - 1) + cell[1];
                checkCell(e, cell);
                extractCell();
                break;
            case 38: //up
                e.preventDefault();
                cell = extractCell();
                cell = cell[0] + (+cell[1] + 1);
                checkCell(e, cell);
                extractCell();
                break;
            case 39: //right
                e.preventDefault();
                cell = extractCell();
                cell = String.fromCharCode(cell[0].charCodeAt(0) + 1) + cell[1];
                checkCell(e, cell);
                extractCell();
                break;
            case 40: //down
                e.preventDefault();
                cell = extractCell();
                cell = cell[0] + (+cell[1] - 1);
                checkCell(e, cell);
                extractCell();
                break;
            case 13: //return
                e.preventDefault();
                cell = extractCell();
                removeImg(e, cell);
            default:
                return;
        }
    });


}

$().ready(chessBoard);
