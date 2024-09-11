import { idTest } from "./elementsDOM.js";
let params = new URLSearchParams(window.location.search);
let category = params.get("category");
idTest.innerHTML = category
