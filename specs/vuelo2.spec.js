import VueloHome from '../pageobjects/vuelos/vuelo.home'
import VueloResult from '../pageobjects/vuelos/vuelo.result'
import VueloCheckout from '../pageobjects/vuelos/vuelo.checkout'

describe('Consigna 2 - Vuelos', () => {
    it('Busqueda de vuelo - precio más caro', () => {
      VueloHome.open('/')
      VueloHome.ingresarOrigen('Miami')
      VueloHome.ingresarDestino('Paris')
      VueloHome.ingresarFechaPartida('27-12-2018')
      VueloHome.ingresarFechaRegreso('01-01-2019')
      expect(browser.getTitle()).to.equals('Despegar.com . Resultados de Vuelos')
      VueloResult.seleccionarVueloMasCaro()
      expect(browser.getTitle()).to.equals('Despegar.com - Checkout')
      VueloCheckout.validarModulos()
    })
})