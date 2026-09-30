document.addEventListener("DOMContentLoaded", async () => {
  const c = document.querySelector("#detail"),
    id = +new URLSearchParams(location.search).get("id"),
    a = await getItems(),
    x = a.find((v) => v.id === id);
  if (!x) {
    c.innerHTML = '<div class="empty">Contenido no encontrado.</div>';
    return;
  }
  c.innerHTML = `<a href="noticias.html">← Volver al listado</a><article class="detail"><img src="${x.imagen}" alt="${x.titulo}"><div><small>${x.tipo} · ${x.categoria} · ${x.fecha}</small><h1>${x.titulo}</h1><p class="lead">${x.resumen}</p><p>${x.contenido}</p><button class="btn" id="df">${favorite(x.id) ? "♥ Quitar de favoritos" : "♡ Agregar a favoritos"}</button></div></article>`;
  document.querySelector("#df").onclick = () => {
    let z = favs(),
      on = z.includes(x.id);
    z = on ? z.filter((v) => v !== x.id) : [...z, x.id];
    localStorage.setItem("nexoweb-favorites", JSON.stringify(z));
    document.querySelector("#df").textContent = z.includes(x.id)
      ? "♥ Quitar de favoritos"
      : "♡ Agregar a favoritos";
    count();
  };
});
