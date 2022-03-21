//funciones normales
function saludar(nombre){
    let saludo = `Hola ${nombre}, ¿cómo estás?`;
    return saludo;
}

let saludo = saludar('José Luis');
document.write(saludo + '<br>');

//funciones declaradas como constantes
const sumar = function(n1, n2){
    let resultado = n1 + n2;
    return resultado;
}

let resultadoSuma = sumar(1,2);
document.write(resultadoSuma + '<br>');

//arrow functions
const restar = (n1, n2)=>{
    let resultado = n1 - n2;
    return resultado;
}

let resultadoResta = restar(4,3);
document.write(resultadoResta + '<br>');

//las funciones flechas (arrow functions) cuando tienen un solo parametro no es necesario poner los parentesis,
//y si solo tienen una instrucción entonces no es necesario poner las llaves.
//ejemplo:
const saludarArrow = nombre => `Hola ${nombre}, buen día.` + "<br>";

document.write(saludarArrow('Luis'));