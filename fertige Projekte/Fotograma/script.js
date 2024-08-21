

let imgs = ['./imgfotog/cascadario.jpg',  './imgfotog/cascada.jpg', './imgfotog/jamon.jpg', './imgfotog/Proma.jpg', 
    './imgfotog/otmont.jpg', './imgfotog/otocalle.jpg', './imgfotog/otoig.jpg', './imgfotog/otoignoche.jpg', './imgfotog/otovalle.jpg',  './imgfotog/utrero.jpg',
    './imgfotog/verhoc.jpg', './imgfotog/verig.jpg', './imgfotog/vermonta.jpg', './imgfotog/verpan.jpg', './imgfotog/verpan2.jpg', './imgfotog/inviernoBo.jpg', 
    './imgfotog/invpant.jpg', './imgfotog/invvegarada.jpg'];

let imgskomp = ['./imgfotog/Bilder komprimiert/cascadario.jpg', './imgfotog/Bilder komprimiert/cascada.jpg',  
     './imgfotog/Bilder komprimiert/jamon.jpg', './imgfotog/Bilder komprimiert/Proma.jpg', 
    './imgfotog/Bilder komprimiert/otmont.jpg', './imgfotog/Bilder komprimiert/otocalle.jpg', './imgfotog/Bilder komprimiert/otoig.jpg', './imgfotog/Bilder komprimiert/otoignoche.jpg',
    './imgfotog/Bilder komprimiert/otovalle.jpg', './imgfotog/Bilder komprimiert/utrero.jpg', './imgfotog/Bilder komprimiert/verhoc.jpg', 
    './imgfotog/Bilder komprimiert/verig.jpg', './imgfotog/Bilder komprimiert/vermonta.jpg','./imgfotog/Bilder komprimiert/verpan.jpg', './imgfotog/Bilder komprimiert/verpan2.jpg',
    './imgfotog/Bilder komprimiert/inviernoBo.jpg','./imgfotog/Bilder komprimiert/invpant.jpg', './imgfotog/Bilder komprimiert/invvegarada.jpg'];

function loadPics(){ // die kleinen Vorschaubilder werden geladen und in die Seite eingefügt
    let bodycontent = document.getElementById('fotocontent');
    bodycontent.innerHTML = '';
    for(let i = 0; i < imgskomp.length; i++){
    bodycontent.innerHTML += `<a href="#h1"><img onclick="StartEverything(${i})" class="exmimg"src="${imgskomp[i]}"></img></a>`;
    }
}

function StartEverything(index){ // startet das Overlay und läd !!alle!! großen Bilder
    toggleOverlay()
    loadBigPics(index)
}

function loadBigPics(index, event){ //Funktion zum laden !!aller!! großen Bilder
    let overlaycontent = document.getElementById('bigslide');
    overlaycontent.innerHTML = '';
    for(let i = 0; i < imgs.length; i++){   
      overlaycontent.innerHTML += `<img onclick="toggleOverlay(${i})" id="bigimg${i}" class="bigimg"src="${imgs[i]}"></img>`;
        transForm(i, index); //ruft die Funktion auf zum verschieben jedes Bildes 
    }
}

function transForm(i, index ){  //funktion zum verschieben der Bilder   
        let id = "bigimg" + i;
        let perc = displacement(i, index);
        document.getElementById(id).style.transition = 'transform 225ms ease-in-out';
        document.getElementById(id).style.transform = `translateX(${perc}px)`;
        console.log(`${perc}px` + ` ${id}`);
        if(perc==0){ 
         changeIndex(index)
        }
}   

function toggleOverlay(){       //Overlayfunktion
        let Refoverlay = document.getElementById('overlay')
        Refoverlay.classList.toggle('hide')
}

function displacement(i, index){ //unterfunktion für TransForm() zum berechnen wie weit das einzige Bild verschoben wird
        let perc = (i*1500) - (index*1500);
        return perc;
}
    
function changeIndex(index){    //Funkton zum verändern des Indexes der Buttons zum navigieren 
        if(index==0){ // 17 & 0
           let down = 17
           let up =index +1
           changeIndexExecute(down, up);
        }
        else{
                if(index === ((imgs.length)-1)){
                    let down = index
                    let up = 0;
                    changeIndexExecute(down, up);
                }
    
                else{ //index-1 & index +1
                let down = index -1;
                let up = index +1
                changeIndexExecute(down, up);
                }
        }
}

function slider(index, event){ //Funktion zum vor und zurück navigieren in den großen Bildern
        event.stopPropagation();
        for(i=0; i<imgs.length; i++){
        transForm(i, index);
        }   
}

let slideshowTimeout; //Variable zum leeren des Timoouts für den Stopbutton

function startSlideshow(index, event){ //Startbutton startet die Slideshow
    slideshow(index, event);
    document.getElementById('playbuttonimg').setAttribute('src', `./icons/stopp.svg`);
    document.getElementById('playbutton').setAttribute("onclick", `stopSlideshow(${index}, event)`);
}

function stopSlideshow(index, event) { //Startbutton beendet die Slideshow
    event.stopPropagation();
    clearTimeout(slideshowTimeout);
    document.getElementById('playbuttonimg').setAttribute('src', `./icons/play.svg`);
    document.getElementById('playbutton').setAttribute("onclick", `startSlideshow(${index}, event)`);

}

function slideshow(index, event){ // slideshow logik
        event.stopPropagation();
     for(let k = 0; k < imgs.length; k++){
        if (index== imgs.length){
            index=0
            slideshow(index,event);
        }
        else{
        transForms(k, index);
        }
     }
     slideshowTimeout = setTimeout(function()
     {slideshow(index+1, event)
     },1500);
}

function transForms(i, index ){  
    let id = "bigimg" + i;
    let perc = displacement(i, index);
    document.getElementById(id).style.transition = 'transform 500ms ease-in-out';
    document.getElementById(id).style.transform = `translateX(${perc}px)`;
    console.log(`${perc}px` + ` ${id}`);
}   


function changeIndexExecute(down, up){
    let newindexdown = document.getElementById('buttdownid');
    newindexdown.setAttribute("onclick", `slider(${down}, event)`);
    let newindexup = document.getElementById('buttupid');
    newindexup.setAttribute("onclick", `slider(${up}, event)`);
}