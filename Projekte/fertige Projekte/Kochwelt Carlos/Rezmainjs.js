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

/*script Markus */

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

/* js Severin */

let amount = [1,1,1,375,250,2,1,1,1,1];
let ingredient = ['kg Schweinebraten','Zwiebel(n)','MÃ¶hre(n)','ml GemÃ¼sebrÃ¼he','ml Dunkelbier','StÃ¼ck(e) Brot','Tl Salz und Pfeffer','Tl Paprikapulver','El GewÃ¼rzmischung (BratengwÃ¼rzsalz)','El KÃ¼mmel'];

function addIngredientes() {
for (i = 0; i < ingredient.length; i++){
    writelist (amount[i], ingredient[i]);
}
}

function writelist(amount, name) {
let list = document.getElementById('ingredientList')
    list.innerHTML += `<tr>
                            <td>${amount} ${name}</td>
                        </tr>`;
}

function calc() {
let input = +document.getElementById('input').value;
    if (input < 1) {
        alert('Nur postive Mengenangaben berechenbar.');
    }
    else {
        if (input > 20) {
            alert('Diese Mengenberechnung ist fÃ¼r normale FamiliengrÃ¶ÃŸen ausgelegt!');
        }
        else {
            document.getElementById('ingredientList').innerHTML = '';
            document.getElementById('input').value = '';
    for (i = 0; i < ingredient.length; i++) {
        let qu = (amount[i]/4)*input
        document.getElementById('ingredientList').innerHTML += `<tr>
                                                <td>${qu} ${ingredient[i]}</td>
                                              </tr>`;
    }
        }
    }
}

/* js Carlos */

let amountc = [ 3, 100 , 1, 0.5, 2];
let ingredientc = [ `Knoblauchzehe(n)`, ` gr. altes Brot (Baguette)`, ` Paprikapulver`, ` dl Olivenöl`, ` Ei(er)`];

function addwhat(){
for (i = 0; i< ingredient.length; i++){
    writelist(amountc[i], ingredientc[i]);
}
}

function writelist(amount, name) {
let list = document.getElementById('list')
    list.innerHTML += `<tr class="tablerow">
                        <td class="tabledata">${amount} ${name}</td>
                       </tr>`;
}

/* Portionen Berechnen */

function calcpor(){

let input = +document.getElementById('calcinput').value;
if (input< 1 ){
    alert('Bitte nur positive Mengen angeben, sonst erhalten sie bei der Verdauen negative Energie, was eine Warpblase um Sie bilden könnte!');
}
else {
    if (input>20){
        alert('Diese Seite ist für handelsübliche Mengen gedacht nicht zur Versorgung einer Kompanie!')
    }
    else {
    document.getElementById('list').innerHTML = '';
    document.getElementById('calcinput').value ='';
for (i=0; i<ingredient.length; i++) {
    let qu = (amount[i]/4)*input
    document.getElementById('list').innerHTML += `<tr class="tablerow">
                                                    <td class="tabledata">${qu} ${ingredient[i]}</td>
                                                  </tr>`;
    }
}
}
}

/* body load */
function loadeverything(){
    includeHTML();
    addwhat();
}