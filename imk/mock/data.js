const devtools = require('@imoka/imoka-mobweb-devtools')
const component = require('./component');
const { requireImkModule, TypesValue } = devtools;

module.exports = {
  ...component.ImgZone.Data,
  ...component.SecKillCountDown.Data,
}