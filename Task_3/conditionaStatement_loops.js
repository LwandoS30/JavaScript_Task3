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
console.log("===================================================")

let num = 10

if(num % 2 == 0)
{
    console.log("Divisible bt 2 and 3");
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
    console.log(c)
    sumResults += c
    
}
console.log(sumResults);

console.log("===================================================")
const numbers = [1,2,3,4,5]
for(var q = 0; q < numbers.length; q++)
{
    console.log(numbers[q]);
}


console.log("===================================================")
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
//2)
let l = 1
while(l <= 10)
{
    console.log(l);
    l += 1;
}
//3)

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

let r = 1
let sum100 = 0
while(r <= 100)
{
    console.log(r)
    sum100 += r
}
console.log(sum100);
console.log("===================================================")