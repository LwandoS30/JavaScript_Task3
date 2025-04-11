//Exercise 1
//1)
console.log("===================================================")
let tempreture = -1

if(tempreture < 0)
{
    console.log("It's freezing");
}
else if( tempreture >= 0 && tempreture <= 15)
{
    console.log("It's cold");
}
else if( tempreture > 15 && tempreture < 26)
{
    console.log("It's mild")
}
else
{
    console.log("It's warm")
}

//2)
switch(tempreture)
{
    case "freezing":
        console.log("It's freezoing");
        break;

    case "cold":
        console.log("It's cold");
        break;

    case "mild":
        console.log("It's mild");
        break;

    case "warm":
        console.log("It's warm");
        break;
    default:
        console.log("");
        break;
}
        

console.log("===================================================")
//Exercise 2
let num = 10

if(num % 2 == 0 && num % 3 == 0)
{
    console.log("Divisible bt 2 and 3");
}
else if(num % 2 == 0)
{
    console.log("Divisible by 2");
}
else if(num % 3 == 0)
{
    console.log("Divisible by 3");
}
else
{
    console.log("Not divisible by 2");
}

console.log("===================================================")

//Switch
switch (true) {
    case (num % 2 === 0 && num % 3 === 0):
        console.log("Divisible by 2 and 3");
        break;
    case (num % 2 === 0):
        console.log("Divisible by 2");
        break;
    case (num % 3 === 0):
        console.log("Divisible by 3");
        break;
    default:
        console.log("Not divisible by 2");
}

console.log("===================================================")

//Exercise 3
//1)
for(var i = 1; i <= 10; i++)
{
    console.log(i);
}
console.log("===================================================")

//2) 
for(var i = 1; i <= 20; i++)
{
    if( i % 2 == 0)
    {
        console.log(i);
    }
}

console.log("===================================================")
//3)
let sumResults = 0
for(var c = 1; c <= 100; c++)
{
    sumResults += c
    
}
console.log(sumResults);

console.log("===================================================")
//4)
const numbers = [1,2,3,4,5]
for(var q = 0; q < numbers.length; q++)
{
    console.log(numbers[q]);
}

console.log("===================================================")
//5)
const numberz = [3,7,2,5,10,6]
let largest = 0

for(var o = 0; o < numberz.length; o++)
{
    if(numberz[o] > largest)
    {
        largest = numberz[o]
    }
    console.log(largest);
}
console.log("===================================================")

//Exercise 4
//1)
let l = 1
while(l <= 10)
{
    console.log(l);
    l += 1;
}
//2)

console.log("===================================================")
let w = 1
while(w <= 20)
{
    if( w % 2 == 0)
    {
        console.log(w);
    }
    w += 1
}
console.log("===================================================")
//4)
let r = 1
let sum100 = 0
while(r <= 100)
{
    sum100 += r
}
console.log(sum100);
console.log("===================================================")
//Exercise 5
//1)
let k = 1

do 
{
    console.log(k);
    k += 1;
}
while(k == 10);

//2)
let g = 1
let sumDo100 = 0
do 
{
    g += 1;
    sumDo100 += g
}
while(k == 100);
console.log(sumDo100);

//3)

let guessNum = 0
do
{
    guessNum = prompt("Please enter a number greater than 10: ");
    
}
while(guessNum <= 10);

//4)

let equalNum = 0
do
{
    equalNum = prompt("Please enter any number between 0 and 20")
    randomNum = Math.Floor(Math.random() * 10) + 1;
}
while(equalNum == randomNum);
