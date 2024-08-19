function add(){
    let x = +document.getElementById('firstnumber').value;
    let y = +document.getElementById('secondnumber').value;
    sum(x,y);        
}


function sum(x,y){
    let z = x+y;
    output(z);
}


function output(z){
    document.getElementById('return').innerHTML=`Ihr Ergebnis ist: ${z}`;
}