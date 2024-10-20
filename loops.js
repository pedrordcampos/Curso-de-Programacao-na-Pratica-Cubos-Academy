const lista_pessoas = ['João', 'Maria', 'Pedro']

for (let i = 0; i < lista_pessoas.length; i ++) {
    console.log(lista_pessoas[i])
}

// Para acessar diretamente um índice
console.log(lista_pessoas[0]);

/**
 * For of
 */

for (let pessoa of lista_pessoas) {
    console.log(pessoa)
}