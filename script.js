function adicionarTarefa() {
    const campo = document.getElementById("tarefa");
    const lista = document.getElementById("lista");

    const texto = campo.value.trim();

    if (texto === "") {
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