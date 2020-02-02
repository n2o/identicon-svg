#!/usr/bin/env node
const image_width = 400

if (process.argv.length <= 2) {
    console.log("Usage: node ./start.js <name-to-be-identiconified>")
    console.log('Please provide at least a name which should be identiconified. Exiting.')
    process.exit(1)
}

const name = process.argv[2]

console.log('Received the following name:', name)
console.log('Generating Identicon...')

const jdenticon = require("jdenticon"),
    fs = require("fs"),
    svg = jdenticon.toSvg(name, image_width),
    fileOnDisk = "./" + name + ".svg"

fs.writeFileSync(fileOnDisk, svg)
console.log('Done. Wrote', fileOnDisk)