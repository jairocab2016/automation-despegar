import VueloHome from '../pageobjects/vuelos/vuelo.home'
import VueloResult from '../pageobjects/vuelos/vuelo.result'

describe('Consigna 1 - Vuelos', () => {
  it('Buscar vuelo común', () => {
    VueloHome.open()
    VueloHome.ingresarOrigen('Miami')
    VueloHome.ingresarDestino('Paris')
    VueloHome.ingresarFechaPartida('27-02-2019')
    VueloHome.ingresarFechaRegreso('05-03-2019')
    VueloHome.buscarVuelo()
    expect(browser.getTitle()).to.equals('Despegar.com . Resultados de Vuelos')
  })
})