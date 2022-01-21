let d = document;
let caixaAtiva = d.getElementById("ativas");
let listaTasks = d.getElementsByTagName('ul')[0];

function checkboxFunc(list){
    console.log(list.children);
}

function addingTask(){
    let task = d.getElementById('task');
    let topic =  `<li><input type="checkbox"> ${task.value}</li>`;
    
    caixaAtiva.innerHTML += topic;
    
}


