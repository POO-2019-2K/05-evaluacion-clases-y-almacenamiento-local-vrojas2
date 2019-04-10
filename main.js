import Inventario from "./Inventario.js";
import Mercancia from "./Mercancia.js";

class Main {
  constructor() {
    let inventario = new Inventario(
      document.querySelector("#Inventario"),
    );

    document.querySelector("#btnAdd").addEventListener("click", () => {
      let form = document.querySelector("#form");

      if(form.checkValidity() === true) {
        let numInventario = document.querySelector("#numInventario").value;
        let name = document.querySelector("#name").value;
        let cantidad = document.querySelector("#cantidad").value;
        let costo = document.querySelector("#costo").value;

        let objMercancia = {
          numInventario: numInventario,
          name: name,
          cantidad: cantidad,
          costo: costo
        };

      let mercancia = new Mercancia(objMercancia);

      inventario.addMercancia(mercancia);
      }
    
     form.classList.add("was-validated");
    });

    document.querySelector("#btnAsist").addEventListener("click", () => {
      let numInventario = document.querySelector("#numInventario").value;
      let cantidad = document.querySelector("#cantidad").value;

      let objMercancia = {
        numInventario: numInventario, 
        cantidad: cantidad,
      };
            
      let mercancia = new Mercancia(objMercancia);
      inventario.addAsistencia(mercancia);
    });
  }
}

let m = new Main();