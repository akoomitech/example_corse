const devtools = require('@imoka/imoka-mobweb-devtools');
const { TypesValue } = devtools;

module.exports = {
  pageOptions: {
    background: TypesValue.FillColor.default
  },

  pageProps: {
  },

  pageEditOptions: {
  },
}

// .property({
//   imgzone: TypesValue.ImgZone.Location.path('@/img/leisure_coffee.png').addZoneBuild({
//     pixelPos: {
//       x: 0,
//       y: 0,
//       width: 100,
//       height: 100,
//     },
//     action: {
//       payload: {
//         linkType: 'wl',
//         linkTo: 'http://www.baidu.com'
//       }
//     }
//   })
// })