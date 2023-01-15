// Get the button elements
const lightModeButton = document.getElementById("light-mode-button");
const darkModeButton = document.getElementById("dark-mode-button");

// Add event listeners to the buttons
lightModeButton.addEventListener("click", function() {
  document.body.classList.remove("dark-mode");
  document.body.classList.add("light-mode");
});

darkModeButton.addEventListener("click", function() {
  document.body.classList.remove("light-mode");
  document.body.classList.add("dark-mode");
});

lightModeButton.addEventListener("click", function() {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    document.body.addEventListener("transitionend", function(){
      document.body.classList.add("light-mode");
    }, {once: true});
  });
  
  darkModeButton.addEventListener("click", function() {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    document.body.addEventListener("transitionend", function(){
      document.body.classList.add("dark-mode");
    }, {once: true});
  });
  
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
