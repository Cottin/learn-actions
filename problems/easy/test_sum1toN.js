import assert from 'assert'
import tests from './sum1toN.js'

const [testDefs] = tests
const [fn] = testDefs


describe("sum1toN", () => {
  it("3", () => assert.strictEqual(fn(3), 6))
  it("4", () => assert.strictEqual(fn(4), 10))
  it("9", () => assert.strictEqual(fn(9), 45))
  it("80", () => assert.strictEqual(fn(80), 3240))
  it("231", () => assert.strictEqual(fn(231), 26796))
  it("4021", () => assert.strictEqual(fn(4021), 8086231))
})

