import VendaDAO from "../persistencia/vendaDAO.js";

export default class Venda {
    #qtdItens;
    #dataVenda;
    #valorTotal;
    #cliente;
    #produto;

    constructor(qtdItens = 0, dataVenda = '', valorTotal = 0, cliente = {}, produto = {}) {
        this.#qtdItens = qtdItens;
        this.#dataVenda = dataVenda;
        this.#valorTotal = valorTotal;
        this.#cliente = cliente;
        this.#produto = produto;
    }

    get qtdItens(){
        return this.#qtdItens;
    }
    set qtdItens(novoQtdItens){
        this.#qtdItens= novoQtdItens;
    }

    get dataVenda(){
        return this.#dataVenda;
    }
    set dataVenda(novaDataVenda){
        this.#dataVenda= novaDataVenda;
    }

    get valorTotal(){
        return this.#valorTotal;
    }
    set valorTotal(novoValorTotal){
        this.#valorTotal= novoValorTotal;
    }

    get cliente(){
        return this.#cliente;
    }
    set cliente(novoCliente){
        this.#cliente= novoCliente;
    }

    get produto(){
        return this.#produto;
    }
    set produto(novoProduto){
        this.#produto= novoProduto;
    }

    toJSON(){
        return {
            qtdItens: this.#qtdItens,
            dataVenda: this.#dataVenda,
            valorTotal: this.#valorTotal,
            cliente: this.#cliente.toJSON(),
            produto: this.#produto.toJSON()
        }
    }

    toString(){
        
    }

    async gravar(){
        const venDAO = new VendaDAO();
        await venDAO.gravar(this);
    }

    async atualizar(){
        const venDAO = new VendaDAO();
        await venDAO.atualizar(this);
    }

    async excluir(){
        const venDAO = new VendaDAO();
        await venDAO.excluir(this);
    }

    async consultar(termo){
        const venDAO = new VendaDAO();
        return await venDAO.consultar(termo);
    }
}