//---------------------------------------------------------------------------------------------------
//1. VARIAVEIS GLOBAIS
//---------------------------------------------------------------------------------------------------

//procura pelo elemento com o ID "txt-nova-tarefa" no documento HTML
const txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");
//procura pelo elemento com o ID "btn-nova-tarefa" no documento HTML
const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");
//procura pelo elemento com o ID "lista-tarefas" no documento HTML
const lista_tarefas = document.querySelector("#lista-tarefas");

//---------------------------------------------------------------------------------------------------
//2. FUNÇÃO DE LOGICA
//---------------------------------------------------------------------------------------------------

function iniciaToDo() {
    //alert ("ola mundo");

    //associa função ao evento de clicar no botão de "adicionar" nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
}
function adicionarTarefa() {
    alert("ola tarefa!");
}
//---------------------------------------------------------------------------------------------------
//3. ESCUTADORES DE EVENTOS E INICIO
//---------------------------------------------------------------------------------------------------

iniciaToDo();
