const input = document.querySelector("#amount")
input.addEventListener("input" ,() => {
    let value = input.value.replace(/\D/g,"") // tira as letras
    input.value = value

    
})