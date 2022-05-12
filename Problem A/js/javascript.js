const compra = (nombre)=>{
    let dinero = prompt(`¿Cuánto dinero tiene ${nombre}?`);
    if (dinero >= 0.6 && dinero < 1){
        if (nombre == 'Cofla'){
            return (`${nombre}, helado de agua y tu vuelto es ` + (dinero - 0.6));
        } else return (`${nombre}, helado de agua`);
    }
    else if (dinero >= 1 && dinero < 1.6){
        if (nombre == 'Cofla'){
            return (`${nombre}, helado de crema y tu vuelto es ` + (dinero - 1));
        } else return (`${nombre}, helado de crema`);
    } 
    else if (dinero >= 1.6 && dinero < 1.7){
        if (nombre == 'Cofla'){
            return (`${nombre}, helado de heladix y tu vuelto es ` + (dinero - 1.6));
        } else return (`${nombre}, helado de heladix`);
    } 
    else if (dinero >= 1.7 && dinero < 1.8){
        if (nombre == 'Cofla'){
            return (`${nombre}, helado de heladovich y tu vuelto es ` + (dinero - 1.7));
        } else return (`${nombre}, helado de heladovich`);
    }  
    else if (dinero >= 1.8 && dinero < 2.9){
        if (nombre == 'Cofla'){
            return (`${nombre}, helado de helardo y tu vuelto es ` + (dinero - 1.8));
        } else return (`${nombre}, helado de helardo`);
    }  
    else if (dinero >= 2.9){
        if (nombre == 'Cofla'){
            return (`${nombre}, helado de confites o pote de 1/4kg y tu vuelto es ` + (dinero - 2.9));
        } else return (`${nombre}, helado de confites o pote de 1/4kg`);
    }  
    else return (`${nombre}, no te alcanza para ningún helado`)
}

console.log(compra("Cofla"));
console.log(compra("Pedro"));
console.log(compra("Roberto"));