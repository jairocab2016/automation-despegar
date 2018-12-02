export default class Page {
  open (path) {
    browser.url(path)
  }

  cerrarModalPromociones () {
    browser.element('//span[contains(@class, "as-login-close")]').click()
  }
}