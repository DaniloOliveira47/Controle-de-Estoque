

const nome = document.getElementById("nome");
const codigoDeBarras = document.getElementById("codigoDeBarras");
const estoque = document.getElementById("estoque");
const valor = document.getElementById("valor");


const produtos = [];


const btnSubmit = document.getElementById("btn");

btnSubmit.addEventListener ('click', function (event) {
const produto = {
    nome: nome.value,
    codigo: codigoDeBarras.value,
    estoque: estoque.value,
    valor: valor.value,
};


produtos.push(produto);
console.log(produtos);
})