import HotelHome from '../pageobjects/hoteles/hotel.home'
import HotelResult  from '../pageobjects/hoteles/hotel.result'

describe('Consigna 3 - Hoteles', () => {
  it('Buscar hotel más barato', () => {
    HotelHome.open()
    HotelHome.ingresarDestino('Montevideo')
    HotelHome.ingresarFechaEntrada(HotelHome.fechaSumarDias(+10))
    HotelHome.ingresarFechaSalida(HotelHome.fechaSumarDias(+13))
    HotelHome.seleccionarAdultos(3)
    HotelHome.seleccionarMenores(1)
    HotelHome.confirmarPasajeros()
    HotelHome.buscarHotel()
    expect(browser.getTitle()).to.equals('Alojamientos - Despegar.com')
    HotelResult.seleccionarHotelMasBarato()
    HotelResult.ingresarACheckout()    
    HotelResult.validarHabitacion()
  })
})