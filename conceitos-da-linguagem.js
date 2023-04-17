var nome;
var valor = 10.00;

let auxiliar;
let endereco = "rua do almeirão"; 
let descricao_produto = 'Adquira o perfume jequiti'; 
const PI = 3.1415;
const array_numeros = [13, 27, 40];

function calcularAreaDoCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}

// let area_circulo = calcularAreaDoCirculo(15); 
// console.log("Área do circulo de 15 cm é: ", area_circulo, " cm");

const calcularAreaDoTrapezio = function(base_menor, base_maior, altura) { // atribuição de função anônima  
    return (base_menor + base_maior) * altura / 2;
};

const calcularAreaDoQuadrado = (l,h) => l * h; // arrow function

function calcularArea(funcao_de_calculo, parametros){
    return funcao_de_calculo(...parametros);
}

// const area_quadrada = calcularArea((l,h) => l * h, [20, 40]); 
// const area_quadradav2 = calcularArea(function(l,h) {return l * h}, [20, 40]); 
// const area_trapezio = calcularArea(calcularAreaDoTrapezio,[20, 25, 15]); 
// console.log("Área do quadrado é ", area_quadrada, " cm");
// console.log("Área do trapezio é ", area_trapezio, " cm");
 
function calculuarSequenciaFibonacci(quantidade_de_numeros){
    let sequencia = new Array(quantidade_de_numeros);

    for (let i = 0; i < quantidade_de_numeros ; i++) {
        if( i < 2){
            sequencia[i] = 1
        }
        else{
            sequencia[i] = sequencia[i -1] + sequencia[i -2]
        }
    }

    return sequencia;
}

function fibRecArray(quantidade_de_numeros, i = 0, seq = []) {
    if (i == quantidade_de_numeros) {
        return seq;
    }

    const value =  (i < 2) ? i : seq[i-1] + seq[i-2];

    return fibRecArray(quantidade_de_numeros, i + 1, [...seq, value]);
}

function fibRec(quantidade_de_numeros, i = 0, a = 1, b = 0) {
    if (i == 0) {
        console.log(b);
    } else {
        console.log(a);
    }

    if (i < quantidade_de_numeros) {
        fibRec(quantidade_de_numeros, i + 1, a + b, a);
    }
}

console.log(fibRec(20));