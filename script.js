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

    pessoa.idades = 23;

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








////////////////////////
// EXERCICIOS PRATICOS
////////////////////////








// exercicio 1
    let vip = prompt("Você é um cliente VIP?");
    let compra = Number(prompt("Qual foi o valor da sua compra? R$"));
    let cupon = prompt("Digite um cupom:");
    let parcela = Number(prompt("Você vai parcelar em quantas vezes?"));
    let desconto = 0;
    let juros = 0;
    let total;
    let valorParcela;

    if(vip === "sim" || vip === "Sim" || vip === "SIM"){
        desconto = 20;
    }else if(compra > 150){
        desconto = 10;
    }else{
        console.log("Você não receberá desconto de cliente VIP.");
    }

    if(cupon === "PROMO10"){
        desconto += 10;
    }

    total = compra - (compra * (desconto / 100));

    if(parcela <= 3){
        console.log("Não há juros.");
    }else{
        juros = total * (2 / 100);
        total += juros;
    }

    valorParcela = total / parcela;

    let mensagemParcela = parcela <= 3 ? "Parcelamento sem juros." : "Parcelamento com juros.";

    console.log(mensagemParcela);
    console.log("Você ganhou um desconto de: " + desconto + "%");
    console.log("O valor dos juros foi: R$" + juros.toFixed(2));
    console.log("O valor final da sua compra ficou: R$" + total.toFixed(2));
    console.log("Quantidade de parcelas: " + parcela);
    console.log("Valor de cada parcela: R$" + valorParcela.toFixed(2));


// exercicio 2
    let entrada = Number(prompt("Digite algo:"));
    let entrada2 = Number(prompt("Digite outra coisa:"));
    let calculoSoma = 0;
    let calculoDiferenca = 0;
    let calculoProduto = 0;
    let calculoDivisao = 0;
    let calculoResto = 0;

    if(Number.isNaN(entrada) || Number.isNaN(entrada2)){
        console.log("Uma das entradas não é um número válido.");
    }else{
        calculoSoma = entrada + entrada2;
        calculoDiferenca = entrada - entrada2;
        calculoProduto = entrada * entrada2;

        if(entrada2 === 0){
            calculoDivisao = "Não é possível dividir por zero";
            calculoResto = "Não é possível calcular";
        }else{
            calculoDivisao = entrada / entrada2;
            calculoResto = entrada % entrada2;
        }

        console.log("Soma: " + calculoSoma + " Tipo: " + typeof(calculoSoma));
        console.log("Diferença: " + calculoDiferenca + " Tipo: " + typeof(calculoDiferenca));
        console.log("Produto: " + calculoProduto + " Tipo: " + typeof(calculoProduto));
        console.log("Divisão: " + calculoDivisao + " Tipo: " + typeof(calculoDivisao));
        console.log("Resto: " + calculoResto + " Tipo: " + typeof(calculoResto));

        if(entrada > entrada2){
            console.log("A primeira entrada é maior que a segunda entrada.");
        }else if(entrada === entrada2){
            console.log("Ambas as entradas são iguais.");
        }else{
            console.log("A segunda entrada é maior que a primeira entrada.");
        }
    }


// exercicio 3
    let numero1 = Number(prompt("Digite um número inteiro:"));
    let primo = true;

    if(!Number.isInteger(numero1)){
        console.log("O número digitado não é um inteiro válido.");
    }else{
        if(numero1 > 0){
            console.log("O número é positivo.");
        }else if(numero1 < 0){
            console.log("O número é negativo.");
        }else{
            console.log("O número é zero.");
        }

        let parOuImpar = Math.abs(numero1) % 2 === 0 ? "par" : "ímpar";

        console.log("O número é " + parOuImpar + ".");

        if(numero1 <= 1){
            primo = false;
        }else if(numero1 === 2){
            primo = true;
        }else if(numero1 % 2 === 0){
            primo = false;
        }else{

            for(let divisor = 3; divisor <= Math.sqrt(numero1); divisor += 2){
                if(numero1 % divisor === 0){
                    primo = false;
                    break;
                }
            }
        }

        if(primo === true){
            console.log("O número é primo.");
        }else{
            console.log("O número não é primo.");
        }
    }


// exercicio 4
    let nota1 = Number(prompt("Digite a primeira nota:"));
    let nota2 = Number(prompt("Digite a segunda nota:"));
    let nota3 = Number(prompt("Digite a terceira nota:"));
    let peso1 = 2;
    let peso2 = 3;
    let peso3 = 5;
    let media;

    if(Number.isNaN(nota1) || Number.isNaN(nota2) || Number.isNaN(nota3)){
        console.log("Uma das notas digitadas é inválida.");
    }else{
        media = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);
        console.log("A média ponderada foi: " + media.toFixed(2));

        if(media >= 7){
            console.log("Aluno aprovado.");
        }else if(media >= 5){
            console.log("Aluno em recuperação.");
            let exame = Number(prompt("Digite a nota do exame:"));

            if(Number.isNaN(exame)){
                console.log("A nota do exame é inválida.");
            }else{
                let novaMedia = (media + exame) / 2;

                console.log("A nova média foi: " + novaMedia.toFixed(2));

                if(novaMedia >= 6){
                    console.log("Aluno aprovado após a recuperação.");
                }else{
                    console.log("Aluno reprovado após a recuperação.");
                }
            }
        }else{
            console.log("Aluno reprovado.");
        }
    }


// exercicio 5
    let precoBase = Number(prompt("Digite o preço do produto: R$"));
    let clienteVip = prompt("O cliente é VIP?");
    let cupomProduto = prompt("Digite o cupom:");
    let parcelasProduto = Number(prompt("Digite a quantidade de parcelas:"));
    let descontoProduto = 0;
    let imposto = 0;
    let jurosProduto = 0;
    let totalProduto = precoBase;

    if(clienteVip === "sim" || clienteVip === "Sim" || clienteVip === "SIM"){

        descontoProduto = totalProduto * (20 / 100);
        totalProduto -= descontoProduto;

    }else if(precoBase > 150){

        descontoProduto = totalProduto * (10 / 100);
        totalProduto -= descontoProduto;
    }

    if(cupomProduto === "PROMO10"){
        let descontoCupom = totalProduto * (10 / 100);

        descontoProduto += descontoCupom;
        totalProduto -= descontoCupom;
    }

    imposto = totalProduto * (12 / 100);

    totalProduto += imposto;

    if(parcelasProduto > 3){

        jurosProduto = totalProduto * (2 / 100);
        totalProduto += jurosProduto;

    }

    let valorParcelaProduto = totalProduto / parcelasProduto;

    console.log("Desconto total: R$" + descontoProduto.toFixed(2));
    console.log("Imposto de 12%: R$" + imposto.toFixed(2));
    console.log("Juros: R$" + jurosProduto.toFixed(2));
    console.log("Preço final: R$" + totalProduto.toFixed(2));
    console.log("Quantidade de parcelas: " + parcelasProduto);
    console.log("Valor de cada parcela: R$" + valorParcelaProduto.toFixed(2));
    console.log("Tipo do resultado final: " + typeof(totalProduto));
