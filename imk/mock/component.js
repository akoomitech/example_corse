const devtools = require('@imoka/imoka-mobweb-devtools')
const { requireImkComp, TypesValue } = devtools;

const SecKillCountDown = requireImkComp('SecKillCountDown').build();


const ImgZone = requireImkComp('ImgZone')
  .property({
    imgzone: TypesValue.ImgZone.Location.path('@/img/leisure_coffee.png').addZoneBuild({
      pixelPos: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
      },
      action: {
        payload: {
          linkType: 'wl',
          linkTo: 'http://www.baidu.com'
        }
      }
    })
  })
  .build();

module.exports = {
  ImgZone,
  SecKillCountDown,
}