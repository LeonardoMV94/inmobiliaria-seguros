import { propiedadesElement } from "./elementsDOM.js";

export const generateHTML = (propiedades) => {
  propiedades.forEach((propiedad, index) => {
    const template = `
                  <div class="item">
                    <div class="img">
                        <img alt="casa" src="${propiedad.getUrlImagen()}">
                    </div>
                    <div class="content">
                        <div class="title">${propiedad.getTipo()}</div>
                        <div class="des">
                        ${propiedad.getDescripcion()}
                        </div>
                        <div class="price">UF ${propiedad.getPrecio()}</div>
                        <a class="" href="cotizador.html?propiedad-id=${propiedad.getId()}">
                          <button class="add ">
                            Cotizador
                          </button>
                        </a>
                    </div>
                  `;
    propiedadesElement.innerHTML += template;
  });
};
