const input = document.querySelector("#amount")



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