import VueloHome from '../pageobjects/vuelos/vuelo.home'
import VueloResult from '../pageobjects/vuelos/vuelo.result'

describe('Consigna 1 - Vuelos', () => {
  it('Busqueda de vuelo', () => {
    VueloHome.open('/')
    VueloHome.ingresarOrigen('Miami')
    VueloHome.ingresarDestino('Paris')
    VueloHome.ingresarFechaPartida('27-12-2018')
    VueloHome.ingresarFechaRegreso('01-01-2019')
    expect(browser.getTitle()).to.equals('Despegar.com . Resultados de Vuelos')
  })
})