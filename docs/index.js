var modalCursos = new bootstrap.Modal(document.getElementById('modalCursos'), {});
var modalIdiomas = new bootstrap.Modal(document.getElementById('modalIdiomas'), {});
var modalExperiencias = new bootstrap.Modal(document.getElementById('modalExperiencias'), {});
var modalEscolaridade = new bootstrap.Modal(document.getElementById('modalEscolaridade'), {});


function abrirCursos() {
    modalCursos.show();
}

function abrirIdiomas() {
    modalIdiomas.show();
}

function abrirExperiencias() {
    modalExperiencias.show();
}

function abrirEscolaridade() {
    modalEscolaridade.show();
}

function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}