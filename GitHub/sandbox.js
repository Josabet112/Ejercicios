// stringss
console.log('Hola profe');

let email = 'joth112@outlook.es';
console.log(email);

//string concatenation
let firstName = 'Josabet';
let lastName = 'Hernandez';

let fullName = firstName +" "+ lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string length
console.log (fullName.length);                 

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);
 
let index = email.indexOf('@');
console.log(index);
//END 2 .1//

//common string methods

let email = 'joth112@outlook.es';

//CONTARA
    //let result = email.lastIndexOf('n');

//MOSTRARA LAS LETRAS EN EL RANGO ESTABLECIDO
    //let result = email.slice(0,20);

//SUSTITUIRA LOS VALORES POR LOS QUE SE LE OTORGUE M X W ANTES DEL PUNTO
    //let result = email.replace('m' , 'w')

//SUSTITUIRA LOS VALORES POR LOS QUE SE LE OTORGUE P por X ANTES DEL PUNTO
    let result = email.replace('p' , 'X')


console.log(result);
//END 2.2

let radius = 10;
const pi =3.14;

//console.log(radius,pi);

//math operathors +, -, *, /, **, %

//console.log(10/2);
//let result = radius % 3;
//let result = pi * radius**2;

//order of operation - B I D M A S

//let result = 5*(10-3)**2;

//console.log(resul);

let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;

//likes +=10;
//likes -=5;
//likes *=2;
//likes /=2;

//console.log(likes);

//NaN -not a number

//console.log(5 / 'hello');
//console.log(5 * 'hello');

let result = 'the blog has' + likes + 'likes';
console.log(result);
///END 2.3

//template strings
const title = 'Best reads of 2019';
const author = 'Josabet';
const likes = 10;

//concatenation way
//let result = 'The blog called' + title + 'by' + author + 'has' + likes + 'likes';
//console.log(result);

//template string way
let result = 'The blog called ${title} by ${author} hsa ${likes} likes';
console.log(result);

//creating html templates
let html = `
 
        <h2> ${title}</h2>
        <p>by ${author}</p>

        <spam>This blog has ${likes} likes</spam>
`;
console.log(html);
//END 2.4

let book = ['web', 'POO', 'RED'];

//book[1] = ken;
//console.log(book[1]);

//let ages = [20,25,30,35];
//console.log(ages[2]);

//let random = ['shaun', 'cristal', 30, 10];
//console.log(random)

//conosle.log(book.length);

//array methods

//let result = book.join(',');
//let result = book.indexOf('RED');
//let result = book.concat(['ken', 'crystal']);
let result = book.push('ken');
result = book.pop();

console.log(result);

////END 2.5

let age = null;

console.log(age, age + 3, 'the age is ${age}');
///END 2.6

//boleans & comparisons
console.log(true, false, "true", "false");

//methos can return booleans
let email = 'joth112@outlook.es';
let names = ['josabet', 'nimsi', 'imelda'];

//let result = emial.incluides('!');
//let result = names.incluides('bowser');

//console.log(result);

//comparison operators
let age = 25;

//console.log(age == 25);
//console.log(age == 30);
//console.log(age != 30);
//console.log(age > 20);
//console.log(age < 20);
//console.log(age <= 24);
//console.log(age >= 24);

let name = 'chester';

console.log(name == 'chester');
console.log(name == 'chester');
console,log(name > 'max');
console.log(name > 'chester');
console.log(name > 'max');
///END 2.7

let age = 25;

//loose comparison (different types can still be equal)

//console.log(age == 25);
//console.log(age == '25');
//console.log(age != 25);
//console.log(age != '25');

//strict comparison (different types cannont be equal)

console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');
///END 2.8

//type conversion
let score = '100';

//score = Number(score);
//console.log(score + 1);
//console.log(typeof score);

//let result = Number('hello');
//let result = String(50);
//let result = Boolean(0);
let result = Boolean('');

console.log(result, typeof result);
//END CHAPTER 2/6