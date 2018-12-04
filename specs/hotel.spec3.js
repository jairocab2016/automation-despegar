import HotelHome from '../pageobjects/hoteles/hotel.home'

describe('Consigna 3 - Hoteles', () => {
  it('Busqueda de vuelo', () => {
    HotelHome.open()
    HotelHome.ingresarDestino('Montevideo')
    HotelHome.ingresarFechaPartida('10-12-2018')
    HotelHome.ingresarFechaRegreso('13-12-2018')
    console.log(HotelHome.fechaIngreso(+10));
    console.log(HotelHome.fechaIngreso(+13));
    HotelHome.seleccionarAdultos()
    HotelHome.seleccionarMenores()
    HotelHome.confirmarPasajeros()
    HotelHome.buscarHotel()
    
  })
})