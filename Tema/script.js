// exercicio 1
    let vip = prompt("Você é um cliente VIP?");
    let compra = Number(prompt("Qual foi o valor da sua compra? R$"));
    let cupom = prompt("Digite um cupom:");
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

    if(cupom === "PROMO10"){
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
    let numero = Number(prompt("Digite um número inteiro:"));
    let primo = true;

    if(!Number.isInteger(numero)){
        console.log("O número digitado não é um inteiro válido.");
    }else{
        if(numero > 0){
            console.log("O número é positivo.");
        }else if(numero < 0){
            console.log("O número é negativo.");
        }else{
            console.log("O número é zero.");
        }

        let parOuImpar = Math.abs(numero) % 2 === 0 ? "par" : "ímpar";

        console.log("O número é " + parOuImpar + ".");

        if(numero <= 1){
            primo = false;
        }else if(numero === 2){
            primo = true;
        }else if(numero % 2 === 0){
            primo = false;
        }else{

            for(let divisor = 3; divisor <= Math.sqrt(numero); divisor += 2){
                if(numero % divisor === 0){
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
