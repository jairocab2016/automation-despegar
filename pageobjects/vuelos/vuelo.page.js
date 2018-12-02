import Page from '../page'

class VuelosDespegar extends Page {

  // Definimos los elementos
  get inputOrigen () { browser.element('')}


  //Definimos metodos
  open () {
    super.open('vuelos')
    browser.pause(3000)
    this.cerrarModalPromociones()
    browser.pause(3000)    
  }

  ingresarOrigen () {
    
  }
}

export default new VuelosDespegar ()