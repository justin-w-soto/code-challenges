export function howMuchPencil(str) {
   let pencil = [];
   for(let i = -1; i < str.length; i++) {
       pencil.push(str.slice( i + 1 ));
   }
    return pencil;
};

export function wordsToCharList(arr) {
    return Array.from(arr);
};

export function listFoods(recipe){
    return recipe.ingredients.map(str => str.split(' ').slice(2).join(' '));
};

export function stepActions(recipe){
    return recipe.steps.map(str => str.split(' ').slice(0, 1).join(' '));
  
};

export function removeLastCharacters(str, numberOfCharacters){
    return str.substring(0, str.length -numberOfCharacters)
};

