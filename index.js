// //Hemmingway

// function fibonacci(size) {
//     var first = 0, second = 1, next, count = 2, result = [first, second];

//     if (size < 2) {
//         return "not long enough"
//     }

//     while (count++ < size) {
//         next = first + second;
//         first = second;
//         second = next;
//         result.push(next);
//     }

//     return result;
// }

// console.log(fibonacci(10));

// //Shakespear

// function fibonacci(size) {
//     var result, counter

//     result = [0]

//     for (counter = 1; counter < size; counter++) {
//         result[counter] = (result[counter-1] || 1) + result[Math.max(0, counter-2)]
//     }

//     return result;
// }

// console.log(fibonacci(10));

// // Andre Breton

// function fibonacci(size) {
//     var num1 = 0, num2 = 0, num3 = 1, result = [num2, num3], num4;

//     while (2 + num1++ < size) {
//         num4 = num2 + num3;
//         result.push(num3 = (num2 = num3, num4));
//     }

//     return result;
// }

// console.log(fibonacci(10));

// // Dan Brown

// function fibonacci(size) {
//     var num = [0,1,1];

//     count  = 3,

//     vector = 1.61803;

//     while (count < size) {
//         count++;
//         num.push(
//             Math.round(num[count -2] * vector)
//         );    
//     }

//     if(num.length > size) {
//         num = num.slice(0, size)
//     }
//     return num;
// }

// console.log(fibonacci(8));
