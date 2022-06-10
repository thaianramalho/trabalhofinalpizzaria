    var nome = document.getElementById("nome");
    var vnome = nome.value;

    var telefone = document.getElementById("telefone");
    var vtelefone = telefone.value;

    var cep = document.getElementById("cep");
    var vcep = cep.value;

    var rua = document.getElementById("rua");
    var vrua = rua.value;

    var bairro = document.getElementById("bairro");
    var vbairro = bairro.value;

    var cidade = document.getElementById("cidade");
    var vcidade = cidade.value;

    var uf = document.getElementById("uf");
    var vuf = uf.value;

    
    function redireciona(){
        if (vnome != "" && vtelefone != "" && vcep != "" && vrua != "" && vbairro != "" && vcidade != "" && vuf != ""){
            site()
        }
        else{
            error()
        }};

    function site(){
        window.location.href="pagamento.html";  
    }
        
    function error(){
        alert("Preencha todos os campos");
    }