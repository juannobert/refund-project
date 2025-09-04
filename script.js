import Expense from './classes/expense.js'

const input = document.querySelector("#amount")
const nome = document.querySelector("#expense")
const categoria = document.querySelector("#category")
const form = document.querySelector("form")


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
    console.log("sub")
    let despesa = new Expense(categoria,input)
    console.log(despesa)

}