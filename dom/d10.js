const l = document.querySelector("#lista");
const e = document.querySelector("#entrada");
let tareas = JSON.parse(localStorage.getItem("tareas") ?? "[]");

function pintar() {
  l.replaceChildren();
  tareas.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t;
    li.dataset.i = i;
    l.append(li);
  });
}

function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
  pintar();
}

document.querySelector("#agregar").onclick = () => {
  if (!e.value.trim()) return;
  tareas.push(e.value.trim());
  e.value = "";
  guardar();
};

l.onclick = ev => {
  const li = ev.target.closest("li");
  if (li && l.contains(li)) {
    tareas.splice(Number(li.dataset.i), 1);
    guardar();
  }
};

pintar();
