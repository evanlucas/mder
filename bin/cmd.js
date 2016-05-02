#!/usr/bin/env node

'use strict'

const help = require('help')()
const args = process.argv.splice(2)

const input = args.shift()
const output = args.shift()

if (!input || !output) {
  return help(1)
}

if (input === '-h' || input === '--help') {
  return help(0)
}

if (input === '-v' || input === '--version') {
  console.log('mder', `v${require('../package').version}`)
  return
}

const parse = require('../lib/parse-and-render')
const fs = require('fs')
const path = require('path')

parse(input, (err, meta, content) => {
  if (err) throw err
  fs.writeFile(output, content, 'utf8', (err) => {
    if (err) throw err
    console.log()
  })
})
