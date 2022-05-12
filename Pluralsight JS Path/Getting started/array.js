const array = ['a','b','c','d'];
console.log('Initial array', array);

//push - adds element to the end of the array
array.push('e', 'f');
console.log('push', array);

//pop - removes element at the end of the array and returns it
const lastElement = array.pop();
console.log('Last Element', lastElement);
console.log('Array', array);

//shift - removes first element in array
const firstElement = array.shift();
console.log('First Element', firstElement);
console.log('Array', array);

//unshift - inserts element at the beginning of the array
array.unshift('a');
console.log('Unsfhit Array', array);

//accessing array items
console.log('First item', array[0]);
console.log('Second item', array[1]);
console.log('Third item', array[2]);

//accessing array items with for
for (let i = 0; i < array.length; i++) {
    console.log('Array item', i, array[i]);
}

//accessing array indexes with for in
for (const index in array) {
    console.log('index', index);
}

//accessing array items with for of
for (const element of array) {
    console.log('element', element);
}

//slice - returns a slice of an array
const newArr = array.slice(1,4);
console.log('splice', newArr);
console.log('Original array', array);

//splice - deletes elements of an array, it has 
//two arguments (index of the element, number of items to delete)
array.splice(1,2);
console.log('Delete with splice', array);
//we can also use splice to replace an element, or to insert in a 
//certain index
array.splice(1,0,'b');
console.log('Insert with splice', array);
//replacing an element of an array with splice
array.splice(2,1,'c');
console.log('Replacing with splice', array);

//indexof - it lets us get the index of a certain value
console.log('Index of b:', array.indexOf('b'));
//inserting another b to see what happens
array.splice(4,0,'b');
console.log('Array wirh another b:', array);
//it shows the first index of the element
console.log('Index of b:', array.indexOf('b'));
//if we try to get the index of and element that doesn't exists
//the function returns -1
console.log('Index of f:', array.indexOf('f'));

//filter - it lets us create a new array by filtering the elements, without
//altering the first array
const filteredArray = array.filter(e => e !== 'b');
console.log('Filtered array:', filteredArray);
console.log('Original array:', array);

//find - it lets us find an element of an array withouth altering
//the original array
const found = array.find(e => e > 'b');
console.log('Found:', found);
console.log('Original array:', array);

//forEach - 
array.forEach(element => console.log('forEach:', element));