
//Exercise 1
console.log("=======================================================");
//1)
let intNum = 10
let floatNum = 8.75

let addNum, subtractNum, multiNum, divideNum, modNum, expoNum
//2)
addNum = intNum + floatNum
subtractNum = intNum - floatNum
multiNum = intNum * floatNum
divideNum = intNum / floatNum
modNum = intNum % floatNum
expoNum = intNum ** floatNum

//3)
console.log("The results an integer and float using addition operator: ",addNum)
console.log("The results of an integer and float using substraction operator: ",subtractNum)
console.log("The results of an integer and flaot using multiplication operator: ",multiNum)
console.log("The results of an integer and float using division operator: ",divideNum)
console.log("The results of an integer and float using modular operator: ",modNum)
console.log("The result of an integer and float using exponential operator : ",expoNum);



//Exercise 2
console.log("=======================================================");
//1)
let results = true
let x = 8
let y = 12

//2)
console.log('a) ',x > y);
console.log('b) ',x <= y);
console.log('c) ',x == y);
console.log('d) ',x != y);

console.log("=======================================================");


//3
let a = true
let b = false
let output

output = a && b
console.log(output);
output = a || b
console.log(output);
output = !a == b
console.log(output);

console.log("=======================================================");

//4)
let p = 10

//a)
p += 8
console.log(p);

//b)
p -= 2
console.log(p);

//c)
p *= 3
console.log(p);

//d)
p /= 5
console.log(p);

//e)
p %= 3
console.log(p);

