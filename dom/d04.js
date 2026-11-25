const l = document.querySelector("#lista");
const v = l.children, f = l.querySelectorAll("li");
console.log(v.length, f.length); // 2, 2
l.append(document.createElement("li"));
console.log(v.length, f.length); // 3, 2
