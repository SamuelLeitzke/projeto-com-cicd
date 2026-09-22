function limparTexto(texto) {
    return texto.trim();
}

function tarefaValida(texto) {
    return limparTexto(texto) !== "";
}

function criarTarefa(texto) {
    return {
        texto: limparTexto(texto)
    };
}

function adicionarTarefaNaLista(lista, tarefa) {
    lista.push(tarefa);
    return lista;
}

function removerTarefaDaLista(lista, indice) {
    lista.splice(indice, 1);
    return lista;
}

function adicionarTarefa() {
    const campo = document.getElementById("tarefa");
    const lista = document.getElementById("lista");

    const texto = limparTexto(campo.value);

    if (!tarefaValida(texto)) {
        return;
    }

    const item = document.createElement("li");
    item.textContent = texto;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";

    botaoRemover.onclick = function () {
        item.remove();
    };

    item.appendChild(botaoRemover);
    lista.appendChild(item);

    campo.value = "";
}

document.getElementById("tarefa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});