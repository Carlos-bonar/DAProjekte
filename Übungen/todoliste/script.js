let todos = ['pipi machen', 'zähneputzen'];


function showtodos(){
    document.getElementById('mylist').innerHTML='';
    for(i=0; i< todos.length; i++){
    document.getElementById('mylist').innerHTML += `<li>${todos[i]} <a href="#z" onclick="deletetodo(${i})">ereledigt</a></li>`;
}
}

function addtodo(){
    let todo = document.getElementById('myinput').value;
    todos.push(todo);
    showtodos();
    document.getElementById('myinput').value='';
}

function deletetodo(position){
    todos.splice(position, 1);
    showtodos();
}