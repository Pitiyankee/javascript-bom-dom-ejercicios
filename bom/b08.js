const mq = matchMedia("(max-width: 600px)");
console.log(mq.matches);
mq.addEventListener("change", e => console.log(e.matches));
