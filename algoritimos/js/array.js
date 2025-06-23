    // let AvgTemp = []

    // AvgTemp[0] = 31.9  
    // AvgTemp[1] = 32   
    // AvgTemp[2] = 38
    // AvgTemp[3] = 41.1 
    // AvgTemp[4] = 25.5

//console.log(AvgTemp[3]);

// let DaysOfWeak =  new Array( "sunday ", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" );

// //console.log(DaysOfWeak[3, 5]);

// let fibonacci = []

// fibonacci[0] = 0
// fibonacci[1] = 1
// fibonacci[2] = 1

// for(let i = 3; i < 20; i++){
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }
// console.log(fibonacci); 

// for(i = 0; i < fibonacci.length; i++){console.log(fibonacci[i]);}

// let numbers = [0, 1, 2, 3, 4, 5, 6 , 7 ,8 , 9 ]



// numbers.push(10); // Add 5 to the end of the array

// numbers.unshift(-1); // Add -1 to the beginning of the array

// numbers[numbers.length] = 6; // Add 6 to the end of the array using length property 

// // numbers.length = 9; // Set the length of the array to 9
// numbers.pop(); // Remove the last element (6) from the array
// numbers.shift(); // Remove the first element (-1) from the array

// numbers.splice(3,3); // Remove 3 elements starting from index 3
// console.log(numbers); // Output: [0, 1, 2, 3, 4, 5] 
// numbers.splice(3,0,3, 4 , 5)   // Insert 3 elements (3, 4, 5) starting from index 3
// console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 3, 4, 5] 

let Mouth=[]

let FirstWeak= []
let LastWeak = []


let AvgTempWeak1 = [31.9, 32, 38, 41.1, 25.5];
let AvgTempWeak2 = [30.5, 29.8, 35.2, 40.0, 26.1];
let AvgTempWeak3 = [28.0, 30.2, 34.5, 39.5, 27.0];
let AvgTempWeak4 = [29.5, 31.0, 36.0, 42.0, 28.5];

FirstWeak = [AvgTempWeak1, AvgTempWeak2 ]  // FirstWeak[0] = AvgTempWeak1 //recebendo o primeiro array
LastWeak = [AvgTempWeak3, AvgTempWeak4] // lastWeak[0] = AvgTempWeak3 //recebendo o terceiro array
// AvgTempWeak[0] = AvgTempWeak1 //recebendo o primeiro array
// AvgTempWeak[1] = AvgTempWeak2 //recebendo o segundo array 

 //console.log(AvgTempWeak[0][3]); // Accessing the 4th element of the first array (41.1) 
 Mouth = [FirstWeak, LastWeak]; //recebendo o array Mouth com os dois arrays FirstWeak e lastWeak


 //loop de repetição para acessar os valores do array Mouth
 for(let x = 0; x < Mouth.length; x++){
    for(let y = 0; y < Mouth[x].length; y++){
    for(let z = 0; z < Mouth[x][y].length; z++){
        console.log(Mouth[x][y][z]); 
    }
    } 
        }
    
 