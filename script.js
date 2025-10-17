//---------------------------------------------------------------------------------------------------
//1. VARIAVEIS GLOBAIS
//---------------------------------------------------------------------------------------------------

//procura pelo elemento com o ID "txt-nova-tarefa" no documento HTML
const txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");
//procura pelo elemento com o ID "btn-nova-tarefa" no documento HTML
const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");
//procura pelo elemento com o ID "lista-tarefas" no documento HTML
const lista_tarefas = document.querySelector("#lista-tarefas");

const audioConcluir = new Audio('sound/gmae.wav');

const modalExcluir = new bootstrap.modal(document.getElementById('exempleModal'));
let id_tarefa_excluir;

//---------------------------------------------------------------------------------------------------
//2. FUNÇÃO DE LOGICA
//---------------------------------------------------------------------------------------------------

function iniciaToDo() {
    //alert ("ola mundo");
    
    //associa função ao evento de clicar no botão de "adicionar" nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
    txt_nova_tarefa.addEventListener("keypress", adicionarTarefaEnter)
}
function adicionarTarefa() {
    if (txt_nova_tarefa.value.trim() !== "") {
        const btn_item = `
            <div>
                <button class="btn btn-outline-success btn-sm me-2 btn-concluir" onclick="concluirTarefa(this)">Concluir</button>
                <button class="btn btn-outline-danger btn-sm btn-excluir" onclick="obterIDTarefaExcluir(this);modalExcluir.show()">Excluir</button>
            </div>     
        `;
        
        //cria um novo item de lista
        const item = document.createElement("li");
        item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        item.innerHTML = "<span class='w-75 text-truncate'>" + txt_nova_tarefa.value +"</span>" + btn_item;
        
        lista_tarefas.append(item); 
    }
    txt_nova_tarefa.value ="";
    txt_nova_tarefa.focus();
}

function adicionarTarefaEnter(evento) {
    if (evento.key == "Enter") {
       adicionarTarefa();
  }
}

function concluirTarefa(btn_concluir) {
    audioConcluir.play();

    for (let i = 0; i <= 40; i++){
        confetti();
    }

    obterIDTarefaExcluir(btn_concluir);
    ExcluirTarefa();
}

    function ExcluirTarefa() {
        lista_tarefas.removeChild(lista_tarefas.children[id_tarefa_excluir]);
        modalExcluir.hide();
}

function obterIDTarefaExcluir(btn) {
    const item = btn.closest("li");
    const tarefas = Array.from(lista_tarefas.children);
    id_tarefa_excluir = tarefas.indexOf(item);
}


//---------------------------------------------------------------------------------------------------
//3. ESCUTADORES DE EVENTOS E INICIO
//---------------------------------------------------------------------------------------------------

iniciaToDo();
