console.log("Hello World!\n==========\n");

//Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for(let number = 0; number < 100; number++){
    if(number % 2 != 0){
        console.log(number);
    }
}

//Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let number = 1; number < 100; number++){
    if(number % 3 == 0 && number % 5 == 0){
        console.log(number, `FIZZBUZZ`);
    }
    if(number % 3 == 0){
        console.log(number, `FIZZ`);
    }
    if(number % 5 == 0){
        console.log(number, `BUZZ`);
    }
}

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log("Exercise 1 as while loop:");
let number = 0;

while(number < 100){
    if(number % 2 != 0){
        console.log(number);
    }
    number++;
}

console.log("Exercise 1 as do/while loop:");
do{
    if(number % 2 != 0){
        console.log(number);
    }
    number++;
}while(number <= 100);


console.log("Exercise 2 as do/while loop:");
number = 1;
do{
    if(number % 3 == 0 && number % 5 == 0){
        console.log(number, `FIZZBUZZ`);
    }else if(number % 3 == 0){
        console.log(number, `FIZZ`);
    }else if(number % 5 == 0){
        console.log(number, `BUZZ`);
    }
    number++;
}while(number <= 100);

console.log("Exercise 2 as a while loop:");
number = 1;

while(number <= 100){
    if(number % 3 == 0 && number % 5 == 0){
        console.log(number, `FIZZBUZZ`);
    }else if(number % 3 == 0){
        console.log(number, `FIZZ`);
    }else if(number % 5 == 0){
        console.log(number, `BUZZ`);
    }
    number++;
}

console.log("=========================");

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

number = 0;
for(; number <= n; number++){
    if(number == value){
        console.log(`Found value!`);
        break;
    }
}

if(number != value){
    console.log(`Did not find value.`);
}

console.log(`value = ${value}\nn = ${n}`);

//Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let number = start; number <= n; number++){
    if(number % fizzDivisor == 0 && number % buzzDivisor == 0){
        console.log(number, `FIZZBUZZ`);
    }
    if(number % fizzDivisor == 0){
        console.log(number, `FIZZ`);
    }
    if(number % buzzDivisor == 0){
        console.log(number, `BUZZ`);
    }
}

