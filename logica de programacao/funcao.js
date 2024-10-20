// Function

function imprimir() {
    console.log('Olá, mundo!')
}

imprimir()

// Arrow Function

const impressao = () => {
    console.log('Exemplo de Arrow Function')
}

// Função com passagem de parâmetro
impressao()


function imprimir_nome(nome) {
    console.log(`Olá, ${nome}!`)
}

imprimir_nome('Pedro')

// Função com retorno

const somar = (num1, num2) => {
    return num1 + num2
}

console.log(somar(3,5)) // Console log na função

result = somar(1, 2) // Armazenando em uma variável
console.log(result)