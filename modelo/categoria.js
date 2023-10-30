export default class Categoria{
    #codigo;
    #descricao;

    constructor(codigo= 0, descricao=''){
        this.#codigo = codigo;
        this.#descricao = descricao;
    }

    get codigo(){
        return this.#codigo;
    }

    set codigo(novoCodigo){
        this.#codigo = novoCodigo;
    }

    get descricao(){
        return this.#descricao;
    }
    set descricao(novaDescricao){
        this.#descricao = novaDescricao;
    }

    //Override do método toJSON
    toJSON(){
        return {
            codigo: this.#codigo,
            descricao: this.#descricao
        }
    }
    //Override do método toString
    toString(){

    }

    //Camada de modelo acessa a camada de persistencia
    //Limite do sistema---------Controle---------Modelo---------Persistência
    async gravar(){

    }

    async excluir(){

    }

    async alterar(){

    
    }

    async consultar(){

    }
}