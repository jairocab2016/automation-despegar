import Page from '../page'

class VueloResult extends Page {
    
    // definimos metodos

    seleccionarVueloMasCaro () {
        browser.pause(3000)
        let precios

        if(browser.isVisible('//em[text()="Precio final"]/..//span[@class="amount price-amount"]')) {
            precios = browser.elements('//em[text()="Precio final"]/..//span[@class="amount price-amount"]')
        } else {
            precios = browser.elements('//div[@data-index]//em/span[contains(@class, "price-amount")]')
        }
        
        // browser.debug()
        let preciosValor = []        
        for (let i = 0; i < precios.value.length; i++) {
            preciosValor.push(parseFloat(precios.value[i].getText()))
            console.log("entre en el for");            
        }

        console.log(preciosValor);        

        let valorMax = Math.max.apply(null, preciosValor)
        console.log("Valor Maximo: " + valorMax)
        
        let posValorMax = preciosValor.indexOf(valorMax)
        console.log("Posición de valor maximo: " + posValorMax);
        
        browser.scroll(`(//a[@tooltip-component="buy-button-tooltip"])[${posValorMax + 1}]`)
        browser.element(`(//a[@tooltip-component="buy-button-tooltip"])[${posValorMax + 1}]`).click()
        browser.pause(2000)
        
        console.log(browser.getTitle());
        
    }
}

export default new VueloResult()