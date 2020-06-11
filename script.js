//VARIAVEIS DA FUNCAO
let num = document.querySelector('input#num')
let lista = document.querySelector('select#sel')
let res = document.querySelector('div#final')
let valores = []

//FUNCAO PRA SABER SE E NUMERO VALIDO
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//FUNCAO PARA SABER SE JA TA NA LISTA
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

//FUNCAO ADICIONAR()
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${Number(num.value)} foi adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido.')
    }
}

//FUNCAO FINALIZAR()
function finalizar() {

    valores.sort()

    //TOTAL
    let total = valores.length

    //MAIOR
    let maior = valores[total-1]

    //MENOR
    let menor = valores[0]

    //SOMA
    let soma = 0
    for (let c=0; c<total; c++) {
        soma += valores[c]
    }

    //MEDIA
    let media = soma / total

    res.innerHTML = `<p><strong>Total de números:</strong> ${total}</p>`
    res.innerHTML += `<p><strong>O maior:</strong> ${maior}</p>`
    res.innerHTML += `<p><strong>O menor:</strong> ${menor}</p>`
    res.innerHTML += `<p><strong>Soma:</strong> ${soma}</p>`
    res.innerHTML += `<p><strong>Média:</strong> ${media}</p>`
}