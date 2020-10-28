console.log('Hello from JavaScript!');

// Refreshers from Monday...
// We can have numbers...
console.log(5, 'is a number...');
// We can have true/false...
console.log(true, 'and', false, 'are Booleans...');
// We can have strings
console.log('"12345"', 'and', '"abcdef"', 'are strings...');
// We can have null values
console.log(null, 'is null...')
// We can have undefined values
console.log(undefined, 'is undefined...')
// We can have NaN (Not a Number) values
console.log(5/"cow", 'is not a number...');

// Complex values!
// We can have arrays
console.log(['a','b','c'], 'is an array...');
// We can have object literals
console.log({one: 'two', buckle: 'my shoe'}, 'is an object...');

var pet = { name: 'Hank', species: 'dog', age: 6 };
// var rush = ['Alex Lifeson', 'Neil Peart', 'Geddy Lee'];

var rush = [
  { name: 'Alex Lifeson', instrument: 'guitar' },
  { name: 'Neil Peart', instrument: 'drums' },
  { name: 'Geddy Lee', instrument: 'bass' }
];

// Functions...
function addTwo(number) {
  if (typeof number != 'number') {
    number = 0;
  }
  return number + 2;
}
