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
