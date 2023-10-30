import Produto from './modelo/produto.js';
import Categoria from './modelo/categoria.js';

const categoria = new Categoria(1, 'Calçados');
const produto = new Produto(1, 'Tenis Allstar', 55.50, 109.90, 'Indeterminada', 10, categoria);

console.log(produto.toJSON());