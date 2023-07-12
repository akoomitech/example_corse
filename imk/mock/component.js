const devtools = require('@imoka/imoka-mobweb-devtools')
const { requireImkComp, TypesValue } = devtools;




const SecKillCountDown = requireImkComp('SecKillCountDown').build();

module.exports = {
  SecKillCountDown,
}