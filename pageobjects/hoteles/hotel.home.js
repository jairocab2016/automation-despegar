import Page from '../page'

class HotelHome extends Page {

  get inputDestino() { return browser.element('//input[contains(@class, "sbox-destination")]') }
  get fechaPartida () { return browser.element('//input[contains(@class, "sbox-checkin-date")]') }

  open() {
    super.open('hoteles')
    browser.pause(3000)
    this.cerrarModalPromociones()
    browser.pause(3000)
  }

  ingresarDestino(destino) {
    this.inputDestino.setValue(destino)
    browser.pause(2000)
    browser.keys('Enter')
  }


  sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  fechaIngreso (masDias) {
    let fecha = this.sumarDias(new Date(), masDias)
    console.log(fecha);
    
    let dia = fecha.getDate()
    if (dia < 10) {
      dia = "0"+ dia.toString()
    }
    let mes = fecha.getMonth() + 1
    if (mes < 10) {
      mes = "0" + mes.toString()
    }
    let anio = fecha.getFullYear()
    return `${dia}-${mes}-${anio}`
  }

  fechaRegreso (masDias) {
    let fecha = this.sumarDias(new Date(), masDias)
    console.log(fecha);
    
    let dia = fecha.getDate()
    if (dia < 10) {
      dia = "0"+ dia.toString()
    }
    let mes = fecha.getMonth() + 1
    if (mes < 10) {
      mes = "0" + mes.toString()
    }
    let anio = fecha.getFullYear()
    return `${dia}-${mes}-${anio}`
  }

  ingresarFechaPartida(fechaPartida) {
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
    
    let diaAux = dia
    if (parseInt(dia, 10) < 10) {
      diaAux = dia.split('')[1].toString()
    }
    browser.click(`//span[text()="${mesesMap[mes]}"]/../..//span[text()="${diaAux}"]`)

  }

  ingresarFechaRegreso(fechaRegreso) {
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
    console.log("dia: " + dia);
    let diaAux = dia
    if (parseInt(dia, 10) < 10) {
      diaAux = dia.split('')[1].toString()
    }
    console.log("dia auxiliar: " + diaAux);
    
    browser.click(`//span[text()="${mesesMap[mes]}"]/../..//span[text()="${diaAux}"]`)
    // browser.click('(//a[contains(@class, "sbox-search")])[1]')
  }

  seleccionarAdultos () {
    let adultos = 0
    browser.element('//div[contains(@class, "sbox-rooms-container")]').click()
    browser.pause(1000)
    if (adultos > 2) {
      for (let i = 0; i < adultos; i++) {
        browser.element('(//a[@class="steppers-icon-right sbox-3-icon-plus"])[1]').click()      
      }
    } else {
      browser.element('(//a[@class="steppers-icon-left sbox-3-icon-minus"])[1]').click()
    }
  }

  seleccionarMenores () {
    let menor = 1
    let edad = 12
    for (let i = 0; i < menor; i++) {
      browser.element('(//a[@class="steppers-icon-right sbox-3-icon-plus"])[2]').click()      
    }

    browser.selectByValue('(//select[@class="select-tag"])[1]', edad)
  }

  confirmarPasajeros () {
    browser.element('(//div[@class="_pnlpk-panel__footer -medium-down-to-lg"]/a[text()="Aplicar"])[1]').click()
  }

  buscarHotel () {
    browser.element('//em[text()="Buscar"]').click()
    browser.pause(5000)
    console.log(browser.getTitle())
    

    // pasar a clase HotelResult
    browser.scroll('(//span[@data-ga-el="stars-5"])[1]')
    browser.element('(//span[@data-ga-el="stars-5"])[1]').click()
    browser.pause(1000)

    let valores = browser.elements('//li[@class="hf-pricebox-price col -sm-12 hf-robot-price -eva-3-tc-gray-1"]')
    
    let valoresHoteles = []
    for (let i = 0; i < valores.value.length; i++) {
      let valorAux = valores.value[i].getText().split(' ')[1]
      valoresHoteles.push(parseFloat(valorAux))
    }

    // console.log(browser.windowHandle());

    let valorMin = Math.min.apply(null, valoresHoteles)
    let posValorMin = valoresHoteles.indexOf(valorMin)
    console.log(valoresHoteles);
    // console.log("Valor minimo: " + valorMin);
    // console.log("Posicion valor minimo: " + posValorMin);
    browser.click(`(//li[@class="hf-pricebox-price col -sm-12 hf-robot-price -eva-3-tc-gray-1"])[${posValorMin + 1}]`)
    console.log("Window Handle principal:");
    
    let windowHandles = (browser.windowHandles().value)
    console.log(windowHandles);    
    console.log(windowHandles[1]);
    
    browser.switchTab(windowHandles[1])
    console.log(browser.windowHandle());
    browser.pause(5000)
    console.log(browser.getTitle());
    browser.element('#hf-price-box-best-room > div.hf-see-rooms-button.col.-lg-12 > a > em').click()
    browser.pause(5000)
    
  }
}

export default new HotelHome()