const nome = document.getElementById("nome");
var nomev = nome.value;
const telefone = document.getElementById("telefone");
var telefonev = telefone.value;
const cep = document.getElementById("cep");
var cepv = cep.value;
const rua = document.getElementById("rua");
var ruav = rua.value;
const bairro = document.getElementById("bairro");
var bairrov = bairro.value;
const cidade = document.getElementById("cidade");
var cidadev = cidade.value;
const uf = document.getElementById("uf");
var ufv = uf.value;

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