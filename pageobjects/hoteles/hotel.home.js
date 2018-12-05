import Page from '../page'

class HotelHome extends Page {

  get inputDestino() { return browser.element('//input[contains(@class, "sbox-destination")]') }

  open() {
    super.open('hoteles')
    this.cerrarModalPromociones()
  }

  ingresarDestino(destino) {
    this.inputDestino.setValue(destino)
    browser.pause(3000)
    browser.keys('Enter')
  }

  ingresarFechaEntrada(fecha) {
    super.ingresarFecha(fecha)
  }

  ingresarFechaSalida(fecha) {
    super.ingresarFecha(fecha)
  }

  seleccionarAdultos(adultos = 0) {
    adultos = adultos
    browser.element('//div[contains(@class, "sbox-rooms-container")]').click()
    if (adultos > 2) {
      for (let i = 2; i < adultos; i++) {
        browser.element('(//a[@class="steppers-icon-right sbox-3-icon-plus"])[1]').click()
      }
    } else if (adultos == 1) {
      browser.element('(//a[@class="steppers-icon-left sbox-3-icon-minus"])[1]').click()
    }
  }

  seleccionarMenores(menor = 0) {
    menor = menor
    let edad = 12
    for (let i = 0; i < menor; i++) {
      browser.element('(//a[@class="steppers-icon-right sbox-3-icon-plus"])[2]').click()
    }
    if (menor > 0) {
      browser.selectByValue('(//select[@class="select-tag"])[1]', edad)
    }
  }

  confirmarPasajeros() {
    browser.element('(//div[@class="_pnlpk-panel__footer -medium-down-to-lg"]/a[text()="Aplicar"])[1]').click()
  }

  buscarHotel() {
    browser.element('//em[text()="Buscar"]').click()
  }
}

export default new HotelHome()