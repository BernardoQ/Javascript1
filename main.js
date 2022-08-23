const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

let operacion = prompt("¿Que operacion desea realizar? \n 1: suma, 2: resta, 3: division, 4: multiplicacion");

if(operacion == 1 || operacion == "suma") {
    let numero1 = prompt("ingrese el primer numero a operar");
    let numero2 = prompt("ingrese el segundo numero a operar");
    resultado = sumar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}

else if(operacion == 2 || operacion == "resta") {
    let numero1 = prompt("ingrese el primer numero a operar");
    let numero2 = prompt("ingrese el segundo numero a operar");
    resultado = restar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}

else if(operacion == 3 || operacion == "division") {
    let numero1 = prompt("ingrese el primer numero a operar");
    let numero2 = prompt("ingrese el segundo numero a operar");
    resultado = dividir(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}

else if(operacion == 4 || operacion == "multiplicacion") {
    let numero1 = prompt("ingrese el primer numero a operar");
    let numero2 = prompt("ingrese el segundo numero a operar");
    resultado = multiplicar(numero1, numero2);
    alert(`El resultado es ${resultado}`);
}

else{
    alert("Seleccione un parametro correcto");
}



