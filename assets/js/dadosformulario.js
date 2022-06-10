const nome = document.getElementById("nome");

const telefone = document.querySelector("#telefone");

const cep = document.querySelector("#cep");

const rua = document.querySelector("#rua");

const bairro = document.querySelector("#bairro");

const cidade = document.querySelector("#cidade");

const uf = document.querySelector("#uf");

console.log(nome.value, telefone.value, cep.value, rua.value, bairro.value, cidade.value, uf.value);

function enviar(){
    if ((nome.value != '')&&(telefone.value != '')&&(cep.value != '')){
    console.log(nome.value, telefone.value, cep.value, rua.value, bairro.value, cidade.value, uf.value);
}
else{
    alert('Preencha todos os campos!')
}};