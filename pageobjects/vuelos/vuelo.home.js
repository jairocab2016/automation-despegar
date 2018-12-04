import Page from '../page'

class VueloHome extends Page {

  // Definimos los elementos
  get inputOrigen () { return browser.element('//input[contains(@class, "sbox-bind-reference-flight-roundtrip-origin-input")]') }
  get inputDestino () { return browser.element('//input[contains(@class, "sbox-bind-reference-flight-roundtrip-destination-input")]') }
  get fechaPartida () { return browser.element('//input[contains(@class, "sbox-bind-reference-flight-start-date-input")]') }



  //Definimos metodos
  open () {
    super.open('vuelos')
    browser.pause(3000)
    this.cerrarModalPromociones()
    browser.pause(3000)    
  }

  ingresarOrigen (origen) {
    this.inputOrigen.setValue(origen)
    browser.pause(2000)
    browser.keys('Enter')    
  }

  ingresarDestino (destino) {
    this.inputDestino.setValue(destino)
    browser.pause(2000)
    browser.keys('Enter')
  }

  ingresarFechaPartida (fechaPartida){
    fechaPartida = fechaPartida.split('-')
    const dia = fechaPartida[0].toString()
    const mes = fechaPartida[1].toString()
    const anio = fechaPartida[2].toString()

    // se valida que la fecha no sea menor al día actual
    if (new Date() > new Date(anio, parseInt(mes, 10) - 1, parseInt(dia, 10) + 1)) {
      throw new Error('La Fecha ingresada no puede ser menor a la fecha actual')
    }

    let mesesMap = {
      '01': 'Enero',
      '02': 'Febrero',
      '03': 'Marzo',
      '04': 'Abril',
      '10': 'Octubre',
      '11': 'Noviembre',
      '12': 'Diciembre'
    }

    this.fechaPartida.click()
    browser.pause(2000)    
    browser.click(`//span[text()="${mesesMap[mes]}"]/../..//span[text()="${dia}"]`)

  }

  ingresarFechaRegreso (fechaRegreso) {
    fechaRegreso = fechaRegreso.split('-')
    const dia = fechaRegreso[0].toString()
    const mes = fechaRegreso[1].toString()
    const anio = fechaRegreso[2].toString()
    // se valida que la fecha no sea menor al día actual
    if (new Date() > new Date(anio, parseInt(mes, 10) - 1, parseInt(dia, 10) + 1)) {
      throw new Error('La Fecha ingresada no puede ser menor a la fecha actual')
    }

    let mesesMap = {
      '01': 'Enero',
      '02': 'Febrero',
      '03': 'Marzo',
      '04': 'Abril',
      '05': 'Mayo',
      '10': 'Octubre',
      '11': 'Noviembre',
      '12': 'Diciembre'
    }

    // this.fechaPartida.click()
    browser.pause(2000)
    let diaAux
    if (parseInt(dia, 10) < 10) {
      diaAux = dia.split('')[1].toString()
    }
    browser.click(`//span[text()="${mesesMap[mes]}"]/../..//span[text()="${diaAux}"]`)
    browser.click('(//a[contains(@class, "sbox-search")])[1]')
  }
}

export default new VueloHome ()