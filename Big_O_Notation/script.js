// function reverseAString( value){

//        return  value.split('').reverse().join('   ');
// }

// const reverseString = (value) => {
//        let reversedArray = [];
//        for( let i = 0 ; i <= value.length ; i++){
//               reversedArray.push(value.charAt(value.length - i))
//        }
//        return reversedArray;
// }
// console.log(reverseString('UMBILICAL'))

// BIG O is just a numerical notation to talk about how performant and efficient our code is. 
// const addAllNumbersToN = (n) => {
       // let total = 0; 
       // for(let i = 0;  i <= n ; i++){
       //        total+=i;
       // }
       // return total;
       
       // return n * (n + 1) / 2
// }
// let t1 = performance.now();
// let sumOfTrillion = addAllNumbersToN(5000);
// let t2 = performance.now();

// console.log( `it took ${(t2 - t1) / 1000} seconds to evaluate the sum of all numbers in a trillion which is ${sumOfTrillion}`)

// console.log(addAllNumbersToN(10));

function printAllPairs(n){
       for(let i  = 0; i <= n ; i++){
              for(let j = 0; j <=n ; j++){
                     console.log(i , j)
              }
       }
}

printAllPairs(10);