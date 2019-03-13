/* global describe it */
const { expect } = require('chai')
const path = require('path')
const CherryHandlebarsConnector = require('../../src/connector')

describe('CherryHandlebarsConnector class', () => {
  const connector = new CherryHandlebarsConnector({ viewEngine: 'utf8' })
  const connectorWithoutConfig = new CherryHandlebarsConnector()

  it('Test the identifier constant', () => {
    expect(CherryHandlebarsConnector.getIdentifier()).to.be.equal('ViewEngine')
  })
  it('Test to load an html file', async () => {
    await connector.loadTemplate(path.join(__dirname, '/view-test.html'))

    expect(connector.source).to.not.be.equal(null)
  })
  it('Test to use raw html', () => {
    connectorWithoutConfig.useHtml('<div>This is a test {{ testName }}</div>')

    expect(connectorWithoutConfig.source).to.not.be.equal(null)
  })
  it('Test the variable binding and the renderer', () => {
    connector.bindTemplate({ testName: 'connector' })
    connectorWithoutConfig.bindTemplate({ testName: 'connectorWithoutConfig' })

    // Usage of trim to remove the crlf characters
    expect(connector.getRenderedHtml().trim()).to.be.equal('<div>This is a test connector</div>')
    expect(connectorWithoutConfig.getRenderedHtml().trim()).to.be.equal('<div>This is a test connectorWithoutConfig</div>')
  })
})
