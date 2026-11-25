history.pushState({vista: 2}, "", "?vista=2");
addEventListener("popstate", e => console.log(e.state));
