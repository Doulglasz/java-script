// exercicio 1
    var cidade = "São Paulo";
    var cidade = "Rio de Janeiro";
    console.log(cidade);

// exercicio 2
    let pais = "Brasil";
    //let pais = "Paris";

// exercicio 3
    const PI = 3.14;
    //PI = 4;

// exercicio 4
    const animais = ["cachorro", "gato"];
    animais.push("porco");
    console.log(animais);

// exercicio 5
    let idade = 20;
    let carteira = false;

    if(idade >= 18 && carteira){
        console.log("Pode dirigir");
    }else{
        console.log("Não pode dirigir");
    }

// exercicio 6
    let feriado = false;
    let fimDeSemana = true;

    if(feriado || fimDeSemana){
        console.log("Dia de descanso");
    }else{
        console.log("Dia de trabalho");
    }

// exercicio 7
    let chuva = false;

    if(!chuva){
        console.log("Podemos ir para a praia");
    }else{
        console.log("Ficaremos em casa");
    }


// exercicio 8
    let usuario = "João";
    let senha = "abcd";

    if(usuario === "João" && senha === "abcd"){
        console.log("Acesso permitido");
    }else{
        console.log("Acesso negado");
    }


// exercicio 9
    let idadeAnos = 16;

    if(idadeAnos >= 18){
        console.log("Maior de idade");
    }else{
        console.log("Menor de idade");
    }


// exercicio 10
    const frutas = ["maçã", "banana"];

    frutas.push("laranja");
    frutas.push("uva");

    console.log(frutas);


// exercicio 11
    function testarVar(){
        if(true){
            var mensagem = "Variável criada dentro do if";
            console.log(mensagem);
        }
        console.log(mensagem);
    }

    testarVar();


// exercicio 12
    let numero = 10;

    console.log("Número fora do if:", numero);

    if(true){
        let numero = 20;
        console.log("Número dentro do if:", numero);
    }

    console.log("Número fora do if novamente:", numero);


// exercicio 13
    const pessoa = {
        nome: "Ana",
        idades: 22
    };

    pessoa.idadeAnos = 23;

    console.log(pessoa);


// exercicio 14
    let logado = true;
    let isAdmin = false;

    if(logado && isAdmin){
        console.log("Bem-vindo, administrador!");
    }else{
        console.log("Acesso restrito.");
    }


// exercicio 15
    let promocao = false;
    let cupom = true;

    if(promocao || cupom){
        console.log("Desconto aplicado!");
    }else{
        console.log("Preço normal.");
    }


// exercicio 16
    let carrinhoVazio = true;

    if(!carrinhoVazio){
        console.log("Você tem itens no carrinho!");
    }else{
        console.log("Carrinho vazio, adicione produtos.");
    }


// exercicio 17
    let user = "Carlos";
    let palavraChave = "1234";
    let block = false;

    if(user === "Carlos" && palavraChave === "1234" && !block){
        console.log("Login autorizado!");
    }else{
        console.log("Login negado.");
    }


// exercicio 18
    const fruta = ["maçã", "banana"];

    fruta.push("uva");
    fruta.push("laranja");

    console.log(fruta);


// exercicio 19
    let idade1 = 18;

    console.log("Idade fora do if:", idade1);

    if(true){
        let idade1 = 25;
        console.log("Idade dentro do if:", idade1);
    }

    console.log("Idade fora do if novamente:", idade1);


// exercicio 20
    let usuario1 = "Maria";
    let senha1 = "abcd";
    let bloqueado = true;

    if(((usuario1 === "Maria" && senha1 === "abcd") || usuario1 === "admin") && !bloqueado){
        console.log("Acesso liberado");
    }else{
        console.log("Acesso negado");
    }