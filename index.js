capitalize = (str) => str.substring(0, 1).toUpperCase() + str.substring(1, str.length);

allCaps = (str) => str.toUpperCase();

capitalizeWords = (str) => str.split(' ').map((word, i) => capitalize(word)).join(' ');

capitalizeHeadline = (str) => {
    const notCaps = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by'];
    return str.split(' ').map((word) => !notCaps.includes(word) ? capitalize(word) : word).join(' ');
}

isEmpty = (str) => {
    const emptyChars = ['\n', '\r', '\n'];
    return str.trim().split('').filter((character) => !emptyChars.includes(character)).length === 0;
}

removeExtraSpaces = (str) => str.trim().split(' ').filter((word) => word !== '').join(' ');

kabobCase = (str) => removeExtraSpaces(str.toLowerCase().replace(/[^a-zA-Z ]/g, '')).split(' ').join('-');

snakeCase = (str) => removeExtraSpaces(str.toLowerCase().replace(/[^a-zA-Z ]/g, '')).split(' ').join('_');

camelCase = (str) => {
    return str.trim().split(' ').map((word, i) => {
        if (i !== 0) {
            return capitalize(word.replace(/[^a-zA-Z ]/g, ''))
        } else {
            return word.replace(/[^a-zA-Z ]/g, '').toLowerCase();
        }
    }).join('');
}

shift = (str, numChars) => str.trim().slice(numChars, str.length) + str.trim().slice(0, numChars);

makeHashTag = (str) => '#' + capitalizeWords(str.trim()).split(' ').sort((a, b) => b.length - a.length).slice(0, 3).join('');

String.prototype.capitalize = function () {
    return capitalize(this);
}

String.prototype.capitalizeWords = function () {
    return capitalizeWords(this);
}

String.prototype.capitalizeHeadline = function () {
    return capitalizeHeadline(this);
}

String.prototype.kabobCase = function () {
    return kabobCase(this);
}

String.prototype.snakeCase = function () {
    return snakeCase(this);
}

String.prototype.camelCase = function () {
    return camelCase(this);
}
