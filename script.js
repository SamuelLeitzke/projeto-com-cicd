function adicionarTarefa() {
    const campo = document.getElementById("tarefa");
    const lista = document.getElementById("lista");

    const texto = campo.value.trim();

    if (texto === "") {
        return;
    }

    const item = document.createElement("li");
    item.textContent = texto;

    lista.appendChild(item);

    campo.value = "";
}