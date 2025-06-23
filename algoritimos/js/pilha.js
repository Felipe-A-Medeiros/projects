// function stack() { 
//     var items = []
 
//     this.push = function(Element){
//         items.push(Element);  // Adiciona um elemento ao final da pilha
        
//     }

//     this.pop = function(){
//         return items.pop();//remove o elemento do topo da pilha
//     }

//     this.peek = function() {
//          return items[items.length - 1];    // Retorna o elemento do topo da pilha sem removê-lo
//     }

//     this.isempty = function( ) {
//        return items.length === 0;    // Verifica se a pilha está vazia
        
//     }

//     this.clear = function () {
//        items = []; // Limpa todos os elementos da pilha
//     }

//     this.size = function() {
//         return items.length ; // Retorna o número de elementos na pilha 
//     }
//     this.print = function() {
//        console.log(items.toString());   // imprime os elementos da pilha
//     }
// } 

// let pilha = new stack(); // Cria uma nova instância da pilha     

// pilha.push(2) // Adiciona o elemento 1 à pilha
// pilha.push(4)
// pilha.push(6)
// pilha.push(8)
// pilha.push(10)

// pilha.print(); // Imprime os elementos da pilha


function Dec2bin(decNumber) {
    let reststack = [], 
        rest, 
        binaryString = ''; 

        while (decNumber > 0) {
            rest = Math.floor(decNumber % 2); // Calcula o resto da divisão por 2 
            reststack.push(rest); // enviando o resto para a pilha(reststack)
            decNumber = Math.floor(decNumber / 2); // Divide o número por 2
        }
        
        while(reststack.length > 0) {
            binaryString += reststack.pop().toString(); 
            // Remove o elemento do topo da pilha e adiciona à string binária
        }

        return binaryString; // Retorna a string binária resultante
}

console.log(Dec2bin(23)); // Exemplo de uso da função Dec2bin 