// Функция проверки значения на число
function isNumeric(value) {
    if (!isNaN(parseFloat(value)) && isFinite(value)) {
        return true;
    } else {
        return false;
    }
}
