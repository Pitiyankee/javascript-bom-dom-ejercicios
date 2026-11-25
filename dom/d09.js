const f = document.querySelector("#form");
f.addEventListener("submit", e => {
  e.preventDefault();
  document.querySelector("#resultado").textContent = new FormData(f).get("email");
});
