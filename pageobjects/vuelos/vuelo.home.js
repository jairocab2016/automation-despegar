import Page from '../page'

class VueloHome extends Page {

  // Definimos los elementos
  get inputOrigen() { return browser.element('//input[contains(@class, "sbox-bind-reference-flight-roundtrip-origin-input")]') }
  get inputDestino() { return browser.element('//input[contains(@class, "sbox-bind-reference-flight-roundtrip-destination-input")]') }

  //Definimos metodos
  open() {
    super.open('vuelos')
    this.cerrarModalPromociones()
  }

  ingresarOrigen(origen) {
    this.inputOrigen.setValue(origen)
    browser.pause(2000)
    browser.keys('Enter')
  }

  ingresarDestino(destino) {
    this.inputDestino.setValue(destino)
    browser.pause(2000)
    browser.keys('Enter')
  }

  ingresarFechaPartida(fecha) {
    super.ingresarFecha(fecha)
  }

  ingresarFechaRegreso(fecha) {
    super.ingresarFecha(fecha)
  }

  buscarVuelo() {
    browser.element('(//a[contains(@class, "sbox-search")])[1]').click()
  }
}

export default new VueloHome()