'use strict'

module.exports = `
html, body {
  font-family: 'Helvetica Neue', arial, freesans, clean, sans-serif;
  font-size: 16px;
}

.container {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  font-weight: 300;
  color: #333;
  font-size: 36px;
  margin: 0.5em 0em;
  position: relative;
  line-height: 30px;
}

h2 {
  font-size: 28px;
  color: #333;
  margin: 0.5em 0em;
  font-weight: 300;
}

h3 {
  font-size: 24px;
  color: #333;
  margin: 1.5em 0 .5em;
}

h4 {
  font-size: 18px;
  color: #333;
  margin: 1.5em 0 .5em;
}

a,
a:visited {
  color: #333;
}

a:hover {
  color: #327fc7;
}

.deep-link a,
.deep-link a[hover] {
  color: #333;
  text-decoration: none;
}

hr {
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.editor {
  background-color: #1e2028;
  color: #fff;
}
.wrap-guide {
  background-color: #494C5A;
}
.indent-guide {
  color: #494C5A;
}
.gutter {
  background-color: #1e2028;
  color: #c5c8c6;
}
.gutter .line-number.cursor-line {
  background-color: #313131;
  color: #c5c8c6;
}
.gutter .line-number.cursor-line-no-selection {
  color: #c5c8c6;
}
.gutter .line-number.folded,
.gutter .line-number:after,
.fold-marker:after {
  color: #969896;
}
.invisible {
  color: #fff;
}
.cursor {
  color: white;
}
.selection .region {
  background-color: #065ca7;
}
.invisible-character {
  color: #313131;
}
.search-results .marker .region {
  background-color: transparent;
  border: 1px solid #969896;
}
.search-results .marker.current-result .region {
  border: 1px solid white;
}
.comment {
  color: #45b641;
}
.entity.name.type {
  color: #f0c674;
  text-decoration: underline;
}
.entity.other.inherited-class {
  color: #45b641;
}
.entity.other.attribute-name {
  color: #fff;
}
.entity.other.attribute-name.jade {
  color: #00a0be;
}
.entity.name.function {
  color: #00a0be;
}
.keyword {
  color: #b21889;
}
.keyword.control {
  color: #b21889;
}
.keyword.operator {
  color: #fff;
}
.keyword.other.special-method {
  color: #1a76d1;
}
.keyword.other.unit {
  color: #786dc4;
}
.keyword.typeof,
.keyword.new {
  color: #b21889;
}
.storage {
  color: #b21889;
}
.constant {
  color: #fff;
}
.constant.character.escape {
  color: #00a0be;
}
.constant.numeric {
  color: #786dc4;
}
.constant.other.color,
.constant.other.rgb-value {
  color: #786dc4;
}
.constant.other.symbol {
  color: #45b641;
}
.constant.null,
.constant.boolean {
  color: #b21889;
}
.variable {
  color: #83c057;
}
.variable.interpolation {
  color: #6aa63e;
}
.variable.parameter.function {
  color: #fff;
}
.invalid.illegal {
  background-color: #db2c38;
  color: #1e2028;
}
.string {
  color: #db2c38;
}
.string.regexp {
  color: #db2c38;
}
.string.regexp .source.ruby.embedded {
  color: #786dc4;
}
.string.other.link {
  color: #1a76d1;
}
.punctuation.definition.comment {
  color: #45b641;
}
.punctuation.definition.variable,
.punctuation.definition.parameters,
.punctuation.definition.array {
  color: #fff;
}
.punctuation.definition.heading,
.punctuation.definition.identity {
  color: #1a76d1;
}
.punctuation.definition.bold {
  color: #f0c674;
  font-style: bold;
}
.punctuation.definition.italic {
  color: #786dc4;
  font-style: italic;
}
.punctuation.definition.string {
  color: #db2c38;
}
.punctuation.section.embedded {
  color: #b51f29;
}
.support.class {
  color: #f0c674;
}
.support.function {
  color: #00a0be;
}
.support.function.any-method {
  color: #1a76d1;
}
.support.constant.property-value {
  color: #b21889;
}
.entity.name.function {
  color: #00a0be;
}
.entity.name.class,
.entity.name.type.class {
  color: #f0c674;
}
.entity.name.section {
  color: #1a76d1;
}
.entity.name.tag {
  color: #db2c38;
  text-decoration: underline;
}
.entity.other.attribute-name {
  color: #fff;
}
.entity.other.attribute-name.id {
  color: #1a76d1;
}
.meta.class {
  color: #f0c674;
}
.meta.link {
  color: #c67c48;
}
.meta.require {
  color: #1a76d1;
}
.meta.selector {
  color: #786dc4;
}
.meta.separator {
  background-color: #313131;
  color: #fff;
}
.none {
  color: #fff;
}
.markup.bold {
  color: #c67c48;
  font-style: bold;
}
.markup.changed {
  color: #786dc4;
}
.markup.deleted {
  color: #db2c38;
}
.markup.italic {
  color: #786dc4;
  font-style: italic;
}
.markup.heading .punctuation.definition.heading {
  color: #1a76d1;
}
.markup.inserted {
  color: #45b641;
}
.markup.list {
  color: #db2c38;
}
.markup.quote {
  color: #c67c48;
}
.markup.raw.inline {
  color: #45b641;
}
.source.gfm .markup {
  -webkit-font-smoothing: auto;
}
.source.gfm .markup.heading {
  color: #45b641;
}
.editor[mini] .scroll-view .selection .region {
  background-color: #065ca7;
}
.editor[mini] .selection .region,
.editor[mini]::shadow .selection .region,
.highlights .selection .region {
  background-color: #065ca7;
}
.editor[mini].is-focused .selection .region,
.editor[mini].is-focused::shadow .selection .region {
  background-color: #065ca7;
}

.editor {
  font-size: 16px;
  font-family: Monaco;
}

pre {
  padding: 5px;
}
`
