

//function expression
const speak = function(){
    console.log( 'good day!');
};

//greet();
//greet();
//greet();

speak();
speak();
speak();

//function declaration
function greet(){
    console.log('hello there');
}
//END 4.1

//arguments &parameters

const speak = function(name = 'josabet',time = night){
    console.log('good  ${name} ${time}');
};

speak();
speak('osman');
//END 4.2

//returning values 
//const speak = function(name = 'osman', time = 'night'){
//    console.log('good ${time} ${name}');
//};

//const calArea = function(radius){
 // return 3.14 * radius ** 2;

//}

// arrow fuction
const calArea =radius => 3.14 * radius ** 2;



const area = calArea(5);
console.log('area is:', area);
//END 4.3

// practise arrow functions

//const greet = function(){
//    return 'hello, world';
//}

//const greet = () => 'hello, world';
//const result = greet();
//console.log(result);

//const bill = function(products, tax){
//    let total = 0;
//    for (let i = 0; i < products.length; i++){
//        total += products[i] + products[i] * tax;
//    }
//   return total;
//

const bill = (products, tax) =>{
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
   return total;
};

console.log(bill([10,15,30], 0.2));
//END 4.4

const name = 'osman';

//functions

const greet = () => 'hello'

let resultOne = greet();
console.log(resultOne);

//methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);
//END 4.5

//callbacks & foreach

//const myFunc = (calbackFunc) =>{
    //do something
 //  let value = 50;
  //  callbackFunc(value);
//};
//myFunc(value =>{
    //do something
   // console.log(value);
//});


//callbacks & foreach
 let people = ['osman', 'azael', 'esau', 'abdiel', 'josmar'];

 const logPerson = (person, index) => {
     console.log('${index} - hello ${person}');
 }

 people.forEach(logPerson);
 //END 4.6

 // get a reference to the 'ul'
 const ul = document.querySelector('.People');

 const people = ['osman', 'azael', 'esau', 'abdiel', 'josmar'];

 let html = '';

 people.forEach(person => {
    //create html template
    html += '<li style="color: blue">${person}</li>';
 });

 console.log(html);
ul.innerHTML =html;