import Page from '../page'

class VueloResult extends Page {
  // definimos metodos
  seleccionarVueloMasCaro() {
    let precios
    if (browser.isVisible('//em[text()="Precio final"]/..//span[@class="amount price-amount"]')) {
      precios = browser.elements('//em[text()="Precio final"]/..//span[@class="amount price-amount"]')
    } else {
      precios = browser.elements('//div[@data-index]//em/span[contains(@class, "price-amount")]')
    }

    let preciosValor = []
    for (let i = 0; i < precios.value.length; i++) {
      preciosValor.push(parseFloat(precios.value[i].getText()))
    }

    let valorMax = Math.max.apply(null, preciosValor)
    let posValorMax = preciosValor.indexOf(valorMax)
    browser.pause(1000)
    browser.scroll(`(//a[@tooltip-component="buy-button-tooltip"])[${posValorMax + 1}]`)
    browser.element(`(//a[@tooltip-component="buy-button-tooltip"])[${posValorMax + 1}]`).click()
  }
}

export default new VueloResult()