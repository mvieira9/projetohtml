const tabelaDados = document.getElementById("tabelaCorpo");

const dadosSalvos = JSON.parse(localStorage.getItem("meusDados")) || [];

tabelaDados.innerHTML = "";

if (dadosSalvos.length === 0) {
    tabelaDados.innerHTML = `<tr><td colspan="2" style="text-align: center; color: gray;">Nenhum projeto cadastrado ainda.</td></tr>`;
} else {
    dadosSalvos.forEach(dado => {
        const linha = `<tr>
            <td><strong>${dado.nome}</strong></td>
            <td>${dado.descricao}</td>
        </tr>`;
        tabelaDados.innerHTML += linha;
    });
}