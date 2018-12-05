import Page from '../page'

class HotelResult extends Page {

  seleccionarCincoEstrellas() {
    browser.waitForVisible('(//span[@data-ga-el="stars-5"])[1]', 10000)
    browser.scroll('(//span[@data-ga-el="stars-5"])[1]')
    browser.element('(//span[@data-ga-el="stars-5"])[1]').click()
  }

  seleccionarHotelMasBarato() {
    this.seleccionarCincoEstrellas()
    browser.waitForVisible('//li[@class="hf-pricebox-price col -sm-12 hf-robot-price -eva-3-tc-gray-1"]', 10000)
    let valores = browser.elements('//li[@class="hf-pricebox-price col -sm-12 hf-robot-price -eva-3-tc-gray-1"]')
    let valoresHoteles = []
    for (let i = 0; i < valores.value.length; i++) {
      let valorAux = valores.value[i].getText().split(' ')[1]
      valoresHoteles.push(parseFloat(valorAux))
    }

    let valorMin = Math.min.apply(null, valoresHoteles)
    let posValorMin = valoresHoteles.indexOf(valorMin)
    browser.pause(1000)
    browser.click(`(//li[@class="hf-pricebox-price col -sm-12 hf-robot-price -eva-3-tc-gray-1"])[${posValorMin + 1}]`)
  }

  obtenerwindowHandles() {
    return browser.windowHandles().value
  }

  ingresarACheckout() {
    let windowHandles = this.obtenerwindowHandles()
    browser.switchTab(windowHandles[1])
  }

  validarHabitacion() {
    browser.waitForVisible('//em[text()="Ver habitaciones"]', 10000)
    browser.element('//em[text()="Ver habitaciones"]').click()
    browser.element('//div[contains(@class, "hf-room--selected")]').isVisible()
  }
}

export default new HotelResult()