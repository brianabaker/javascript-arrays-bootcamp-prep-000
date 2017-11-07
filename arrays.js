var chocolateBars = ['chocolateBars', 'snickers', 'hundred grand', 'kit kat', 'skittles']

function addElementToBeginningOfArray(array, element){
 return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, element){
  return array[element];
}

function destructivelyRemoveElementFromBeginningOfArray(element){
  array.shift();
  return array
}

function removeElementFromBeginningOfArray(){
  return array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0, array.length - 1);
}
