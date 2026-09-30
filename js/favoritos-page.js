document.addEventListener("DOMContentLoaded", async () => {
  const g = document.querySelector("#favorites"),
    e = document.querySelector("#no-fav"),
    a = await getItems(),
    r = a.filter((x) => favs().includes(x.id));
  g.innerHTML = r.map(card).join("");
  e.hidden = r.length > 0;
  bind();
  count();
});
