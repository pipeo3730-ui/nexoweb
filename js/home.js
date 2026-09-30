document.addEventListener("DOMContentLoaded", async () => {
  const h = document.querySelector("#home");
  if (!h) return;
  const a = await getItems();
  h.innerHTML = a.slice(0, 3).map(card).join("");
  bind();
});
