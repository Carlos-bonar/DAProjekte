
let myList = [12, "Banana", true];
let names =["Anna", "Ben", "Clara"];
let numbers = [10, 20, 30, 40];
function initArrays() {
    
    //findElementIndex(numbers, 20);
    //findElementIndex(numbers, 50);

    //let refList = document.getElementsByClassName('red_box');
    //for (let index = 0; index < refList.length; index++) {
    //    const singleRef = refList[index];
    //    singleRef.innerText = index;
    //    singleRef.classList.toggle('green_fill')
    //}
    while (condition) {
        
    }
}


function containsElement(array, element){
    return array.includes(element);

}

    let i = 0;
   
function findElementIndex(array, element){
    
    let result = array[i]
    if (result==element && i < t ) {
        let y = i+1;
        let z = y.toString();
        console.log(z);
        return 0;
        
    }
    else {
        
        if( i > t){
            console.log("-1");
            return 0;
        }
        else {
            i++;
            findElementIndex(array, element);
        }
    } 

}


