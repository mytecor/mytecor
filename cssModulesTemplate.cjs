const _ = require('lodash')

const { parse } = require('node:path')

module.exports = (dts, { fileName }) => {
  const file = parse(fileName).name.replace(/\..*/, '')

  return dts.replace(/export let (\w+)/g, (match, className) => {
    const name = _.upperFirst(className).replace(
      new RegExp(`^${file}`, 'g'),
      '',
    )

    return `export let $${file}${name}`
  })
}
