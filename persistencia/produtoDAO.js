import Produto from "../modelo/produto.js";
import conectar from "./conexao.js";
export default class ProdutoDAO{

    async gravar(produto){
        if(produto instanceof Produto){
            const sql = "";
            const parametros = [];
            const conexao = await conectar();
            const retorno = await conexao.execute(sql, parametros);
            produto.id = retorno[0].insertId;
            globalThis.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(produto){
        if(produto instanceof Produto){
            const sql = "";
            const parametros = [];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            globalThis.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(prod){
        if(prod instanceof Produto){
            const sql= "";
            const parametros= [];
            const con = await conectar();
            await con.execute(sql, parametros);
            globalThis.poolConexoes.releaseConnection(con);
        }
    }

    async consultar(parametroConsulta){
        const sql="";
        const parametros="";
        if(Number.isInteger(parametroConsulta)){
            //Consultar com id

        }
        else{
            //Consultar pelo nome?
            
        }
    }
}