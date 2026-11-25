const e = document.querySelector("#entrada");
document.querySelector("#agregar").onclick = () => {
  if (!e.value.trim()) return;
  const li = document.createElement("li");
  li.textContent = e.value.trim();
  document.querySelector("#lista").append(li);
  e.value = "";
};
