export default  class Expense {
    constructor(categoria,preco,nome){
        this.id = new Date().getDate(),
        this.nome = nome.value
        this.category_id = categoria.value
        this.categoria_name = categoria.options[categoria.selectedIndex].text,
        this.amount = preco.value
        this.created_at = new Date()
    }
}
