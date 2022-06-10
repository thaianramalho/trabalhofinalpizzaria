    const nome = document.getElementById("nome");
    const vnome = nome.value;

    const telefone = document.getElementById("telefone");
    const vtelefone = telefone.value;

    const cep = document.getElementById("cep");
    const vcep = cep.value;

    const rua = document.getElementById("rua");
    const vrua = rua.value;

    const bairro = document.getElementById("bairro");
    const vbairro = bairro.value;

    const cidade = document.getElementById("cidade");
    const vcidade = cidade.value;

    const uf = document.getElementById("uf");
    const vuf = uf.value;

    
    function redireciona(){
        if (vnome != "" && vtelefone != "" && vtelefone != "" && vcep != "" && vrua != "" && vbairro != "" && vcidade != "" && vuf != "")
        { site()
        } else { error()
        }};

    function site(){
        window.location.href="pagamento.html";  
    }
        
    function error(){
        alert("Preencha todos os campos");
    }