import { getHouses, updateNumbers, totalCharacters, hasChildrenEntries, sortByChildren } from './more-object-keys-entries.js';

const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ];


test('it gets the names of the houses', () => {
  const output = getHouses(characters); 
  expect(output).toEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy', 'Snow']); 
});


test('it transforms value pairs to strings', () => {
  const characters = 
    { 'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933' }
  ; //arrange
  const output = updateNumbers(characters); 
  expect(output).toEqual(['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933']); 
});


test('it counts the number of characters', () => {
    const output = totalCharacters(characters); 
    expect(output).toEqual(26); 
});

test('it returns true or false', () => {
  
    const output = hasChildrenEntries(characters, 'Eddard');
    expect(output).toEqual(true);
    const output2 = hasChildrenEntries(characters, 'Euron');
    expect(output2).toEqual(false);
    
  });

  test('it sorts by least to most children', () => {
    const output = sortByChildren(characters); 
    expect(output).toEqual([ 
      {name: 'Euron', spouse: null, children: [], house: 'Greyjoy'},
      { name: 'Jon S.', spouse: null, children: [], house: 'Snow'}, 
      {name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn'},
      {name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell'}, 
      { name: 'Cersei',spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister'},
      {name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen'},
      {name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark'}]); 
  });
  