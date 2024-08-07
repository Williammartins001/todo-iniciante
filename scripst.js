const button = document.querySelector(".button-add-task")
const tarefas = document.querySelector(".input-task")
const listacompleta = document.querySelector(".lista-tarefas")

let minhalistadetarefas = []



function novatarefa() {
    minhalistadetarefas.push ({
      tarefa: tarefas.value,
      concluida: false
    })

    tarefas.value = ''

    mostrartarefas ()
}

function mostrartarefas() {
    let novali = ''

  minhalistadetarefas.forEach((item, posicao) => {
    novali = novali + `
      
       <li class="tarefa ${item.concluida && "done"}">
          <img src="./img/checked.png" alt="check na tarefa"onclick="concluirtarefa(${posicao})">
          <p>${item.tarefa}</p>
          <img src="./img/trash.png" alt="tarefa para o lixo" onclick="deletaritem(${posicao})">
       </li
     
       `

  })
listacompleta.innerHTML = novali
localStorage.setItem('lista', JSON.stringify(minhalistadetarefas))

}

function concluirtarefa (posicao){
      minhalistadetarefas[posicao].concluida = !minhalistadetarefas[posicao].concluida

      mostrartarefas()
}

function deletaritem (posicao){
    minhalistadetarefas.splice(posicao, 1)
    
    mostrartarefas()
}

function recarregartarefas (){
  const tarefasdolocalstorage = localStorage.getItem('lista')

  if (tarefasdolocalstorage) {
    minhalistadetarefas = JSON.parse (tarefasdolocalstorage)
  }
  mostrartarefas()
}

recarregartarefas()
button.addEventListener('click', novatarefa)