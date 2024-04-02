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

    res = Math.pow(num1, num2);
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

}

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
}