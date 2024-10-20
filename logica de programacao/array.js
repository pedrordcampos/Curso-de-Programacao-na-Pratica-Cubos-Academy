const lista = ['Banana', 'Abacaxi', 'Manga', 'Morango']

console.log(lista.includes('Uva'))

const elemento_encontrado = lista.find(function (elemento){
    return elemento === 'Abacaxi'
})

console.log(elemento_encontrado)

// MAP
const nova_lista = lista.map((elemento) => {
    return 'O nome da fruta é: ' + elemento
})

console.log(nova_lista)


// Filter
const filtro_frutas = lista.filter((elemento) => {
    return elemento.length > 5 
})

console.log(filtro_frutas)