let pinhões = 0;
const contadorElemento = document.getElementById('contador');
const statusElemento = document.getElementById('status');

function colher() {
    pinhões++;
    contadorElemento.innerText = pinhões;

    // Lógica de feedback baseada na quantidade
    if (pinhões > 0 && pinhões <= 10) {
        statusElemento.innerText = "Início da safra!";
        statusElemento.style.color = "#2d5a27";
    } else if (pinhões > 10 && pinhões <= 20) {
        statusElemento.innerText = "Produção a todo vapor!";
        statusElemento.style.color = "#fbc02d";
    } else if (pinhões > 20) {
        statusElemento.innerText = "Cesto cheio! Ótima colheita!";
        statusElemento.style.color = "#d84315";
    }
}

function reiniciar() {
    pinhões = 0;
    contadorElemento.innerText = pinhões;
    statusElemento.innerText = "Aguardando época (Abril)";
    statusElemento.style.color = "#2d3436";
}
