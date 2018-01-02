'use strict'

const fs = require('fs')
const grayMatter = require('gray-matter')
const marky = require('marky-markdown')
const css = require('./css')
const author = require('pkgauthor')

module.exports = function parseAndRender(fp, cb) {
  fs.readFile(fp, 'utf8', (err, content) => {
    if (err) return cb(err)
    const parsed = grayMatter(content)
    const meta = parsed.data
    const date = new Date(meta.date)
    if (isNaN(date)) {
      meta.date = formatDate(new Date())
    } else {
      meta.date = formatDate(date)
    }
    meta.author = author(meta.author) || {}
    const out = marky(parsed.content, {
      prefixHeadingIds: false
    })
    cb(null, meta, render(meta, out))
  })
}

function formatDate(d) {
  return `${d.getFullYear()}-${lpad(d.getMonth() + 1)}-${lpad(d.getDate())}`
}

function lpad(a) {
  const s = String(a)
  if (!s.length) return '00'
  if (s.length === 1) return `0${a}`
  if (s.length === 2) return String(a)
  throw new Error('Unreachable')
}

function formatKeywords(keywords) {
  if (keywords) {
    return `<meta name="keywords" content="${keywords}">`
  }

  return ''
}

function formatAuthor(author) {
  // TODO(evanlucas) allow passing a github username

  // url takes precedence over email
  if (author.url && author.name) {
    return `by <a href="${author.url}">${author.name}</a>,`
  }

  if (author.email && author.name) {
    return `by <a href="mailto:${author.email}">${author.name}</a>,`
  }

  if (author.name) return `by ${author.name},`
  return ''
}

function render(meta, input) {
  return `<!doctype html>
<html>
  <head>
    <title>${meta.title || ''}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${formatKeywords(meta.keywords || '')}
    <style>
      ${css}
    </style>
  </head>
  <body>
    <div class="container">
      <h1>${meta.title || ''}</h1>
      <span>${formatAuthor(meta.author)} ${meta.date}</span>
      <hr>
      ${input}
    </div>
  </body>
</html>
`

}
