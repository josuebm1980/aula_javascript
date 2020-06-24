//Functions =  faz parte da base de todo software pois vai controlar o fluxo de execução, toda entrados e saida de dados
// Para criar uma função no JS foi utilizar uni VERBO + SUBSTÂNTIVO

/*let corSite =  'azul';
function resetaCor (cor) {
        corSite = cor;

};


console.log(corSite);
resetaCor("vermelho");
console.log(corSite);
*/

let corSite =  'azul';
function resetaCor (cor, tonalidade) {
        corSite = cor + tonalidade;

};


console.log(corSite);
resetaCor("verde", " claro");
console.log(corSite);