let title = document.getElementById('website_title');

console.log(title.innerHTML);


title.innerHTML = "Neuer Titel"

//document.getElementById('test_div').innerHTML = '<p>test</p>'

document.getElementById('test_div').classList.add('green_bg');
document.getElementById('test_div').classList.remove('green_bg');
document.getElementById('test_div').classList.toggle('green_bg');
// toggle entfernt falls vorhanden und hügt hinzu falls nicht vorhanden!


document.getElementById('test_input').setAttribute('type', 'text')
document.getElementById('test_input').setAttribute('value', 'asdasdasd')
// document.getElementById('test_input').value = 13113212121 (geht auch)

function toggleDNone(id){
    document.getElementById(id).classList.toggle('d_none')
}