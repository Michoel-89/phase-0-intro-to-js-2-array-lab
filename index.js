// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat(name) {
  return cats.push(name);
}


function destructivelyPrependCat(name) {
  return cats.unshift(name);
}


function destructivelyRemoveLastCat() {
  return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
  return cats.shift();
}
    
function appendCat(name) {
  return  [...cats, name]; 
}
 
function prependCat(name) {
  return  [name, ...cats];
}

function removeLastCat() {
   return   cats.slice(0, 2);   
}

function removeFirstCat() 
  { return   cats.slice(-2);
}
   