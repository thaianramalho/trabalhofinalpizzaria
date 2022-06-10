const nome = document.getElementById("nome");

const telefone = document.querySelector("#telefone");

const cep = document.querySelector("#cep");

const rua = document.querySelector("#rua");

const bairro = document.querySelector("#bairro");

const cidade = document.querySelector("#cidade");

const uf = document.querySelector("#uf");

function enviar(){
    if ((nome.value != '')&&(telefone.value != '')&&(cep.value != '')){
    window.open('pagamento.html', '_self');
    // console.log(nome.value, telefone.value, cep.value, rua.value, bairro.value, cidade.value, uf.value);
}
else{
    alert('preencha todos os campos')
}};
