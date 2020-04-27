//object leterals

let user = {
    name: 'josmar',
    age:'7',
    email:'josmar@gmail.com',
    location: 'allende',
    blogs: ['dinosaur information']
};

console.log(user);
console.log(user.name);

//user.age = 10;
console.log(user.age);

console.log(user['location']);
user['name'] = 'azael';
console.log(user['name']);

console.log(typeof user);
//END 5.1

//object leterals

let user = {
    name: 'josmar',
    age:'7',
    email:'josmar@gmail.com',
    location: 'allende',
    blogs: ['dinosaur information'],
    login: function(){
        console.log('the user logged in');
    },
    logout:function(){
        console.log('the user logged out');
    },
    logBlogs: function(){

    }
};

user.login();
user.logout();

const name = 'abdiel'
name.toUpperCase();
//END 5.2

//object leterals

//const blogs =[
 //   {title: 'dinosaur information', likes: 10 }
//];
//console.log(blogs);

let user = {
    name: 'josmar',
    age:'7',
    email:'josmar@gmail.com',
    location: 'allende',
    blogs: [
        {title: 'dinosaur information', likes: 10 }
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs() {
      // console.log(this.blogs);
       console.log('this user has written the following blogs:');
       this.blogs.forEach(blog => {
           console.log(blog.title, blog.likes);
       });
    
    }
};


user.logBlogs();
console.log(this);
//END 5.3

//Math object

console.log(Math);
console.log(Math.PI);
console.log(Mth.E);


const area = 5.3;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));
//END 5.4

// primitive values

//let scoreOne = 50;
//let scoreTwo = scoreOne;

//console.log('scoreOne: ${scoreOne}', 'scoreTwo: ${scoreTwo}');

//scoreOne = 100;
//console.log('scoreOne: ${scoreOne}', 'scoreTwo: ${scoreTwo}');
//reference values


const userOne = {name: 'ryu', age: 10};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo)