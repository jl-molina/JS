let productId = 10000;

function showProductId() {
    let productId = 20000;

    function fix() {
        let productId =  30000;
        console.log('in fix:', productId);
    }
    console.log('in product id:', productId);
    fix();
}

console.log('global:', productId);
showProductId();