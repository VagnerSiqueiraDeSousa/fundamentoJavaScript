//parâmetros de função

function soma (numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2,2));
console.log(soma(245,20));
console.log(soma(-500,60));
console.log(soma(-2022,1983));

// parâmetros x argumentos


// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade} `;
}

console.log(nomeIdade("Vagner", 39));


function multiplica(numero1 =1, numero2 =1){
    return numero1 * numero2
}
                            //9         //6
// console.log(multiplica(soma(4,5), soma(3,3)));

console.log(multiplica(soma(4,5)));

//função sem retorno e sem parâmetro, string fixa

function cumprimentar(){
    console.log('hi, people')
}

cumprimentar()

// Função sem retorno, com parâmetro: similar à anterior, porém agora a 
// função recebe, via parâmetro, o nome da pessoa a ser cumprimentada. 
// Dessa forma é possível reaproveitar a função para que funcione de maneira
// parecida com o nome de qualquer pessoa (desde que esteja no formato de dado string.


function cumprimentadaPessoa(pessoa){
    console.log(`oi, ${pessoa}`)
}

cumprimentadaPessoa('Vagner')


// Função com retorno, sem parâmetro:
//  É possível combinar funções para que cada uma controle apenas uma 
//  parte do código e elas trabalhem juntas.

// No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro.
//  Mas logo abaixo vemos que ela está sendo utilizada para montar uma string na função
//   cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” deve estar 
//   disponível para outras partes do programa - ou seja, deve ser retornada com o uso da 
//   palavra-chave return.

function cumprimentar(){
    return 'oi gente!'
}

function cumprimentadaPessoa(nomePessoa){
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentadaPessoa('Hadassa')

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
  console.log(operacaoMatematica(15, 30, 45)) // 90


  function comParametro(param){
    console.log(param)
  }
comParametro();