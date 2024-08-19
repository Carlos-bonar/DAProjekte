function addall(){
    addIngredient('200g', 'Mehl');
    addIngredient('200ml', 'Milch');
    addIngredient('1Prise','Salz');
}
function addIngredient(menge, name){
  document.getElementById('table').innerHTML += 
`<tr>
    <td>${menge}</td>
    <td>${name}</td>
</tr>`
}

function addownI(){
    let quant = document.getElementById('ownq').value;
    let oname = document.getElementById('ownname').value;
    document.getElementById('table').innerHTML += 
    `<tr>
        <td>${quant}</td>
        <td>${oname}</td>
    </tr>`
}