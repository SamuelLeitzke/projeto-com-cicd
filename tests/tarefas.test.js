const assert = require("assert");

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


// TESTE 1
assert.strictEqual(
    limparTexto("  estudar Docker  "),
    "estudar Docker"
);

// TESTE 2
assert.strictEqual(
    tarefaValida("Estudar GitHub Actions"),
    true
);

// TESTE 3
assert.strictEqual(
    tarefaValida("   "),
    false
);

// TESTE 4
const lista = [];
adicionarTarefaNaLista(lista, criarTarefa("Fazer atividade"));

assert.strictEqual(
    lista.length,
    1
);

// TESTE 5
removerTarefaDaLista(lista, 0);

assert.strictEqual(
    lista.length,
    0
);

console.log("Os 5 testes passaram com sucesso");