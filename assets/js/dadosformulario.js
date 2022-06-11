const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");

document.getElementById("nome1") == nomev;
document.getElementById("telefone1") == telefonev;
document.getElementById("cep1") == cepv;
document.getElementById("rua1") == ruav;
document.getElementById("bairro1") == bairrov;
document.getElementById("cidade1") == cidadev;
document.getElementById("uf1") == ufv;


console.log(nome.value, telefone.value, cep.value, rua.value, bairro.value, cidade.value, uf.value);

function enviar(){
    if ((nome.value != '')&&(telefone.value != '')&&(cep.value != '')){
    console.log(nome.value, telefone.value, cep.value, rua.value, bairro.value, cidade.value, uf.value);
}
else{
    alert('Preencha todos os campos!')
}};