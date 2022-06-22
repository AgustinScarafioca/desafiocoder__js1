/* Consejero de gastos */ 

alert("Introduzca su salario y hasta tres gastos para saber como proceder")

let presupuesto, gasto, gasto2, gasto3

//Bucle para que el ingreso del usuario sea numerico.
do {
    presupuesto = parseFloat(prompt("Indique su presupuesto"))
    gasto = parseFloat(prompt("Ingrese un gasto"))
    gasto2= parseFloat(prompt("Ingrese un segundo gasto"))
    gasto3= parseFloat(prompt("Ingrese un tercer gasto"))
    gastoTotal= gasto + gasto2 + gasto3
} while (isNaN(presupuesto)|| isNaN(gasto) || isNaN(gasto2) && isNaN(gasto3))


if((presupuesto !=0) && (presupuesto - gastoTotal !=0)){
    plata= presupuesto-gastoTotal
    }


alert("Su dinero disponible es" + " " + plata)

if(plata>10000){
    alert("Tiene mas de 10000 disponible, puede gastar")
} else if((plata>5000) && (plata<10000)){
    alert("Tiene mas de 5000 disponibles, puede gastar pero regule")
} else if ((plata>2000) && (plata<5000)){
    alert("Tiene mas de 2000 pero esta con poco presupuesto, regule")
} else if ((plata>0) && (plata<2000)){
    alert("Tiene poca plata, no puede gastar mas")
}else{
    alert("El dinero ingresado no corresponde, intente de nuevo")
}
