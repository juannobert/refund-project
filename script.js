import Expense from './classes/expense.js'

const input = document.querySelector("#amount")
const nome = document.querySelector("#expense")
const categoria = document.querySelector("#category")
const form = document.querySelector("form")
const lista = document.querySelector('ul')
const qtd = document.querySelector('#qtd')


input.addEventListener("input" ,() => {
    let valor = input.value.replace(/\D/g,"") // tira as letras
    valor = Number(valor) / 100 //Tranforma em centavos
    input.value = formatarValor(valor)    
})

//Formata no padrão BRL
function formatarValor(valor){
    valor = valor.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })
    return valor

}

form.onsubmit = (e) =>{
    e.preventDefault()
    let despesa = new Expense(categoria,input,nome)
    adicionarDespesa(despesa)

}

function adicionarDespesa(despesa){
    const li = document.createElement("li")
    li.classList.add('expense')
    const img = document.createElement("img")
    //Imagem
    img.setAttribute('src', `./img/${despesa['category_id']}.svg`)
   
    //Nomes
    const div = document.createElement("div")
    div.classList.add('expense-info')
    const nome = document.createElement('strong')
    nome.innerHTML = despesa['nome']
    const tipo = document.createElement('span')
    tipo.innerHTML = despesa.categoria_name
    div.append(nome,tipo)
// <span class="expense-amount"><small>R$</small>1.420,57</span>

//<img src="./img/remove.svg" alt="remover" class="remove-icon" />

    //preco
    const span = document.createElement('span')
    span.classList.add('expense-amount')
    const small = document.createElement('small')
    small.innerText = 'R$'
    span.innerHTML = despesa.amount
    span.prepend(small)

    //Excluir
     const imgRemove = document.createElement("img")
    //Imagem
    imgRemove.classList.add('remove-icon')
    imgRemove.setAttribute('src','./img/remove.svg')


    li.append(img,div,span,imgRemove)

    lista.append(li)

    atualizarValores(lista)

}


function atualizarValores(ul){
    const elementos = ul.querySelectorAll('li')
    qtd.innerText = elementos.length
    
    
}