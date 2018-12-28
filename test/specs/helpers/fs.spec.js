/* global describe it */
/* eslint no-unused-expressions: 0 */
const { expect } = require('chai')
const path = require('path')
const fs = require('../../../src/helpers/fs')

describe('Fs Helper', () => {
  it('Test if a file can be read', async () => {
    let content = await fs.readFile(path.join(__dirname, '/fsTestPayload.json'))
    let json = null

    expect(content instanceof Buffer).to.be.true
    json = JSON.stringify(JSON.parse(content.toString()))
    expect(json).to.be.equal(JSON.stringify({ foo: 'bar' }))
  })
  it('Test if a file doesn\'t exist', async () => {
    try {
      await fs.readFile(path.join(__dirname, '/random-file.json'))
      // Throw an error because it should not find a file
      expect(false).to.be.true
    } catch (e) {
      expect(true).to.be.true
    }
  })
})
