

function fullname(nombre, surname){
   return nombre + surname;
}
console.log(fullname('Carlos', ' Becker'));


function capitalizeLetters(x){
    let text = x;
let result = text.toUpperCase();

return  result

}

console.log(capitalizeLetters("bAnanE"));


function countCharacters(y){
    
    let length = y.length;
    return length;
}

console.log(countCharacters("banane"));

function test(){
let text = "5";
text = text.padEnd(4,"0");
return text;
}

console.log(test());


function formatToCurrency(z){

    let n = z.toFixed(2);
    let t = n.toString();
    let result = t.replace(".", ",");
    return result;
    

}
console.log(formatToCurrency(0.5));


