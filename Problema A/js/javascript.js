const compra = (nombre)=>{
    let dinero = prompt(`¿Cuánto dinero tiene ${nombre}?`);
    if (dinero >= 0.6 && dinero < 1) return (`${nombre}, helado de agua`);
    else if (dinero >= 1 && dinero < 1.6) return (`${nombre}, helado de crema`);
    else if (dinero >= 1.6 && dinero < 1.7) return (`${nombre}, helado de heladix`);
    else if (dinero >= 1.7 && dinero < 1.8) return (`${nombre}, helado de heladovich`);
    else if (dinero >= 1.8 && dinero < 2.9) return (`${nombre}, helado de helardo`);
    else if (dinero >= 2.9) return (`${nombre}, helado de confites o pote de 1/4kg`);
    else return (`${nombre}, no te alcanza para ningún helado`)
}

console.log(compra("Cofia"));
console.log(compra("Pedro"));
console.log(compra("Roberto"));