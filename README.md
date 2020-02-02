# Generate Identicons as SVG

This project generates Identicons as they are commonly used e.g. on GitHub:

![sample.svg](sample.svg)

## Usage

Requirements: nodejs, yarn / npm

Install dependencies:

    yarn install

Create custom identicon:

    node ./start.js sample

The result will be stored next to this script, in this case into
[sample.svg](sample.svg)

## Software Used

This software is based on the great work of the contributors and these projects:

* [nodejs](https://github.com/nodejs/node)
* [jdenticon](https://github.com/dmester/jdenticon)