export default class Fornecedor{
    #codigo;
    #cnpj;
    #nome;
    #endereco;
    #email;
    #numero;
    #cep;
    #telefone;

    constructor(codigo= 0, cnpj='', nome='', endereco='', email='', numero= 0, cep='', telefone='') {
        this.#codigo = codigo;
        this.#cnpj = cnpj;
        this.#nome = nome;
        this.#endereco = endereco;
        this.#email = email;
        this.#numero = numero;
        this.#cep = cep;
        this.#telefone = telefone;
    }

    get codigo(){
        return this.#codigo;
    }
    set codigo(novoCodigo){
        this.#codigo= novoCodigo;
    }

    get cnpj() {
        return this.#cnpj;
    }
    set cnpj(novoCNPJ) {
        this.#cnpj = novoCNPJ;
    }

    get nome() {
        return this.#nome;
    }
    set nome(novoNome) {
        this.#nome = novoNome;
    }

    get endereco() {
        return this.#endereco;
    }
    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    get email() {
        return this.#email;
    }
    set email(novoEmail) {
        this.#email = novoEmail;
    }

    get numero() {
        return this.#numero;
    }
    set numero(novoNumero) {
        this.#numero = novoNumero;
    }

    get cep() {
        return this.#cep;
    }
    set cep(novoCEP) {
        this.#cep = novoCEP;
    }

    get telefone() {
        return this.#telefone;
    }
    set telefone(novoTelefone) {
        this.#telefone = novoTelefone;
    }

    toString(){

    }

    toJSON(){

    }

    async gravar(){

    }

    async atualizar(){

    }

    async excluir(){

    }

    async consultar(){

    }
}