const texto1 ="Ola mundo!";
const texto2 ='ola mundo!';
const senha1 = "senhaSuperSegura456!"
const StringDeNumero = "34567";

const citacao1 = "O Leo disse 'oi!'";
//console.log(citacao);

//concatenação (+)
 const citacao = "Meu nome é";
 const nome = " Vagner";
 //console.log(citacao + nome)


//template string ou template literal, para pesquisa

//const cifrao = '\u0024'
//const aMaiusculo = '\u0041'
//const tique = '\u2705'
//const hiragana = '\u3041'

//console.log(cifrao)
//console.log(aMaiusculo)
//console.log(tique)
//console.log(hiragana)

const cidade = "belo horizonte";
const input = "BELO HORIZONTE";

console.log(cidade ===input); // resultado com falso


const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

//console.log(cidade === inputMinusculo); // true

//console.log('ALFABETO'.toLowerCase());
//console.log('cidade'.toUpperCase('en-US'));

const city = 'instabul';
//console.log(city.toLocaleUpperCase('PT-BR'));

const senha = "minhaSenha123";
//console.log(senha.length);// mostra quantos caracteres tem na amarzenada na variavel, muito util para senhas
//Uma propriedade lengthde um objeto Stringcontém o cumprimento da string. lengthé uma propriedade read-only(somente leitura) de instâncias de string.

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)
