let x = 7;
let y = '6';
let z = x + y;
console.log('Answer: ' + z); // this will give you 76 because type coercion for x to string

//if you would like to add the string 6 as number you have to parse it:
let a = 7;
let b = '6';
let c = a + parseInt(b, 10);
console.log('Answer: ' + c);