let num1, num2, num3, num4, num5;
function desafio1() {
    document.getElementById("desafio1").innerHTML=`
    <img src="./assets/img/desafio 1.png" alt="imagen desafio 1">`;
}
function desafio2() {
    do {
        num1=prompt("ingresar valor del primer numero: ");
        num1=parseInt(num1);
        if(num1<=0){
            alert("por favor, ingresar un valor superior a 0");
        }
    } while (num1<=0);
    do {
        num2=prompt("ingresar valor del segundo numero: ");
        num2=parseInt(num2);
        if(num2<=0 || num1===num2){
            alert("por favor, ingresar un valor que sea superior a 0 y diferente al primer numero");
        }
    } while (num1===num2 || num2<=0);
    let suma=num1+num2;
    let resta=num1-num2;
    let division=num1/num2;
    let multiplicacion=num1*num2;
    document.getElementById("desafio2").innerHTML=`
    <p>el resultado de la suma es: ${suma}</p>
    <p>el resultado de la resta es: ${resta}</p>
    <p>el resultado de la division es: ${division}</p>
    <p>el resultado de la multiplicacion es: ${multiplicacion}</p>
    <p>el modulo es: ${num1%num2}</p>`;
}
function desafio3() {
    num1=prompt("ingresar valor de los grados celsius: ");
    num1=parseInt(num1);
    let fahrenheit=num1*(3/9)+32;
    let kelvin=num1+273.15;
    document.getElementById("desafio3").innerHTML=`
    <p>la transformacion a fahrenheit es: ${fahrenheit}</p>
    <p>la transformacion a kelvin es: ${kelvin}</p>`;
}
function desafio4(){
    num1=prompt("por favor, ingrese una canditad de dias: ");
    num1=parseInt(num1);
    let anios, semanas;
    anios=Math.floor(num1/365);
    semanas=Math.floor((num1-(365*anios))/7);
    document.getElementById("desafio4").innerHTML=`
    <p>tienes: ${anios} años</p>
    <p>tienes: ${semanas} semanas</p>
    <p>tienes: ${(num1-(365*anios))%7} dias</p>`;
}
function desafio5() {
    num1=prompt("ingresar valor del primer numero: ");
    num1=parseInt(num1);
    num2=prompt("ingresar valor del segundo numero: ");
    num2=parseInt(num2);
    num3=prompt("ingresar valor del tercer numero: ");
    num3=parseInt(num3);
    num4=prompt("ingresar valor del cuarto numero: ");
    num4=parseInt(num4);
    num5=prompt("ingresar valor del quinto numero: ");
    num5=parseInt(num5);
    let suma2, promedio;
    suma2=num1+num2+num3+num4+num5;
    promedio=suma2/5;
    document.getElementById("desafio5").innerHTML=`
    <p>la suma de todos los valores es: ${suma2}</p>
    <p>el promedio es: ${promedio}</p>`;
}