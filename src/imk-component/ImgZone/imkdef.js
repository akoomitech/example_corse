const devtools = require('@imoka/imoka-mobweb-devtools')
const { Types: { String, ImgZone }, TypesValue } = devtools;

module.exports = {
  component: 'imk.component.view.tpl.akoomi_example_course.ImgZone',

  label: '图片热区',

  kind: 'Component',

  metadata: {
    prefix: 'img-zone',

    labels: {},

    editable: {
      property: {
        enable: true,
      },
      style: {
        enable: true,
      }
    },
  },

  spec: {
    property: {
      imgzone: ImgZone.label('选择图片').default(TypesValue.ImgZone.Location.pathBuild('@/img/leisure_coffee.png')),
    },
  },
}