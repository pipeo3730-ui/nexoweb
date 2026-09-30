const DATA_URL = "data/servicios.json";
async function getItems() {
  const r = await fetch(DATA_URL);
  if (!r.ok) throw Error("No fue posible cargar los datos.");
  return r.json();
}
function favs() {
  try {
    return JSON.parse(localStorage.getItem("nexoweb-favorites")) || [];
  } catch {
    return [];
  }
}
function favorite(id) {
  return favs().includes(Number(id));
}
function count() {
  document
    .querySelectorAll("#count")
    .forEach((x) => (x.textContent = favs().length));
}
function card(x) {
  return `<article class="card"><div class="pic"><img src="${x.imagen}" alt="${x.titulo}"><button class="heart ${favorite(x.id) ? "on" : ""}" data-id="${x.id}">${favorite(x.id) ? "♥" : "♡"}</button></div><div class="body"><small>${x.tipo} · ${x.categoria}</small><h3>${x.titulo}</h3><p>${x.resumen}</p><div class="card-foot"><span>${x.fecha}</span><a href="detalle.html?id=${x.id}">Ver detalle →</a></div></div></article>`;
}
function bind() {
  document.querySelectorAll(".heart").forEach(
    (b) =>
      (b.onclick = () => {
        let a = favs(),
          id = +b.dataset.id;
        a = a.includes(id) ? a.filter((v) => v !== id) : [...a, id];
        localStorage.setItem("nexoweb-favorites", JSON.stringify(a));
        b.classList.toggle("on", a.includes(id));
        b.textContent = a.includes(id) ? "♥" : "♡";
        count();
        if (location.pathname.endsWith("favoritos.html")) location.reload();
      }),
  );
}
document.addEventListener("DOMContentLoaded", () => {
  count();
  const m = document.querySelector("#menu");
  const n = document.querySelector("nav");
  if (m) m.onclick = () => n.classList.toggle("open");
});
