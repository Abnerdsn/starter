function calcular(n1, n2){
n1 = parseFloat(document.getElementById("n1").value);
n2 = parseFloat(document.getElementById("n2").value);

selector = document.getElementById("selector").value;

switch(selector){
    case '+':
        calculo = (n1 + n2)
        document.getElementById("resultado").innerHTML =`o resultado da soma de ${n1} e ${n2} = ${calculo}`
        break
        
        case '-':
        calculo = (n1 - n2)
        document.getElementById("resultado").innerHTML =`o resultado da subtração de ${n1} e ${n2} = ${calculo}`
        break
        case '*':
        calculo = (n1 * n2)
        document.getElementById("resultado").innerHTML =`o resultado da mutiplicação de ${n1} e ${n2} = ${calculo}`
        break
        case '/':
        calculo = (n1 / n2)
        document.getElementById("resultado").innerHTML =`o resultado da divisão de ${n1} e ${n2} = ${calculo}`
        break
       
}
}