document.querySelector("#lista").onclick = e => {
  const li = e.target.closest("li");
  if (li && e.currentTarget.contains(li)) li.remove();
};
