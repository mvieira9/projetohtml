const formulario = document.getElementById("meuFormulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeInput = document.getElementById("nome").value;
    const descricaoInput = document.getElementById("descricao").value;

    const novoDado = { nome: nomeInput, descricao: descricaoInput };

    const dadosSalvos = JSON.parse(localStorage.getItem("meusDados")) || [];

    dadosSalvos.push(novoDado);

    localStorage.setItem("meusDados", JSON.stringify(dadosSalvos));

    window.location.href = "curso.html";

});