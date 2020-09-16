"use strict"
// Get btn
const btn_1 = document.querySelector('#btn-1');
const btn_2 = document.querySelector('#btn-2');
const btn_3 = document.querySelector('#btn-3');
const btn_4 = document.querySelector('#btn-4');
const btn_5 = document.querySelector('#btn-5');
const btn_6 = document.querySelector('#btn-6');
const btn_7 = document.querySelector('#btn-7');
const btn_8 = document.querySelector('#btn-8');
const btn_9 = document.querySelector('#btn-9');

// GET output
const outputHTML = document.querySelector('#output');

// addEventListener
btn_1.addEventListener('click', btn_1_output);
btn_2.addEventListener('click', btn_2_output);
btn_3.addEventListener('click', btn_3_output);
btn_4.addEventListener('click', btn_4_output);
btn_5.addEventListener('click', btn_5_output);
btn_6.addEventListener('click', btn_6_output);
btn_7.addEventListener('click', btn_7_output);
btn_8.addEventListener('click', btn_8_output);
btn_9.addEventListener('click', btn_9_output);

// JavaScript ES6/ES2015-[03]Let and Const Declaration
function btn_1_output() {
    // Globally var and let work the same way
    // Declaring variables

    var a = 'Test1';
    let b = 'Test2';

    // Outputing variables to console

    console.log(a);
    console.log(b);

    function testVar() {
        var a = 30;
        if (true) {
            var a = 50;
            console.log(a);
        }
        console.log(a);
        // all a values will be set to 50
    }
    testVar();

    function testlet() {
        // let depends on scope
        let a = 30;
        if (true) {
            let a = 50;
            console.log(a);
        }
        console.log(a);
    }
    testlet();

    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log(i); // i will be undefined as its outside the scope
    
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log(i);  // will have the loop exiting i value
    
    const colors = [];
    colors.push('red');
    colors.push('blue');


    // colors = 'Green'; // cannot change type of constant variable

    console.log(colors);


    const green = 'green';

    // green = 1; // cannot change datatype of constant variables

    console.log(green);
}

// JavaScript ES6/ES2015-[04]Classes and Inheritance
function btn_2_output() {
    class User{
        constructor(username, email, password){
            this.username = username;
            this.email = email;
            this.password = password;
        }
        
        static countUsers(){
            console.log('There are 50 users');
        }
        
        register(){
            console.log(`${this.username} is now registered!`);
        }
    }

    let bob = new User('bob', 'bob@gmail.com', '1234');
    bob.register();

    User.countUsers();

    class Member extends User{
        constructor(username, email, password, memberPackage){
            super(username, email, password);
            this.memberPackage = memberPackage;
        }
        
        getPackage(){
            console.log(`${this.username} is subscribed to the ${this.memberPackage} package!`);
        }
    }

    let mike = new Member('mike','mike@gmail.com','12324','Standard');

    mike.getPackage();

    mike.register();
}

// JavaScript ES6/ES2015-[05]Template Literals
function btn_3_output() {
    function makeUpperCase(word){
        return word.toUpperCase();
    }
    let name = 'Khan';
    let template = `<h1 class="text-center bg-white rounded shadow-xl text-blue-500 font-normal">${makeUpperCase('Hello')}, ${name}</h1>
                    <p class="font-normal text-center m-2 mx-2 p-2 bg-white rounded">This is a simple tamplate in JavaScript</p>`;
  
    outputHTML.innerHTML = template;
}

// JavaScript ES6/ES2015-[06]New String & Number Methods
function btn_4_output() {
    // NEW STRING METHODS
    let theString = `Hello, my name is Khan and I love JavaScript`;
    // startsWith()
    console.log(theString.startsWith('Hello'));
    // endsWith()
    console.log(theString.endsWith('JavaScript'));
    // includes()
    console.log(theString.includes('love'));

    // NEW NUMBER METHODS
    // HEX type
    console.log(0xFF);
    // Binary type
    console.log(0b101011);
    // Octal type
    console.log(0o543);

    // isFinite();
    console.log(Number.isFinite(Infinity));
    console.log(Number.isFinite(NaN));
    // isNaN();
    console.log(Number.isNaN(NaN));
    // isInteger()
    console.log(Number.isInteger(4));
}

// JavaScript ES6/ES2015-[07]Default Params & Spread Operator
function btn_5_output() {
    // Default Params
    function greet($greeting = 'Hello World'){
        console.log($greeting);
    }
    greet();

    // Spread Operator
    let args = [1,2,3,4];
    let args2 = [4,5,6]
    function test() { 
        console.log(`${args},${args2}`);
    }
    test.apply(null, args, args2);
    test(...args,...args2);
}

// JavaScript ES6/ES2015-[08]Set, Map, WeakSet, WeakMap
function btn_6_output() {
    let myArray = [11,22,34,65,34];
    // Set
    let mySet = new Set(myArray);
    mySet.add('100');
    mySet.add({a : 1, b : 2});
    mySet.delete(22);
    console.log(mySet);
    console.log(mySet.size);
    mySet.forEach(val => console.log(val));

    // Map
    let myMap = new Map([['a1','Hello'],['b2','GoodBye']]);
    myMap.set('c3', 'foo');
    myMap.delete('a1');
    console.log(myMap);
    console.log(myMap.size);

    // WeakSET
    let carWeakSet = new WeakSet();
    let car1 = {
        make: 'Honda',
        model: 'Civic'
    }
    let car2 = {
        make: 'Toyota',
        model: 'Camry'
    }

    carWeakSet.add(car1);
    carWeakSet.add(car2);
    carWeakSet.delete(car1);
    console.log(carWeakSet);

    // WeakMap
    let carWeakMap = new WeakMap();

    let key1 = {
        id: 1
    }

    let key2 = {
        id: 2
    }
    
    carWeakMap.set(key1, car1);
    carWeakMap.set(key2, car2);

    carWeakMap.delete(key2);
    console.log(carWeakMap);


}

// JavaScript ES6/ES2015-[09]Arrow Function
function btn_7_output() {
    let add = function (a, b) { 
        let sum = a + b;
        console.log(sum);
    }
    add(4,5);

    let sub = (a,b) => console.log(a-b);
    sub(4,5);
}

// JavaScript ES6/ES2015-[10]Promises
function btn_8_output() {
    // Immediatly Resovled
    var myPromise = Promise.resolve('Foo');
    myPromise.then((res) => console.log(res));

    var myPromise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 2000);
    });

    myPromise2.then((res) => {
        res += 3;
        console.log(res);
    });

    function getData(method,url){
        return new Promise((resolve,reject)=>{
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onload = function() {
                if(this.status >= 200 && this.status < 300){
                    resolve(xhr.response);
                }else{
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = () =>{
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }
    
    getData('GET', 'https://jsonplaceholder.typicode.com/todos')
    .then((data)=>console.log(data))
    .catch(err => console.log(err));
}

// JavaScript ES6/ES2015-[11]Generators
function btn_9_output() {
    function *g1(){
        console.log('Hello');
        yield 'Yield 1 ran..';
        console.log(('World'));
        yield 'Yield 2 ran...';
        return'Returned...';
    }

    var g = g1();
    // console.log(g.next().value);
    // console.log(g.next().value);
    // console.log(g.next().value);

    for (let val of g){
        console.log(val);
    }
}



