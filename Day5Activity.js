// 1.
// a) Print odd numbers in an array
//Anonymous Function
let numArray = [1,2,3,4,5,6,7,8,9];
let findOdd = function() {
    let oddArr = []; //array to store odd numbers from provided input
    numArray.forEach(number => { //traverse each element and check below condition
        if(number%2 !==0)
        {
            oddArr.push(number); //if number is odd, pushing to oddArr array
        }
    });
    return oddArr;
};

console.log(findOdd());

//Output:
//[ 1, 3, 5, 7, 9 ]

//IIFE
(function (array) {
    let odd = []; 
    array.forEach(element => {
        if(element%2 !==0)
        {
            odd.push(element);
        }
    })
    console.log(odd);
})

([2,3,5,7,8,9,12,13]); 

//Output:
//[ 3, 5, 7, 9, 13 ]

// b) Convert all the strings to title caps in a string array
// Anonymous Function
let stringConvert = function (str) {
    str = str.split(" "); //creates a new array str with each element split at whitespace

    for (let i = 0; i < str.length; i++) { //traverse each word of the str array
        str[i] = str[i].charAt(0).toUpperCase()+ str[i].slice(1);  //capitalizing 1st character and and concatinating rest part of the word
    }
   console.log(str.join(' ')); //concatinating all words to form string
};
stringConvert('this is guvi bootcamp'); //passing string while calling function

//Output:
//This Is Guvi Bootcamp

//IIFE
(function (str) {
    str = str.split(" ");

    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase()+ str[i].slice(1);
    }
   console.log(str.join(' '));
})
('this is guvi bootcamp');

//Output:
//This Is Guvi Bootcamp

// c) Sum of all numbers in an array
//Anonymous Function
let sumArray = function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) { //traverse each element in the array using for loop
        sum += array[i]; //adding the elements
    }
    return sum;
};

console.log(sumArray([1,2,3,4,5,6]));

//Output:
//21

//IIFE
(function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
})

([1,2,3,4,5,6]);

//Output:
//21

//d) Return all the prime numbers in an array
//Anonymouos Function
let prime = function (n) { //using concept of Sieve of Erastostheneis to get prime numbers in range of 2 to n
    let numbers = []; let upperLimit = Math.sqrt(n); let output = [];
    
    for (let i = 2; i < n; i++) { 
        numbers.push(true); //assigning all the values of array to true upto n elements and pushing into numbers array
    }
    
    for (let i = 2; i < upperLimit; i++) { // traverse numbers array upto square root of n
        if (numbers[i]) { //truthy expression(initially all values in array numbers are marked true)
            for(let j= i*i; j< n; j+=i) //traverse the multiples of index i 
            {
                numbers[j] = false; //marking the multiple of i as false. This will remove the multiples of i which will never be prime
            }    
        }
    } // at end of this loop we have marked all the multiples of each number as false
    for (let i = 2; i < numbers.length; i++) { //traverse numbers array after marking necessary numbers as false
        if(numbers[i]) { //truthy expression
            output.push(i); //only those array indexes will be pushed to output array which are left with true(meaning they are prime numbers).
        }
    }// At the end we have all numbers in range n which are prime numbers
    return output;
}

console.log(prime(200)); //n=200

//Output:
/*[
    2,   3,   5,   7,  11,  13,  17,  19,  23,  29,  31,
   37,  41,  43,  47,  53,  59,  61,  67,  71,  73,  79,
   83,  89,  97, 101, 103, 107, 109, 113, 127, 131, 137,
  139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
  197, 197
]*/

//IIFE
( function (n){ //using the same concept of Sieve of Erastostheneis in an IIFE Function
    let numbers = []; let upperLimit = Math.sqrt(n); let output = [];
    
    for (let i = 2; i < n; i++) {
        numbers.push(true);
    }
    
    for (let i = 2; i < upperLimit; i++) {
        if (numbers[i]) {
            for(let j= i*i; j< n; j+=i)
            {
                numbers[j] = false;
            }    
        }
    }
    for (let i = 2; i < numbers.length; i++) {
        if(numbers[i]) {
            output.push(i);
        }
    }
    console.log(output);
})
(200);

//Output:
/*[
    2,   3,   5,   7,  11,  13,  17,  19,  23,  29,  31,
   37,  41,  43,  47,  53,  59,  61,  67,  71,  73,  79,
   83,  89,  97, 101, 103, 107, 109, 113, 127, 131, 137,
  139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
  197, 197
]*/

//e) Return all the palindromes in an array
//Anonymous Function
const palinCheckArr = [121,12321,123,'did']; //test case

let palindrome = function(palinCheckArr) {
    return palinCheckArr.filter((n) => { //using filter function we will return elements that are palindrome
        const str = String(n); //convert element to string
        let i = 0;
        let j = str.length - 1;
        while(i < j) {
        if(str[i] === str[j]) { //comparing 1st element with the last element 
            i++;
            j--;
        } else 
            return false; //return false if elements are not same
   }
   return true; //returns true when elements are same both sides. Hence, palindrome.
})
};
console.log(palindrome(palinCheckArr));

//Output:
//[ 121, 12321, 'did' ]

//IIFE
(function () {
    const result = palinCheckArr.filter((n) => {
      const str = String(n);
      let i = 0;
      let j = str.length-1;
      while(i<j)
        {
          if(str[i] === str[j])
            {
              i++;
              j--;
            }
          else
              return false;
        }
      return true;
    })
    console.log(result)
  })
();

//Output:
//[ 121, 12321, 'did' ]

//f)Return median of two sorted arrays of the same size
//Anonymous function
const testcase1 = [9,8,5,3,6,2]; //testcases
const testcase2 = [6,8,9,-4,7,2,1];

let sort = function (array) { //function to sort the array using Bubble Sort algorithm
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            if(array[j]>array[j+1])
            {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array; //return sorted array
}

let medianCalc = function (array) { //function to calculate median of array
  let data = sort(array); //calling sort function to sort the array
  let n = array.length;
  let median;
  if(n%2 == 0) //if array has even number of values
    {
      let firstNum = array[(n/2-1)]; //get 1st term
      let secondNum = array[(n/2)]; //get 2nd term
      median = (firstNum + secondNum) / 2; //add the terms and divide by 2 to get the median
    }
  else { //if array has odd number of values
    	median = array[Math.floor(n/2)]; //get the middle term and divide by 2 to get the median
  }
  console.log(median); //print the median of array
}

medianCalc(testcase1); //starter function
medianCalc(testcase2); //starter function

//Output:
//5.5
//6

//IIFE
(function(array) {
    let data = sort(array); //calling sort function to sort the array
    let n = array.length;
    let median;
    if(n%2 == 0) //if array has even number of values
        {
        let firstNum = array[(n/2-1)]; //get 1st term
        let secondNum = array[(n/2)]; //get 2nd term
        median = (firstNum + secondNum) / 2; //add the terms and divide by 2 to get the median
        }
    else 
        { //if array has odd number of values
    	median = array[Math.floor(n/2)]; //get the middle term and divide by 2 to get the median
        }
    console.log(median); //print the median of array
})

(testcase1);//IIFE runs only once so comment any one testcase for output
(testcase2);

//Output:
//5.5
//6

// g) Remove duplicates from an array
//Anonymous Function
let filterArray = function (chars) {

    let uniqueElement = chars.filter((c, index) => { //using filter function we are removing elements whose index 
        return chars.indexOf(c) === index;
    })
    console.log(uniqueElement);
}

filterArray([2,3,2,5,8,6]);

//Output
// [ 2, 3, 5, 8, 6 ]

//IIFE
(function (array) {
    let uniqueElement = array.filter((c, index) => { //using filter function we are removing elements whose index 
    return array.indexOf(c) === index;
    }
    )
    console.log(uniqueElement);
})

([2,3,2,5,8,6]);

//Output
// [ 2, 3, 5, 8, 6 ]


//h) Rotate an array by k times
//Anonymous Function
let rotation = function (array, k) 
{
    for (let i = 0; i <k; i++) { //loop runs for k times
        array.unshift(array.pop()); //popping last element from array and adding to the front using unshift function
    }
	console.log(array); //print the rotated array
}

rotation([1,2,3,4,5], 3);

// Outut:
// [ 3, 4, 5, 1, 2 ]

//IIFE
(function(array, k) 
{
    for (let i = 0; i <k; i++) { //loop runs for k times
        array.unshift(array.pop()); //popping last element from array and adding to the front using unshift function
    }
	console.log(array); //print the rotated array
})

([1,2,3,4,5],3); //calling IIFE

// Outut:
// [ 3, 4, 5, 1, 2 ]

// 3.
// a) Print odd numbers in an array
let numberArray = [1,2,3,4,5,6,7,8,9]; // testcase
let oddFind = () => { //arrow function
    let oddArr = []; //array to store odd numbers from provided input
    numberArray.forEach(number => { //traverse each element and check below condition
        if(number%2 !==0)
        {
            oddArr.push(number); //if number is odd, pushing to oddArr array
        }
    });
    return oddArr;
};

console.log(oddFind());

// Output:
// [ 1, 3, 5, 7, 9 ]

// b) Convert all the strings to title caps in a string array
let titleCaps = (str) => {
    str = str.split(" "); //creates a new array str with each element split at whitespace

    for (let i = 0; i < str.length; i++) { //traverse each word of the str array
        str[i] = str[i].charAt(0).toUpperCase()+ str[i].slice(1);  //capitalizing 1st character and and concatinating rest part of the word
    }
   console.log(str.join(' ')); //concatinating all words to form string
};
titleCaps('this is Prebootcamp'); //passing string while calling function

//Output:
// This Is Prebootcamp

// c) Sum of all numbers in an array
let sumFunc = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) { //traverse each element in the array using for loop
        sum += array[i]; //adding the elements
    }
    return sum;
};

//d) Return all the prime numbers in an array
let primeCalc = (n) => { //using concept of Sieve of Erastostheneis to get prime numbers in range of 2 to n
    let numbers = []; let upperLimit = Math.sqrt(n); let output = [];
    
    for (let i = 2; i < n; i++) { 
        numbers.push(true); //assigning all the values of array to true upto n elements and pushing into numbers array
    }
    
    for (let i = 2; i < upperLimit; i++) { // traverse numbers array upto square root of n
        if (numbers[i]) { //truthy expression(initially all values in array numbers are marked true)
            for(let j= i*i; j< n; j+=i) //traverse the multiples of index i 
            {
                numbers[j] = false; //marking the multiple of i as false. This will remove the multiples of i which will never be prime
            }    
        }
    } // at end of this loop we have marked all the multiples of each number as false
    for (let i = 2; i < numbers.length; i++) { //traverse numbers array after marking necessary numbers as false
        if(numbers[i]) { //truthy expression
            output.push(i); //only those array indexes will be pushed to output array which are left with true(meaning they are prime numbers).
        }
    }// At the end we have all numbers in range n which are prime numbers
    return output;
}

console.log(primeCalc(50)); //n=50
/*
Output:
[
    2,  3,  5,  7, 11, 13,
   17, 19, 23, 29, 31, 37,
   41, 43, 47
 ]*/

//e) Return all the palindromes in an array
const tests = [121,12321,123,'did']; //test case

let palin = (palinCheckArr) => {
    return palinCheckArr.filter((n) => { //using filter function we will return elements that are palindrome
        const str = String(n); //convert element to string
        let i = 0; //for iterating from begining of string
        let j = str.length - 1; //for iterating from end of string
        while(i < j) {
        if(str[i] === str[j]) { //comparing 1st element with the last element 
            i++;
            j--;
        } else 
            return false; //return false if elements are not same
   }
   return true; //returns true when elements are same both sides. Hence, palindrome.
})
};
console.log(palin(tests));

// Output:
// [ 121, 12321, 'did' ]