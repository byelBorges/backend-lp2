import Produto from './modelo/produto.js';
import Categoria from './modelo/categoria.js';
//Arquivo feito para testes


/*const categoria = new Categoria(1, 'Calçados');
categoria.gravar().then(()=>{
    console.log(categoria.id);
});
*/
const categoria = new Categoria();
categoria.consultar('calçad').then((listaCat)=>{
    console.log(listaCat);
});

const produto = new Produto(1, 'Tenis Allstar', 55.50, 109.90, 'Indeterminada', 10, categoria);

console.log(produto.toJSON());

//Atividade: implementar para a camada de produto(atualizar, inserir, excluir, consultar)etc.