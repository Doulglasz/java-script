// exercicio 1
    let vip = prompt("Você é um cliente VIP?");
    let compra = Number(prompt("Qual foi o valor da sua compra? R$"));
    let cupom = prompt("Digite um cupom:");
    let parcela = Number(prompt("Você vai parcelar em quantas vezes?"));
    let desconto = 0;
    let juros = 0;
    let total;

    if(vip === "sim" || vip === "Sim" || vip === "SIM"){
        desconto = 20;
    }else{
        console.log("Você não é VIP, portanto não receberá benefícios de VIP.");
    }

    if(vip !== "sim" || vip !== "Sim" || vip !== "SIM" && compra >= 150){
        desconto += 10;
    }

    if(cupom === "PROMO10"){
        desconto += 10;
    }

    total = compra * (desconto / 100);

    if(parcela <= 3){
        console.log("Não há juros.");
    }else{
        juros = total * (2 / 100);
        total += juros;
    }

    console.log("Você ganhou um desconto de: ", desconto + "%");
    console.log("O valor final da sua compra ficou: R$", total);

// exercicio 2

    let entrada = Number(prompt("Digite algo:"));
    let entrada2 = Number(prompt("Digite outra coisa:"));
    let calculoSoma = 0;
    let calculoDiferenca = 0;
    let calculoProduto = 0;
    let calculoDivisao = 0;
    let calculoResto = 0;

    calculoSoma = entrada + entrada2;
    calculoDiferenca = entrada - entrada2;
    calculoProduto = entrada * entrada2;
    if(entrada === 0 || entrada2 === 0){
        console.log("Você digitou uma entrada como 0, e portanto não será dividida")
    }else{
        calculoDivisao = entrada / entrada2;
    }
    calculoResto = entrada % entrada2

    console.log("Soma: ", calculoSoma + " Tipo: " + typeof(calculoSoma));
    console.log("Diferença: ", calculoDiferenca + " Tipo: " + typeof(calculoDiferenca));
    console.log("Produto: ", calculoProduto + " Tipo: " + typeof(calculoProduto));
    console.log("Divisão: ", calculoDivisao + " Tipo: " + typeof(calculoDivisao));
    console.log("Resto: ", calculoResto + " Tipo: " + typeof(calculoResto));

    if(entrada > entrada2){
        console.log("A primeira entrada é maior que a segunda entrada");
    }else if(entrada = entrada2){
        console.log("Ambas entradas são iguais");
    }else{
        console.log("A segunda entradaa é maior que a primeira");
    }

// exercicio 3

    