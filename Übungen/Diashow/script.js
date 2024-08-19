let images =['./img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg', './img/img5.jpg'];
let currentImage = 0;


function start (){
    let ms = +document.getElementById('speed').value*1000;
    if(ms>3000){
        alert('Alter bleib mal realistisch! Mehr als alle 3 Sekunden ein Bild?')
    }
    else{
    if (ms<500){
        alert('Bitte mindestens 0.5 Sekunden eingeben');
    }
    else{
    showImage(currentImage);
    currentImage++;
    if (currentImage==5){
        currentImage=0;
    }
    setTimeout(start, ms);
    }
}
}

function showImage(i){
    document.getElementById('image').src=images[i];
}