document.addEventListener("DOMContentLoaded", () => {
  const f = document.querySelector("#form");
  f.onsubmit = (e) => {
    e.preventDefault();
    let ok = true;
    const vals = {
      name: document.querySelector("#name").value.trim(),
      email: document.querySelector("#email").value.trim(),
      subject: document.querySelector("#subject").value.trim(),
      message: document.querySelector("#message").value.trim(),
    };
    for (const k in vals) {
      document.querySelector("#e-" + k).textContent = "";
    }
    if (vals.name.length < 3) {
      document.querySelector("#e-name").textContent =
        "Ingresa al menos 3 caracteres.";
      ok = false;
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(vals.email)) {
      document.querySelector("#e-email").textContent = "Correo no válido.";
      ok = false;
    }
    if (vals.subject.length < 4) {
      document.querySelector("#e-subject").textContent =
        "Asunto demasiado corto.";
      ok = false;
    }
    if (vals.message.length < 10) {
      document.querySelector("#e-message").textContent =
        "Mensaje demasiado corto.";
      ok = false;
    }
    document.querySelector("#success").hidden = !ok;
    if (ok) f.reset();
  };
});
