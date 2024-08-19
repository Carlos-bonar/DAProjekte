let numbers = [10, 20, 30, 40];
let letters = ['a', 'b', 'c', 'd'];

function test1(){
    let numo10 = numbers.shift(); 
    for (i=0; i<numbers.length; i++) {

    console.log(numbers);
    }

}

function delletters() {
    let letohne = letters.shift();

    console.log(letters);

}
let range = []

function modulotest() {
    let primi = document.getElementById('inputin').value
   calco(primi);
}

function calco(primi){
    for (let i = 2; i < primi; i++) {
        result = primi%i;
            if(i==(primi-1) && result!=0){
                console.log("fucking ja");
                return 0;
            }
            
            else{
                if(result!=0){
                    console.log("calculating....")

                }
                else{
                console.log("fucking nein.")
            return 0;
            }
    }
}
}
