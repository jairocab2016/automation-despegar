export default class Page {
  open(path) {
    browser.url(path)
  }

  cerrarModalPromociones() {
    browser.waitForVisible('//span[contains(@class, "as-login-close")]', 5000)
    browser.element('//span[contains(@class, "as-login-close")]').click()
  }

  sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  fechaSumarDias(masDias) {
    let fecha = this.sumarDias(new Date(), masDias)
    let dia = fecha.getDate()
    if (dia < 10) {
      dia = "0" + dia.toString()
    }
    let mes = fecha.getMonth() + 1
    if (mes < 10) {
      mes = "0" + mes.toString()
    }
    let anio = fecha.getFullYear()
    return `${dia}-${mes}-${anio}`
  }

  ingresarFecha(fecha) {
    fecha = fecha.split('-')
    const dia = fecha[0].toString()
    const mes = fecha[1].toString()
    const anio = fecha[2].toString()

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
      '06': 'Junio',
      '07': 'Julio',
      '08': 'Agosto',
      '09': 'Septiembre',
      '10': 'Octubre',
      '11': 'Noviembre',
      '12': 'Diciembre'
    }

    let vuelosBoolean = browser.getUrl().includes('vuelos')
    if (!browser.element('//div[@data-show-additional-days]/div[2]').isVisible()) {
      if (vuelosBoolean) {
        browser.element('//input[contains(@class, "sbox-bind-reference-flight-start-date-input")]').click()
      } else {
        browser.element('//input[contains(@class, "sbox-checkin-date")]').click()
      }
    }

    let diaAux = dia
    if (parseInt(dia, 10) < 10) {
      diaAux = dia.split('')[1].toString()
    }

    while (!browser.element(`//span[text()="${mesesMap[mes]}"]/../..//span[text()="${diaAux}"]`).isVisible()) {
      browser.click('//div[@class="_dpmg2--controls-next"]')
    }
    browser.click(`//span[text()="${mesesMap[mes]}"]/../..//span[text()="${diaAux}"]`)
  }
}