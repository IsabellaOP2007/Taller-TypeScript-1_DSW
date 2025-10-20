import { series } from "./data.js";
const body = document.getElementById("elbody");
const promedioEl = document.getElementById("promedio");
function promedioS(lista) {
    let contador = lista.length;
    if (contador === 0)
        return 0;
    let total = 0;
    lista.forEach((serie) => total += serie.seasons);
    let promedio = total / contador;
    return promedio;
}
function crearFila(serie) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serie.num}</td>
    <td>${serie.name}</td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `.trim();
    return tr;
}
function hacerTabla(filas) {
    if (!body)
        throw new Error("No se encontró <tbody id='elbody:D'> en el HTML");
    body.innerHTML = "";
    const frag = document.createDocumentFragment();
    for (const tr of filas)
        frag.appendChild(tr);
    body.appendChild(frag);
}
const filas = series.map(crearFila);
hacerTabla(filas);
if (promedioEl) {
    promedioEl.textContent = `Promedio de temporadas: ${promedioS(series).toFixed(2)}`;
}
//# sourceMappingURL=main.js.map