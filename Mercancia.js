export default class Mercancia {
    constructor(mercancia) {
      this._numInventario = mercancia.numInventario;
      this._name = mercancia.name.toUpperCase();
      this._cantidad = mercancia.cantidad;
      this._costo = mercancia.costo;
    }
  
    get numInventario() {
      return this._numInventario;
    }

    get name() {
      return this._name;
    }

    get cantidad() {
      return this._cantidad;
    }

    get costo() {
      return this._costo;
    }

    get salida() {
      return this._salida;
    }
   
  }