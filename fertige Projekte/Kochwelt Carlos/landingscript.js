async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

let headline = ['Elektro:', 'Gas:', 'Induktion:'];
let Prolist = [`
                <li>einfache Reinigung</li>
                <li>günstige Anschaffung</li>
                <li>jegliches Kochgeschirr mölich</li>`, 
               `
                <li>stufenlos regulierbar</li>
                <li>reagiert sofort</li>
                <li>keine Vorlaufzeit</li>
                <li>keine Restwärme</li>
                <li>ermöglicht punktgenaues kochen</li>
                `, 
               `
                <li>Verbrennungsrisiko gering</li>
                <li>Verschüttetes brennt nicht an </li>
                <li>geringerer Stromverbrauch</li>
                `];
let contralist = [`<li>Restwärme</li>
                   <li>Vorlaufzeit</li>
                   <li>höherer Stromverbrauch</li>
                   <li>Strom ist teuerer als Gas</li>`,
                   `<li>hoher Reinigungsaufwand</li>
                    <li>schnell verstopfte Düsen</li>
                    <li>Gefahr durch Gasleck</li>`,
                   `<li>teuer in der Anschaffung</li>
                    <li>spezielles Kochgeschirr</li>
                    <li>Strom ist teuerer als Gas</li>`
                 ];
let bottomimg = [`https://kochwelt-235.developerakademie.net/img/elektro.jpg`,`https://kochwelt-235.developerakademie.net/img/Gasflamme.jpg`,`https://kochwelt-235.developerakademie.net/img/induction.jpg`];

let currentcombustible = 0

function start() {
   changeheadline(currentcombustible);
   changelistleft(currentcombustible);
   changelistright(currentcombustible);
   changebottomimg(currentcombustible);
   currentcombustible++;

    if(currentcombustible == 3){
        currentcombustible = 0;
    }
        setTimeout(start, 4500);
    
}

function changeheadline(i){
    document.getElementById('bottomheadl').innerHTML = ` ${headline[i]}`;
}
function changelistleft(i) {
    document.getElementById('listleft').innerHTML = `${Prolist[i]}`;
}

function changelistright(i){
    document.getElementById('listright').innerHTML = `${contralist[i]}`;
}

function changebottomimg(i){
    document.getElementById('bottomimg').src = `${bottomimg[i]}`;
}


function loadeverything(){
    includeHTML();
    start();
}

function showsidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hidesidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}