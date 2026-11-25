let n = 5;
const id = setInterval(() => {
  console.log(n--); // 5, 4, 3, 2, 1
  if (n === 0) clearInterval(id);
}, 1000);
