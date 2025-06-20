    // let AvgTemp = []

    // AvgTemp[0] = 31.9  
    // AvgTemp[1] = 32   
    // AvgTemp[2] = 38
    // AvgTemp[3] = 41.1 
    // AvgTemp[4] = 25.5

//console.log(AvgTemp[3]);

let DaysOfWeak =  new Array( "sunday ", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" );

//console.log(DaysOfWeak[3, 5]);

let fibonacci = []

fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for(let i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci); 

for(i = 0; i < fibonacci.length; i++){console.log(fibonacci[i]);}