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

    $('.code-data').append('<div class="step"></div>');

    function extractCell() {
        let letter = '',
            num = 0;
        letter = letters[$('.checked').index()];
        num = nums[$('.checked').parent().index()];
        $('.step').text(letter + num);
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

    $('.chessBoard tr td').on('click', checkCell);
    $('.chessBoard tr td').on('click', extractCell);
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
            default:
                return;
        }
    });

}

$().ready(chessBoard);
