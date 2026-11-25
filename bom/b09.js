const t = performance.now();
let suma = 0;
for (let i = 1; i <= 100000; i++) suma += i;
console.log(suma, performance.now() - t); // 5000050000
