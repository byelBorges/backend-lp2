import Produto from "../modelo/produto.js";
import conectar from "./conexao.js";
import Categoria from "../modelo/categoria.js";
//Data access object
export default class ProdutoDAO {

    async gravar(produto) {
        if (produto instanceof Produto) {
            const sql = "INSERT INTO produto (prod_nome, prod_descricao, prod_precoCusto, prod_PrecoVenda, prod_dataValidade, prod_qtdEstoque, prod_cat_cod) VALUES(?,?,?,?,?,?)";

            //Fazer uma consulta no bd de categoria para pegar o id?


            const parametros = [produto.nome, produto.descricao, produto.precoCusto, produto.precoVenda, produto.dataValidade, produto.qtdEstoque, produto.categoria.codigo];
            const conexao = await conectar();
            const retorno = await conexao.execute(sql, parametros);
            produto.id = retorno[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(produto) {
        if (produto instanceof Produto) {
            const sql = "UPDATE produto SET prod_nome =?, prod_descricao=?, prod_precoCusto=?, prod_PrecoVenda=?, prod_dataValidade=?, prod_qtdEstoque=?, prod_cat_cod=? WHERE prod_codigo= ?";
            const parametros = [produto.nome, produto.descricao, produto.precoCusto, produto.precoVenda, produto.dataValidade, produto.qtdEstoque, produto.categoria.codigo, produto.codigo];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(prod) {
        if (prod instanceof Produto) {
            const sql = "DELETE produto where prod_codigo= ?";
            const parametros = [prod.codigo];
            const con = await conectar();
            await con.execute(sql, parametros);
            global.poolConexoes.releaseConnection(con);
        }
    }

    async consultar(termo) {
        const sql = "";
        const parametros = "";
        let listaProdutos = [];
        const conexao = await conectar();
        if (!termo) {
            termo = "";
        }
        if (Number.isInteger(Number(termo))) {
            //Consultar com id
            sql = `SELECT p.prod_nome, p.prod_codigo, p.prod_descricao, p.prod_precoCusto, p.prod_PrecoVenda, p.prod_dataValidade, p.prod_qtdEstoque, c.cat_codigo, c.cat_descricao 
            FROM produto p INNER JOIN categoria c 
            ON p.cat_codigo = c.cat_codigo 
            WHERE p.prod_codigo= ? 
            ORDER BY p.prod.descricao`;
            parametros = [termo];
            const [registros] = await conexao.execute(sql, parametros);
            for(const registro of registros){
                const categoria = new Categoria(registro.cat_codigo, registro.cat_descricao);
                const produto = new Produto(registro.prod_codigo, registro.prod_nome, registro.prod_descricao, registro.prod_precoCusto, registro.prod_precoVenda, registro.prod_dataValidade, registro.prod_qtdEstoque, categoria);
                listaProdutos.push(produto);
            }
        }
        else {
            sql = `SELECT p.prod_nome, p.prod_codigo, p.prod_descricao, p.prod_precoCusto, p.prod_PrecoVenda, p.prod_dataValidade, p.prod_qtdEstoque, c.cat_codigo, c.cat_descricao 
            FROM produto p INNER JOIN categoria c 
            ON p.cat_codigo = c.cat_codigo 
            WHERE p.prod_descricao  like ? 
            ORDER BY p.prod.descricao`;
            parametros = ['%'+termo+'%'];
            const [registros] = await conexao.execute(sql, parametros);
            for(const registro of registros){
                const categoria = new Categoria(registro.cat_codigo, registro.cat_descricao);
                const produto = new Produto(registro.prod_codigo, registro.prod_nome, registro.prod_descricao, registro.prod_precoCusto, registro.prod_precoVenda, registro.prod_dataValidade, registro.prod_qtdEstoque, categoria);
                listaProdutos.push(produto);
            }
        }
    }
}