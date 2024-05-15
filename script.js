// string manipulation functions
// reversing a string

function reverseString(str){
    const strRev = str.split('').reverse().join('');
    console.log(strRev);
}
reverseString("hello");

// counting characters
// counting both whitespace characters
var str= "hello, world!";
console.log("The character count is " + str.length);

// counting non-whitespace characters
var str = "Hello, world!";
console.log(str.trim().length);

// capitalize words
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
  
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

console.log(titleCase("I'm a little tea pot"));


// Array function
// maximum and minimum
function setMini(A) {
  let mini = Infinity;
  for (let i = 0; i < A.length; i++) {
      if (A[i] < mini) {
          mini = A[i];
      }
  }
  return mini;
}

function setMaxi(A) {
  let maxi = -Infinity;

  for (let i = 0; i < A.length; i++) {
      if (A[i] > maxi) {
          maxi = A[i];
      }
  }
  return maxi;
}

function main() {
  const A = [4, 9, 6, 5, 2, 3];
  console.log("Minimum element is: " + setMini(A));
  console.log("Maximum element is: " + setMaxi(A));
}

main();

// sum of array
const arr = [23, 34, 77, 99, 324];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);


// filter array
const numberArr = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numberArr.filter(function(number)
{return number % 2 === 0;});

console.log(evenNumbers);


// Mathematical function
// factorial
function factorial(n) { 
  if (n == 0) return 1; 
  return n * factorial(n - 1); 
} 

let num = 5; 
console.log("Factorial of " + num + " is " + factorial(num)); 
  
// prime number check
function checkPrime(num) {
  let i, flag = true;
  for (i = 2; i <= num - 1; i++) {
      if (num % i == 0) {
          flag = false;
          break;
      }
  }
  if (flag == true)
      console.log(num + " is prime");
  else
      console.log(num + " is not prime");
}
checkPrime(4);
checkPrime(5);

  // fibonacci number
  function fib(n)
{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}
 
    let n = 11;
     
    console.log(fib(n));
 