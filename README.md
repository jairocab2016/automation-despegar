# Despegar Automation
<p align="center">
    <a href="http://webdriver.io/">
        <img alt="WebdriverIO" src="http://www.christian-bromann.com/wdio.png" width="546">
    </a>
</p>

*** 

Se realiza automatización de los módulos de vuelos y hoteles para la plataforma [www.despegar.com.ar](https://www.despegar.com.ar/), se utiliza como framework de pruebas [webdriver.io](http://webdriver.io/) utilizando PageObjects como patrón de diseño.

***

## Tecnologías

Las tecnologías propuestas para la construcción del framework de QA Automation UI son las siguientes:
- **Javascript**: Lenguaje de programación para el desarrollo de los test
- **Webdriver.io**: Framework para automatización de UI
- **Mocha**: Framework de creación / ejecución de los casos de prueba
- **Chai**: Framework para utilización de assertions; utilizando el módulo expect
- **Babel**: Framework para trabajar con ES6
- **Allure** : Framework para la generación de reportes

## Requisitos

- Node.js
- Npm

## Instalación
```
$ git clone git@github.com:jairocab2016/automation-despegar.git
$ cd automation-despegar
$ npm install
```

## Ejecución de Test

### Ejecutar todos los tests
```sh
npm test
```

### Ejecutar un test específico

```sh
./node_modules/.bin/wdio --spec specs/vuelo.spec1.js
./node_modules/.bin/wdio --spec specs/vuelo.spec2.js
./node_modules/.bin/wdio --spec specs/hotel.spec3.js
```

## Reporte
Generar reporte
```
npm run report
```
