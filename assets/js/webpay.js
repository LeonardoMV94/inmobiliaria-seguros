let params = new URLSearchParams(window.location.search);
let valor_p = params.get("valor");

document.getElementById('precio').innerHTML = `Total a pagar: ${valor_p}`;