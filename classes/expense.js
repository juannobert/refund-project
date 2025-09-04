export default  class Expense {
    constructor(categoria,preco){
        this.id = new Date().getDate(),
        this.category_id = categoria.value
        this.categoria_name = categoria.options[categoria.selectedIndex].text,
        this.amount = preco.value
        this.created_at = new Date()
    }
}
