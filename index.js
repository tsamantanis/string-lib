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
    return str.toLowerCase().trim().split(' ').map((word, i) => {
        if (i !== 0) {
            return capitalize(word.replace(/[^a-zA-Z ]/g, ''))
        } else {
            return word.replace(/[^a-zA-Z ]/g, '').toLowerCase();
        }
    }).join('');
}

shift = (str, numChars) => str.trim().slice(numChars, str.length) + str.trim().slice(0, numChars);

oddCaps = (str) => str.split('').map((character, index) => index % 2 ? character.toLowerCase() : character.toUpperCase()).join('')

evenCaps = (str) => str.split('').map((character, index) => index % 2 ? character.toUpperCase() : character.toLowerCase()).join('')

String.prototype.capitalize = function () {
    return capitalize(this);
}

String.prototype.allCaps = function () {
    return allCaps(this);
}

String.prototype.capitalizeWords = function () {
    return capitalizeWords(this);
}

String.prototype.capitalizeHeadline = function () {
    return capitalizeHeadline(this);
}

String.prototype.removeExtraSpaces = function () {
    return removeExtraSpaces(this);
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

String.prototype.oddCaps = function () {
    return oddCaps(this);
}

String.prototype.evenCaps = function () {
    return evenCaps(this);
}

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords,
    capitalizeHeadline,
    isEmpty,
    removeExtraSpaces,
    kabobCase,
    snakeCase,
    camelCase,
    shift,
    oddCaps,
    evenCaps
}
