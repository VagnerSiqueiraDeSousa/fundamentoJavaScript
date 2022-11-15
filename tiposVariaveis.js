// var, pode ser usada solta no codigo podendo gerar erro
//let, sempre declara antes de ser utilizar o valor pode ser alterando mais a frente e tem que ser declarado antes
//const, o valor não pode ser alterado a frente "valor fixo" e sempre declarado antes

//var altura = 5;
//var comprimento = 7;
//area = altura * comprimento;
//console.log(area);
//var area;

/*
let forma = 'retangulo'
let altura = 5;
let comprimento = 7;
let area

if(forma === 'retangulo'){
    area = altura * comprimento; 
}else{
    area = (altura * comprimento) /2;
}
console.log(area);
*/

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'quadrado'){
    area = altura * comprimento; 
}else{
    area = (altura * comprimento) /2;
}

console.log(area)
