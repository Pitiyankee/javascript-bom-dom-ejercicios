const u = new URL(location.href);
console.log(u.protocol, u.host, u.pathname, u.search, u.hash);
console.log(u.searchParams.get("curso"));
