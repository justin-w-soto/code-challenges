export function getHouses(obj) {
    return Object.values(obj).map(obj => obj.house);
};

export function updateNumbers(obj) {
    return Object.entries(obj).map(obj => obj[0] + ": " + obj[1]);
};

export function totalCharacters(arr) {
    let count = 0;
    Object.values(arr).forEach(arr => {
        count++;
        count += arr.children.length;
        if (arr.spouse) count++;
        
    });
    return count;
};

export function hasChildrenEntries(arr, character) {
    let statement = false;
    const matching = arr.find(obj => obj.name === character);

    if (matching.children[0] !== undefined) {
        statement = true;
    }
    return statement;
}; 

export function sortByChildren(arr){
    return arr.sort((a, b) => a.children.length - b.children.length);
};