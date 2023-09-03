// Funções

/**O Que são?
 * São blocos de comandos e instruções para execução de determinadas tarefas:
 * Ex: function nomeDaFuncao() {
 * ${instrucao};
 * }
 * 
 * nomeDaFuncao();
 */

/** Como Declarar?
 * Geralmente se utiliza a palavra reservada "function" seguida
 * de parênteses "()" e chaves "{}":
 * Ex: function funcao() {
 * console.log("mensagem");
 * }
 * 
 * funcao();
 * 
 * () - Indica que é um objeto do tipo function.
 * {} - Indica que é um bloco de instrução.
 */

function funcao() {
    console.log('Função.')
}

funcao();

// Funções com Parâmetros
/**
 * As funções podem receber em sua declaração, parâmetro, que servem
 * como variáveis, onde sua atribuição pode ser feita durante a chamada da função:
 * 
 * Ex: function nomeDaFuncao(parametro) {
 * ${instrucao};
 * }
 * 
 * nomeDaFuncao(valorDoParametro);
 */

function mensagem(primeiro, segundo) {
    console.log('Função', 'com Parâmetros.');
}

mensagem();

// Funções Declarativas
/** São funções que possuem o uso mais comum, deve ser declarada usando a palavra
 * reservada "function" seguida do nome da função, parênteses "()" e chaves "{}":
 * Ex: function nomeDaFuncao() {
 * ${instrucao};
 * }
 * 
 * o nome da função é obrigatório
 */
 function funcao2() {
    console.log('Função Declarativa.');
 }
 funcao2();

 // Expressões de Funções
/**São funções atribuídas à expressões. A nomeação das funções por expressão é opcional:
*Ex 1: var funcao = function nomeDaFuncao(){
        ${instrucao};
        }
Ex 2: var funcao = function()
        ${instrucao};
*/

var funcao3 = function() {
    console.log('Função de Expressão.')
}

funcao3();

// Arrow Function
/**São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e
*portanto não podem ser nomeadas. Deve ser declarada com parênteses "()", seguido
*de "=>" e depois chaves "{}":
 Ex. 1: var funcao = () =>
        ${instrucao};
*/

var funcao4 = () => {
    console.log('Arrow Function.');
}

funcao4();