import { propiedadesElement } from "./elementsDOM.js";

export const generateHTML2 = (propiedades) => {
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

export const generateHTML = (propiedades) => {
  const fragment = document.createDocumentFragment();

  propiedades.forEach(propiedad => {
    
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `
      <div class="img">
        <img alt="${propiedad.getTipo()}" src="${propiedad.getUrlImagen()}">
      </div>
      <div class="content">
        <h2 class="title">${propiedad.getTipo()}</h2>
        <p class="des">${propiedad.getDescripcion()}</p>
        <div class="price">UF ${propiedad.getPrecio().toLocaleString()}</div>
        <a href="cotizador.html?propiedad-id=${propiedad.getId()}" class="btn-cotizar">
          <button class="add">Cotizador</button>
        </a>
      </div>
    `;
    
    fragment.appendChild(itemDiv);
  });

  propiedadesElement.innerHTML = ''; // Clear existing content
  propiedadesElement.appendChild(fragment);
};
