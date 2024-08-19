
let discount = 50;
let price = 500;

((price - discount) * 1.19)


calcprice(discount, price);
(logcalcprice(discount, 300));

function calcprice(discount , price) {                          // das script wird erst einmal gelesen und dann ausgeführt. Daher können functions
    ("über Funktion  "+ (price - discount) * 1.19)     // auch vor ihrer definition ausgeführt werden
}

function logcalcprice(discount, price){
    let value = (price - discount - discount)*1.19;

    return value + "  über return"; // nach "return" ist die Funktion beendet. Danach wird jeglicher Code innerhalb der Funktion nicht ausgeführt
}

