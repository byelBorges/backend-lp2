import express from "express";
import rotaCategoria from "./rotas/rotaCategoria.js";
import rotaProduto from "./rotas/rotaProduto.js";

//Aplicação HTTP pronta, bastando parametrizá-la
const host = "0.0.0.0";
const porta = 4000;
const app = express();

//Preparar a app para entender o formato JSON
app.use(express.json());

app.use('/categoria', rotaCategoria);
app.use('/produto', rotaProduto);

app.listen(porta, host, ()=>{
    console.log(`API do sistema em execução: ${host}:${porta}`);
});