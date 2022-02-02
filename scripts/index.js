function criarTarefa(){
    let input = document.getElementById('input');
    let listaTarefas = document.getElementsByClassName('containerTarefas')[0];
    let tag = `<div class="tarefa">
    <div class="texto">${input.value}</div> 
    <div>
        <button class="bordasButton">
            <img src="/imgs/workdone_87219.ico" alt="" width="30">
        </button>
        <button class="bordasButton">
            <img src="/imgs/deletetrashbin_87227.ico" alt="" width="30">
        </button>
    </div>
</div>`

    listaTarefas.innerHTML += tag;
} 