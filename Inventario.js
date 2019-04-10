import Mercancia from "./Mercancia.js";

export default class Inventario {
  constructor(tableInventario) {
    this._tableInventario = tableInventario;
    this._mercancias = [];
    //localStorage.removeItem("mercancias");  
    this._initTables();
  }

  _initTables() {
    let lsMercancias = JSON.parse(localStorage.getItem("mercancias"));

    if(lsMercancias === null){
      return;
    }
    lsMercancias.forEach((e, index) => {

      this._addToTable(new Mercancia(e));
    });

  }

  _addToTable(mercancia) {
    let row = this._tableInventario.insertRow(-1);

    let cellNumInventario = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellCantidad = row.insertCell(2);
    let cellCosto = row.insertCell(3);

    cellNumInventario.innerHTML = mercancia.numInventario;
    cellName.innerHTML = mercancia.name;
    cellCantidad.innerHTML = mercancia.cantidad;
    cellCosto.innerHTML = mercancia.costo;

      let objMercancia = {
        numInventario: numInventario,
        name: name,
        cantidad: cantidad,
        costo: costo
      }
      this._mercancias.push(objMercancia);
  }
  
  _findMercancia(numInventario) {
    let foundAt = -1;
    this._mercancias.forEach((e, index) => {
      if(e.numInventario === numInventario) {
        foundAt = index;
        return;
      }
    });
    return foundAt;
  }

  addMercancia(mercancia) {
    let found = this._findMercancia(mercancia.numInventario);
    if(found >= 0) {
      alert('Producto ya exitente');
      return;
    }
    else{
      alert("Producto registrado");
    }
    this._addToTable(mercancia);
    localStorage.setItem("mercancias", JSON.stringify(this._mercancias));
  }

  getNewCant(mercancia) {
    let found = this._findMercancia(mercancia.numInventario)
    if(found >= 0){
      this._mercancias[found].cantidad  = this._mercancias[found].cantidad - this._mercancias[found].cantidad;
      localStorage.setItem("mercancia", JSON.stringify(this._mercancias));
      let row = this._tableInventario.rows[found+1];
      row.cells[2].innerHTML = this._mercancias[found].salida;   
    }
    else{
      alert('No registrado');
      return;
    }

    localStorage.setItem("mercancia", JSON.stringify(this._mercancias));
  }
}