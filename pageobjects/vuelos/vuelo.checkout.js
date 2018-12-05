import Page from '../page'

class VueloCheckout extends Page {
  get pasajeros() { return browser.element('//div[@class="eva-3-h5 title"][2]') }
  get formasDePago() { return browser.element('//div[contains(@class, "payment-method")]') }
  get detalleCompra() { return browser.element('//div[contains(@class, "detail-module")]') }

  validarModulos() {
    browser.waitForVisible('//div[@id="pricebox-sticky"]', 15000)
    this.pasajeros.isVisible() // validamos pasajeros
    this.formasDePago.isVisible() // validamos formas de pago
    this.detalleCompra.isVisible() // validamos detalle de la compra
  }
}

export default new VueloCheckout()