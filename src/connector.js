const Handlebars = require('handlebars')
const fs = require('./helpers/fs')

/**
 * The connector to use Handlebar with cherry
 * You can register it as a plugin using this following code
 * @example
 * const Cherry = require('@lundOrg/cherry')
 * const CherryHandlebarsConnector = require('@lundOrg/cherry-handlebars-connector')
 *
 * const cherry = new Cherry()
 * cherry.configure(your_routes, [], your_options)
 * cherry.registerPlugin(CherryHandlebarsConnector)
 * cherry.start(options)
 */
class CherryHandlebarsConnector {
  /**
   * The connector to use Handlebar with cherry
   */
  constructor (configuration = {}) {
    if (typeof configuration.viewEngine !== 'undefined') {
      this.configuration = configuration.viewEngine
    } else {
      this.configuration = {}
    }
    this.source = null
    this.renderedHtml = null
  }

  /**
   * Get the type of plugin
   * @return {string}
   */
  static getIdentifier () {
    return 'ViewEngine'
  }

  /**
   * Load a file as a source
   * @param {string} filePath The path to the view to render
   */
  async loadTemplate (filePath) {
    const fileContent = await fs.readFile(filePath, this.configuration)
    this.source = Handlebars.compile(fileContent.toString())
  }

  /**
   * Use a string as the html to render
   * @param {string} source The raw html to use
   */
  useHtml (source) {
    this.source = Handlebars.compile(source)
  }

  /**
   * Bind the variables to the template
   * @param {object} variables The variables to insert in the template
   */
  bindTemplate (variables = {}) {
    this.renderedHtml = this.source(variables)
  }

  /**
   * Retrieve the html after the variable replacement
   * @return {string}
   */
  getRenderedHtml () {
    return this.renderedHtml
  }
}

module.exports = CherryHandlebarsConnector
