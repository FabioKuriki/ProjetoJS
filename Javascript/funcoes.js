function somar(){
    var num1;//Declarando uma variável
    var num2;
    var res;
    //Coletando os dados do campo
    num1 = parseInt(document.getElementById("tpNum").value);//document se refere ao arquivo html esta conectada
    num2 = parseInt(document.getElementById("tsNum").value);//value pega o valor
    //Realizando o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + res;//innerHTML insere o valor
}//Fim do método

function subtrair(){
    var num1;//Declarando uma variável
    var num2;
    var res;
    //Coletando os dados do campo
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos números é: " + res;//innerHTML insere o valor
}//Fim do método

function multiplicar(){
    var num1;//Declarando uma variável
    var num2;
    var res;
    //Coletando os dados do campo
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos números é: " + res;//innerHTML insere o valor
}//Fim do método

function dividir(){
    var num1;//Declarando uma variável
    var num2;
    var res;
    //Coletando os dados do campo
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //Realizando o cálculo
    if(num2 <= 0){
        res = "impossível dividir por números menores ou iguais a zero!";
    }
    else{
        res = num1 / num2;
    }
    document.getElementById("resultado").innerHTML = "A divisão dos números é: " + res;//innerHTML insere o valor
}//Fim do método

function tabuada(){
    var num1;
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

    for(i = 0; i < 11; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i);
    }

    document.getElementById("resultado").innerHTML = "\n" + resNum1 + "\n\n" + resNum2;
}//Fim do método


//Faça uma função para calcular a potência
function potencia(){
    var num1;
    var num2;
    var res;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    res = num1 + " elevado a " + num2 + " é: " + Math.pow(num1, num2);
    document.getElementById("resultado").innerHTML = res;
}//Fim do método

//Faça uma função para calcular a raiz de dois números

function raiz(){
    var num1;
    var num2;
    var res;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    res = "Raiz de " + num1 + ": " + Math.sqrt(num1) + "\nRaiz de " + num2 + ": " + Math.sqrt(num2);
    document.getElementById("resultado").innerHTML = res;
}//Fim do método

//Faça uma função para calcular a fórmula de bhaskara
function bhaskara(){
    var num1;
    var num2;
    var num3;
    var res;
    var res2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    num3 = parseInt(document.getElementById("ttNum").value);
    
    delta = Math.pow(num2, 2) - (4 * num1 * num3)

    if(delta < 0){
        document.getElementById("resultado").innerHTML = "Delta = " + delta + "\nEquação não terá raízes reais";
    }
    else{
        res = ((num2 * -1) + Math.sqrt(delta)) / (2 * num1);
        res2 = ((num2 * -1) - Math.sqrt(delta)) / (2 * num1);
        document.getElementById("resultado").innerHTML = "x1 = " + res + "\nx2 = " + res2;
    }
    
}//Fim do método

//Faça um programa que peça ao usuário um número e imprima se é par ou ímpar.
function parImpar(){
    var num1;
    var num2;
    var num3;
    var res;
    var res2;
    var res3;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    num3 = parseInt(document.getElementById("ttNum").value);

    if(num1 % 2 == 0){
        res = "Par";
    }
    else{
        res = "Ímpar";
    }

    if(num2 % 2 == 0){
        res2 = "Par";
    }
    else{
        res2 = "Ímpar";
    }

    if(num3 % 2 == 0){
        res3 = "Par";
    }
    else{
        res3 = "Ímpar";
    }

    document.getElementById("resultado").innerHTML = "\n" + num1 + " = " + res +
                                                 "\n" + num2 + " = " + res2 +
                                                 "\n" + num3 + " = " + res3;

}//Fim do método

//Faça um programa que peça ao usuário um número e imprima se é positivo, negativo ou zero.
function estadoNum(){
    var num1;
    var num2;
    var num3;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    num3 = parseInt(document.getElementById("ttNum").value);

    verificar(num1)
    document.getElementById("resultado").innerHTML = "\n" + num1 + " = " + verificar(num1) +
                                                 "\n" + num2 + " = " + verificar(num2) +
                                                 "\n" + num3 + " = " + verificar(num3);
}

function verificar(num){
    if(num > 0){
        return "Positivo"
    }
    else if(num < 0){
        return "Negativo"
    }
    else{
        return "Zero"
    }
}//Fim do método

//Faça um programa que imprima os números de 1 a 10
function exercicio1(){
    var num = [];

    for(i = 0; i < 10; i++){
        num[i] = i + 1;
    }
    
    document.getElementById("resultado").innerHTML = num;
}//Fim do método

//Faça um programa que imprima os números pares de 1 a 20
function exercicio2(){
    var num = [];
    var posicao = 1;

    for(i = 1; i < 21; i++){
        if(i % 2 == 0){
            num[posicao] = i;
            posicao += 1;
        }
    }

    document.getElementById("resultado").innerHTML = num;
}//Fim do método

//Faça um programa que calcule a soma dos números de 1 a 100
function exercicio3(){
    var num = 0;

    for(i = 1; i < 101; i++){
        num += i
    }

    document.getElementById("resultado").innerHTML = num;
}//Fim do método

//Faça um programa que imprima os múltiplos de 5 de 1 a 50(múltiplos são números que podem ser divisiveis por 5 por exemplo )
function exercicio4(){
    var lista = [];
    var posicao = 0;

    for(i = 1; i < 51; i++){
        if(i % 5 == 0){
            lista[posicao] = i;
            posicao += 1;
        }
    }

    document.getElementById("resultado").innerHTML = lista;
}//Fim do método

//Faça um programa que peça ao usuário um número e imprima os números de 1 até esse número
function exercicio5(){
    var num;
    var res;

    num = parseInt(document.getElementById("tpNum").value);



    for(i = 1; i < num + 1; i++){
        if(i == 1){
            res = i;
        }
        else{
            res = res + ", " + i
        }
    }

    if(num < 1){
        res = "Informe um número maior que 1"
        document.getElementById("resultado").innerHTML = res
    }
    else{
        document.getElementById("resultado").innerHTML = res;
    }
    
}//Fim do método

//Faça um programa que peça ao usuário um número e imprima a soma dos números de 1 até esse número
function exercicio6(){
    var num;
    var res = 0;

    num = parseInt(document.getElementById("tpNum").value);

    for(i = 1; i < num + 1; i++){
        res += i;
    }

    document.getElementById("resultado").innerHTML = res;
}//Fim do método


//Faça um programa que imprima os números primos de 1 a 20(número primo > 1 e apenas divisivel por 1 e ele mesmo)
function exercicio7(){
    var primo;

    for(i = 1; i < 21; i++){
        if(i == 2){
            primo = i;
        }
        else if(i == 2 || i == 3 || i == 5 || i == 7){
            primo = primo + ", " + i;
        }
        else if(i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0){
            continue
        }
        else{
            primo = primo + ", " + i;
        }
    }

    document.getElementById("resultado").innerHTML = primo;
}//Fim do método

//Faça um programa que peça ao usuário um número e verifique se é primo
//Dificil
function exercicio8(){
    var num;
    var primo;

    num = parseInt(document.getElementById("tpNum").value)

    if(num < 2){
        primo = "Não é primo";
    }
    else if(num == 2 || num == 3 || num == 5 || num == 7){
        primo = "Primo"
    }
    else if(num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
        primo = "Não é primo";
    }
    else{
        primo = "Primo"
    }

    document.getElementById("resultado").innerHTML = primo;

}//Fim do método

//Faça um programa que calcule o fatorial de um número
//Dificil
function exercicio9(){
    var num;
    var res;

    res = num = parseInt(document.getElementById("tpNum").value)

    while(num > 1){//Quando chega em 1, o código é executado mais uma vez e fecha
        num = num - 1
        res = res * (num)
    }

    document.getElementById("resultado").innerHTML = res;
}//Fim do método

//Faça um progrma que imprima a sequência de Fibonacci até o décimo termo
//(1, 1, 2, 3, 5, 8, 13, 21, 34, 55)
function exercicio10(){
    var fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;

    for(i = 2; i < 10; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }

    document.getElementById("resultado").innerHTML = fibonacci;

}//Fim do método

//Faça um programa que peça ao usuário um número e imprima os números pares e ímpares de 1 até esse número
function exercicio11(){
    var num;
    var numPar = [];
    var numImpar = [];
    var posicaoPar = 0;
    var posicaoImpar = 0;

    num = parseInt(document.getElementById("tpNum").value)

   
    for(i = 1; i < num + 1; i++){
        if(i == 1){
            numImpar[0] = i;
            posicaoImpar = 1;
        }
        else if(i % 2 == 0){
            numPar[posicaoPar] = i;
            posicaoPar += 1;
        }
        else{
            numImpar[posicaoImpar] = i;
            posicaoImpar += 1;
        }
    }

    if(num < 1){
        res = "Informe um número maior que 1"
        document.getElementById("resultado").innerHTML = res
    }
    else{
        document.getElementById("resultado").innerHTML = "Número Pares: \n" + numPar + "\nNúmero Ímpares: \n" + numImpar;
    }

    
}//Fim do método

//Faça um programa que peça ao usuário um número e imprima os números primos de 1 até esse número
function exercicio12(){
    var num;
    var primo = [];
    var posicao = 0;

    num = parseInt(document.getElementById("tpNum").value)

    for(i = 1; i < num + 1; i++){
        
        if(i == 2 || i == 3 || i == 5 || i == 7){
            primo[posicao] = i;
        }
        else if(num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
            continue
        }
        else{
            primo[posicao] = i;
        }
        posicao++
    }

    if(num < 2){
        document.getElementById("resultado").innerHTML = "Informe um número maior que 1";
    }
    else{
        document.getElementById("resultado").innerHTML = primo;
    }
    
}//Fim do método

//Faça um programa que peça ao usuário um número e imprima se é um número perfeito (a soma de seus divisores, excluindo ele mesmo, é igual ao próprio número)
function exercicio13(){
    var num;
    var divisores = 0;

    num = parseInt(document.getElementById("tpNum").value)

    for(i = 0; i < num; i++){
        if(num % i == 0){
            divisores += i;
        }
    }

    if(divisores == num){
        document.getElementById("resultado").innerHTML = "Número Perfeito"
    }
    else{
        document.getElementById("resultado").innerHTML = "Não é um número perfeito"
    }
    
}//Fim do método


//Para melhor visualização
function questao1(){
    alert("Faça um programa que imprima os números de 1 a 10")
}//Fim do método

function questao2(){
    alert("Faça um programa que imprima os números pares de 1 a 20")
}//Fim do método

function questao3(){
    alert("Faça um programa que calcule a soma dos números de 1 a 100")
}//Fim do método

function questao4(){
    alert("Faça um programa que imprima os múltiplos de 5 de 1 a 50")
}//Fim do método

function questao5(){
    alert("Faça um programa que peça ao usuário um número e imprima os números de 1 até esse número")
}//Fim do método

function questao6(){
    alert("Faça um programa que peça ao usuário um número e imprima a soma dos números de 1 até esse número")
}//Fim do método

function questao7(){
    alert("Faça um programa que imprima os números primos de 1 a 20")
}//Fim do método

function questao8(){
    alert("Faça um programa que peça ao usuário um número e verifique se é primo")
}//Fim do método

function questao9(){
    alert("Faça um programa que calcule o fatorial de um número")
}//Fim do método

function questao10(){
    alert("Faça um progrma que imprima a sequência de Fibonacci até o décimo termo")
}//Fim do método

function questao11(){
    alert("Faça um programa que peça ao usuário um número e imprima os números pares e ímpares de 1 até esse número")
}//Fim do método

function questao12(){
    alert("Faça um programa que peça ao usuário um número e imprima os números primos de 1 até esse número")
}//Fim do método

function questao13(){
    alert("Faça um programa que peça ao usuário um número e imprima se é um número perfeito (a soma de seus divisores, excluindo ele mesmo, é igual ao próprio número)")
}//Fim do método
