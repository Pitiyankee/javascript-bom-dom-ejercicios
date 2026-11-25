localStorage.setItem("alumno", JSON.stringify({nombre: "Ana"}));
console.log(JSON.parse(localStorage.getItem("alumno")).nombre); // Ana
