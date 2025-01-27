
/*1. Crie uma função que calcule o índice de massa corporal (IMC) 
de uma pessoa, a partir de sua altura, em metros, e peso, 
em quilogramas, que serão recebidos como parâmetro.*/

function calculoImc(a,p){
    let imc = p / (a*a);
    console.log(imc);
}

/*2. Crie uma função que calcule o valor do fatorial de um número passado 
como parâmetro.*/

function calculoFatorial(numero){
if(numero === 0 || numero===1){
    return 1;
}

let fatorial = 1;
for (let i= 2; i <= numero; i++) {
    }
    return fatorial;
}

let numero = 5;
let resultado = calculoFatorial(numero);
console.log(`O fatorial do número ${numero} é ${resultado}`);

/*3. Crie uma função que converte um valor em dólar, passado como parâmetro,
e retorna o valor equivalente em reais. Para isso, considere a cotação 
do dólar igual a R$4,80.*/

function conversaoDolar(valorDolar){
    let dolar = 4.80;
    let conversaoEmReais = valorDolar * dolar;
    return conversaoEmReais.toFixed(2);

}

let valorDolar = 1;
let conversaoEmReais = conversaoDolar(valorDolar);
let palavraDolares = valorDolar > 1? 'dolares' : 'dolar';
let palavraEquivalem = valorDolar > 1? 'equivalem' : 'equivale';
console.log(`${valorDolar} ${palavraDolares} ${palavraEquivalem} a R$ ${conversaoEmReais}`);


/*4. Crie uma função que mostre na tela a área e o perímetro de uma sala 
retangular, utilizando altura e largura que serão dadas como parâmetro.*/

function perimetroSala(altura,largura){
let area = altura * largura;
let perimetro = 2 * (altura + largura); 

console.log(`A sala possui: ${area} metros quadrados.`);
console.log(`O perímetro da sala corresponde a: ${perimetro} metros quadrados.`);

}

//Exemplo de uso:
let altura = 2.75;
let largura = 5.80;
perimetroSala(altura,largura);


/*5. Crie uma função que mostre na tela a área e o perímetro de uma sala 
circular, utilizando seu raio que será fornecido como parâmetro. 
Considere Pi = 3,14.*/

function calculoCircular(raio){
    let area = Math.PI * raio * raio;
    let perimetro = 2* Math.PI * raio;
    
    console.log(`A área da sala Circular tem: ${area.toFixed(2)} metros quadrados.`)
    console.log(`O Perímetro da sala circular é: ${perimetro.toFixed(2)} metros quadrados`);

}

//Exemplo de uso: 
let raio = 4; //em metros
calculoCircular(raio);

/*6. Crie uma função que mostre na tela a tabuada de um número dado como 
parâmetro.*/

function tabuada(numero){
for (let i = 1; i<= 10; i++){
let resultado = numero * i;
console.log(`${numero} x ${i} = ${resultado}`);
    }
}

//Exemplo de uso:
let numero1 = 2;
tabuada(numero);




