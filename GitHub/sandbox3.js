// for loops

//for(let i = 0; i < 5; i++){
//    console.log('int loop:', i);
//}

//console.log('loop finished');

const names = ['esau', 'azael', 'abdiel'];

for(let i = 0; i < names.length; i++){
    //console.log(name[i]);
    let html = <div>${names[i]}</div>
    console.log(html);
}
//END 3.0

// while loops
const names = ['esau', 'azael', 'abdiel'];
//let i = 0;

//while( i < 5){
    //console.log('int loop:', i);
    //i++;
//}

let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}
///END 3.1

// do while loops
let i = 3;

do{
    console.log('val of i is', i);
    i++;
} while(i < 5);
//END 3.2//

// if statements
//const age = 25;

//if(age > 20){
 //   console.log('your are over 20 years old');
//}

//const objects = ['table', 'chair', 'stove', 'armchair'];

//if(objects.length > 3){
//    console.log("that's a lot of objects ")
//}

const password = 'p@ss';

if(password.length >= 8){
    console.log('that password is long enough!');
}
//END 3.3
//else if statements

const password = 'p@ss';

if(password.length >= 12){
    console.log('that password is mighty strong')
}else if(password.length >= 8){
    console.log('that password is long enough!');
}else{
    console.log('password is not long enough');
}
//END 3.4

//logical operators - OR ||and AND &&

const password = 'p@ss12';

if(password.length >= 12 && passwprd.incluides('@')){
    console.log('that password is mighty strong')
}else if(password.length >= 8 || password.incluides('@') && password.length > 5){
    console.log('that password is long enough!');
}else{
    console.log('password is not strong enough');
}
//END 3.5

//logical NOT (!)

let user = false;

if(!user){
    console.log('you must be logged in to continue')
}

console.lolg(true);
console.log(false);
//END 3.6

// break and continue
const score = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < score.length; i++){

 if(scores[i] === 0){
     continue;
 }

    console.log('your score: ', score[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}
//END 3.7

//switch statements
const grade = 'D';

switch(grade){

}

//using if statements
if(grade === 'A'){

}else if(grade ==='B'){

}else if(grade ==='C'){
    
}else if(grade ==='D'){

}else if(grade ==='E'){

}else {

}
//switch statements
const grade = '50';

switch(grade){
    case'50':
        console.log('you got an A!');
        break;
    case'B':
        console.log('you got an B!');
        break;
    case'C':
        console.log('you got an C!');
        break;
    case'D':
        console.log('you got an D!');
        break;
    case'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}
//END 3.8

//variables & block scope
const age = 20;

if(true){
    const age = 40;
    const name = 'josmar';
    console.log('inside lst code block: ', age, name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block:', age);
    }
}

console.log('outside code block: ', age, name, test);

///END CHARPER 3