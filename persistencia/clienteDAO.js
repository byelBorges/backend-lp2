import Cliente from "../modelo/cliente.js"
import conectar from "./conexao";
export default class ClienteDAO{
    async gravar(cliente){
        if(cliente instanceof Cliente){
            const sql = "";
            const parametros = [];
            const conexao = await conectar();
            const retorno = await conexao.execute(sql, parametros);
            cliente.id = retorno[0].insertId;
            globalThis.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(cliente){
        if(cliente instanceof Cliente){
            const sql = "";
            const parametros = [];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            globalThis.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(cliente){
        if(cliente instanceof Cliente){
            const sql = "";
            const parametros = [];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            globalThis.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(parametroConsulta){
        let sql= '';
        let parametros = [];
        //Poderia utilizar esse if  no lugar no isNaN
        if(Number.isInteger(parametroConsulta)){
            sql = '';//Pesquisa por id
            parametros = [parametroConsulta];
        }
        else{
            //Consultar por nome?
            if(!parametroConsulta){
                parametroConsulta='';
            }
            else{
                sql = '';
                parametros = ['%' + parametroConsulta + '%'];
            }
        }
        const conexao = await conectar();
        const [registros] = await conexao.execute(sql, parametros);
        let listaClientes = [];
        for(const registro of registros){
            const cliente = new Cliente();//...
            listaClientes.push(cliente);
        }
        return listaClientes;
    }
}