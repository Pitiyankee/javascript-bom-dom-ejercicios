for (const txt of ["Primer párrafo", "Segundo párrafo"]) {
  const p = document.createElement("p");
  p.className = "texto";
  p.textContent = txt;
  document.body.append(p);
}
document.querySelectorAll(".texto").forEach(p => console.log(p.textContent));
