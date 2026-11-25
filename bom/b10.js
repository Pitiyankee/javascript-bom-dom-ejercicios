document.querySelector("#copiar").onclick = async () => {
  const t = prompt("Texto");
  if (t === null) return;
  try { await navigator.clipboard.writeText(t); }
  catch (e) { alert(e.message); }
};
