document.addEventListener("DOMContentLoaded", async () => {
  const g = document.querySelector("#grid"),
    s = document.querySelector("#search"),
    f = document.querySelector("#filter"),
    i = document.querySelector("#info"),
    e = document.querySelector("#empty");
  const a = await getItems();
  [...new Set(a.map((x) => x.categoria))]
    .sort()
    .forEach((c) => f.insertAdjacentHTML("beforeend", `<option>${c}</option>`));
  function render() {
    let q = s.value.toLowerCase(),
      c = f.value,
      r = a.filter(
        (x) =>
          (x.titulo.toLowerCase().includes(q) ||
            x.resumen.toLowerCase().includes(q)) &&
          (c === "all" || x.categoria === c),
      );
    g.innerHTML = r.map(card).join("");
    i.textContent = `${r.length} contenido(s) encontrado(s).`;
    e.hidden = r.length > 0;
    bind();
  }
  s.oninput = render;
  f.onchange = render;
  render();
});
