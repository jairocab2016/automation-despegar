import Page from './page'
let date = require('date-and-time')

class Aerolineas extends Page {
  get origenInput () { return $('//input[@placeholder="Origen"]') }
  get destinoInput () { return $('//input[@placeholder="Destino"]') }

  open (url) {
    super.open(url)
    // super.open('http://frontend-shopping.arsa-int/')
  }

  ingresarOrigen (origen) {
    // this.origenInput.setValue(origen)
    // browser.pause(4000)
    // $('//*[@id="react-autowhatever-1"]//li').click()
    this.origenInput.setValue(origen)
    browser.pause(3000)
    browser.keys('Down arrow')
    browser.keys('Enter')
  }

  ingresarDestino (destino) {
    this.destinoInput.setValue(destino)
    browser.pause(4000)
    $('//*[@id="react-autowhatever-1"]//li').click()
  }

  ingresarFechaPartida () {
    // // document.getElementsByTagName('input')[5].setAttribute('value', 'mi - 24/10')
    // browser.execute(function () {
    //   document.getElementsByTagName('input')[5].setAttribute('value', 'mi - 24/10')
    // })
    $('//div[text()="Partida"]/..//input').click()
    $('//div[@aria-label="Tue Nov 06 2018" and @role="gridcell"]').click()
  }

  ingresarFechaRegreso () {
    // browser.execute(function () {
    //   document.getElementsByTagName('input')[6].setAttribute('value', 'ju - 08/11')
    // })
    $('//div[text()="Regreso"]/..//input').click()
    // $('//div[@role="gridcell" and @aria-label="Sat Nov 24 2018"]').click()
    $('//div[contains(@aria-label, "Nov 24 2018")]').click()
    // mes = "Nov"
    // while($('//div[contains(@aria-label, "Nov 24 2018")]').isVisible())
  }

  buscarVuelo () {
    $('//button[text()="BUSCAR VUELOS"]').click()
  }

  cerrarModalAvantrip () {
    browser.element('(//div[@title="Close"])[1]').waitForVisible()
    $('(//div[@title="Close"])[1]').click()
    browser.pause(2000)
  }

  ingresarOrigenAvantrip (origen) {
    $('(//input[contains(@placeholder,"Ingresar la ciud")])[1]').setValue(origen)
    browser.pause(3000)
    browser.keys('Enter')
  }

  ingresarDestinoAvantrip (destino) {
    $('(//input[contains(@placeholder,"Ingresar la ciud")])[2]').setValue(destino)
    browser.pause(3000)
    browser.keys('Enter')
  }

  ingresarFechaPartidaAvantrip (fecha) {
    // se divide fecha para poder manejarlo
    fecha = fecha.split('-')
    const dia = fecha[0].toString()
    const mes = fecha[1].toString()
    const anio = fecha[2].toString()

    // se valida que la fecha no sea menor al día actual
    if (new Date() > new Date(anio, parseInt(mes, 10) - 1, parseInt(dia, 10) + 1)) {
      throw new Error('La Fecha ingresada no puede ser menor a la fecha actual')
    }

    let mesesMap = {
      '01': 'enero',
      '02': 'febrero',
      '03': 'marzo',
      '04': 'abril',
      '10': 'octubre',
      '11': 'noviembre',
      '12': 'diciembre'
    }

    browser.click('#startDate')
    let meses = browser.elements('//caption/strong')

    for (let i = 0; i < meses.value.length; i++) {
      const element = meses.value[i].getText()
      if (element === mesesMap[mes] + ' ' + anio) {
        let diaAux = dia
        if (parseInt(dia, 10) < 10) {
          diaAux = dia.split('')[1].toString()
        }
        browser.element(`//caption/strong[text()="${mesesMap[mes]} ${anio}"]/../../../table//button[text()="${diaAux}"]`).click()
      }
    }
  }

  ingresarFechaRegresoAvantrip (fecha) {
    // se divide fecha para poder manejarlo
    fecha = fecha.split('-')
    const dia = fecha[0].toString()
    const mes = fecha[1].toString()
    const anio = fecha[2].toString()

    console.log(dia)
    console.log(mes)
    console.log(anio)

    let mesesMap = {
      '01': 'enero',
      '02': 'febrero',
      '03': 'marzo',
      '04': 'abril',
      '10': 'octubre',
      '11': 'noviembre',
      '12': 'diciembre'
    }

    browser.click('#endDate')
    let meses = browser.elements('//caption/strong')

    for (let i = 0; i < meses.value.length; i++) {
      const element = meses.value[i].getText()
      if (element === mesesMap[mes] + ' ' + anio) {
        let diaAux = dia
        if (parseInt(dia, 10) < 10) {
          diaAux = dia.split('')[1].toString()
        }
        console.log(diaAux)
        browser.element(`//caption/strong[text()="${mesesMap[mes]} ${anio}"]/../../../table//button[text()="${diaAux}"]`).click()
      }
    }
  }

  ingresarFechaVueloAvantrip (ida, vuelta) {
    ida = ida.split('-')
    const diaIda = ida[0].toString()
    const mesIda = ida[1].toString()
    const anioIda = ida[2].toString()

    vuelta = vuelta.split('-')
    const diaVuelta = vuelta[0].toString()
    const mesVuelta = vuelta[1].toString()
    const anioVuelta = vuelta[2].toString()

    // se valida que la fecha no sea menor al día actual
    if (new Date() > new Date(anioIda, parseInt(mesIda, 10) - 1, parseInt(diaIda, 10) + 1)) {
      throw new Error('La Fecha ingresada no puede ser menor a la fecha actual')
    }

    let mesesMap = {
      '01': 'enero',
      '02': 'febrero',
      '03': 'marzo',
      '04': 'abril',
      '10': 'octubre',
      '11': 'noviembre',
      '12': 'diciembre'
    }

    browser.click('#startDate')
    let meses = browser.elements('//caption/strong')

    for (let i = 0; i < meses.value.length; i++) {
      const element = meses.value[i].getText()
      if (element === mesesMap[mesIda] + ' ' + anioIda) {
        console.log("Ingrese en el if 1")
        
        let diaAux = diaIda
        if (parseInt(diaIda, 10) < 10) {
          diaAux = diaIda.split('')[1].toString()
          console.log("Ingrese en el if 2")
          
        }
        browser.element(`//caption/strong[text()="${mesesMap[mesIda]} ${anioIda}"]/../../../table//button[text()="${diaAux}"]`).click()
        console.log("Pase primir elemento")
        
        browser.pause(3000)
        browser.element('//caption/strong[text()="diciembre 2018"]/../../../table//button[text()="25"]').click()
        console.log("Pase segundo elemento")
        browser.pause(3000)
        browser.element('//button[text()="BUSCAR VUELOS"]').click()
        browser.pause(3000)
        browser.keys('Escape')
      }
    }

    // for (let i = 0; i < meses.value.length; i++) {
    //   const element = meses.value[i].getText()
    //   if (element === mesesMap[mesVuelta] + ' ' + anioVuelta) {
    //     console.log('Pase la validación')
    //     let diaAux = diaVuelta
    //     if (parseInt(diaVuelta, 10) < 10) {
    //       diaAux = diaVuelta.split('')[1].toString()
    //     }
    //     console.log(diaAux)
    //     console.log(mesesMap[mesVuelta])
    //     console.log(anioVuelta)
    //     console.log(`//caption/strong[text()="${mesesMap[mesVuelta]} ${anioVuelta}"]/../../../table//button[text()="${diaAux}"]`)
    //     browser.pause(4000)
    //     browser.element(`//caption/strong[text()="${mesesMap[mesVuelta]} ${anioVuelta}"]/../../../table//button[text()="${diaAux}"]`).click()
    //   }
    // }
  }

  buscarVueloAvantrip () {
    $('//button[contains(@class, "SearchButton")]').click()
  }
}

export default new Aerolineas()
