import Produto from "../modelo/produto.js";

export default class ProdutoCtrl {
    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === "POST" && requisicao.is("application/json")) {
            const dados = requisicao.body;
            let nome = dados.nome;
            let descricao = dados.descricao;
            let precoCusto = dados.precoCusto;
            let precoVenda = dados.precoVenda;
            let dataValidade = dados.dataValidade;
            let qtdEstoque = dados.qtdEstoque;
            let categoria = dados.categoria;
            if (nome && descricao && precoCusto && precoVenda && dataValidade && qtdEstoque && categoria) {
                const produto = new Produto(0, nome, descricao, precoCusto, precoVenda, dataValidade, qtdEstoque, categoria);
                produto.gravar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "codigoGerado": produto.codigo,
                        "mensagem": "Produto cadastrado com exito!"
                    })
                }).catch((erro) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Houve um erro ao cadastrar um produto: " + erro.message
                    });
                });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Informe todos os atributos de produto para cadastrá-lo!"
                })
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método POST para inserir um produto!"
            })
        }
    }

    atualizar(requisicao, resposta) {
        resposta.type("application/json");
        if ((requisicao.method === "PUT" || requisicao.method === "PATCH") && requisicao.is("application/json")) {
            const dados = requisicao.body;
            let codigo = dados.codigo;
            let nome = dados.nome;
            let descricao = dados.descricao;
            let precoCusto = dados.precoCusto;
            let precoVenda = dados.precoVenda;
            let dataValidade = dados.dataValidade;
            let qtdEstoque = dados.qtdEstoque;
            let categoria = dados.categoria;
            if (codigo && nome && descricao && precoCusto && precoVenda && dataValidade && qtdEstoque && categoria) {
                const produto = new Produto(codigo, nome, descricao, precoCusto, precoVenda, dataValidade, qtdEstoque, categoria);
                produto.atualizar().then(()=>{
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Produto atualizado com exito!"
                    });
                }).catch((erro)=>{
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Não foi possível atualizar o produto: " + erro.message
                    });
                });
            }
            else{
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Informe os atributos de produto corretamente!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize os métodos PUT ou PATCH para atualizar um produto!"
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type("application/json");
        if(requisicao.method === "DELETE" && requisicao.is("application/json")){
            let codigo = requisicao.body.codigo;
            if(codigo){
                const produto = new Produto(codigo);
                produto.excluir().then(()=>{
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Produto excluído com exito!"
                    });
                }).catch((erro)=>{
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao excluir um produto: " + erro.message
                    });
                });
            }
            else{
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe o codigo de um produto para excluí-lo!"
                })
            }
        }
        else{
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método DELETE para excluir um produto!"
            })
        }
    }

    consultar(requisicao, resposta) {
        resposta.type("application/json");
        if(requisicao.method === "GET" && requisicao.is("application/json")){
            let termo = requisicao.params.termo;
            if(!termo){
                termo="";
            }
            const prod = new Produto();
            prod.consultar(termo).then((listaProdutos)=>{
                resposta.status(200).json(listaProdutos);
            })
            .catch((erro)=>{
                resposta.status(500).json({
                    "status": false,
                    "mensagem": "Não foi possivel consultar um produto: " + erro.message
                });
            });
        }
        else{
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método GET para consultar algum produto!"
            })
        }
    }
}