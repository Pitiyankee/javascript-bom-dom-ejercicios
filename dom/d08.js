function recorrer(el, n = 0) {
  console.log(" ".repeat(n * 2) + el.tagName);
  for (const h of el.children) recorrer(h, n + 1);
}
recorrer(document.body);
