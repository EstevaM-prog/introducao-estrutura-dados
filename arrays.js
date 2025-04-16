let alisson_nota_av1 = 8;
let alisson_nota_av2 = 9.6;
let alisson_media = (alisson_nota_av1 + alisson_nota_av2) / 2

console.log ('Média Alison;' + alisson_media);

console.log ('Exemplo com arrays')
let notas_alison = [8, 9.6];
console.log ('notas_alison');

console.log('AV1: '+notas_alison[0]);
console.log('AV2: '+notas_alison[0]);
notas_alison[2] = (notas_alison[0] + notas_alison[1]) / 2;
console.log ('Media: ' +notas_alison[2]);
console.log ('Todas: ' +notas_alison);


 // Bubble sort 
 
let entrada = [97, 45, 49, 32,2, 5, 9, 99,1, 7];
let saida = [1, 2, 5, 7, 9, 32, 45, 49, 97];

function bubbleSort(elemento) {
    let n = elemento.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (elemento[j] > elemento[j + 1]) {
                
                let temp = elemento[j];
                elemento[j] = elemento[j + 1];
                elemento[j + 1] = temp;
            }
        }
    }
    return elemento;
}

let lista = [97, 45, 49, 32,2, 5, 9, 99,1, 7];
console.log("Lista não ordenada:", lista);
console.log("Lista ordenada:", bubbleSort(lista));
