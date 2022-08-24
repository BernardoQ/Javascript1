//bucles for - while - do...while

//if - else if - else
while(true){
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
}

/*while(true){
    let venta = prompt ('Introduzca el monto de venta entre 0 y 100:');
    if(venta > 100 || venta < 0 || isNaN(venta)){
                alert ('¡Error de entrada, vuelva a ingresar!');
        }else{
        if(venta == 100){
                alert ('Recompensa: un viaje para vos y un acompañante');
        break;
        }else if(venta>=80 && venta<=90){
                alert ('Recompensa: un iPhone');
        break;
        }else if(venta >=60 && venta<80){
                alert ('Tus ventas son muy bajas, sigue esforzandote');
        break;
        }else{
                alert ('Los resultados son muy malos');
        break;
        }
    }
}*/


