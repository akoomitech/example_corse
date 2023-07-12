const devtools = require('@imoka/imoka-mobweb-devtools')
const { Types: { String, Enum, DateTime, ColorSet }, TypesValue } = devtools;

module.exports = {
  component: 'imk.component.view.tpl.akoomi_example_course.SecKillCountDown',

  label: '秒杀倒计时',

  kind: 'Component',

  metadata: {
    prefix: 'sec-kill-count-down',

    labels: {},

    editable: {
      property: {
        enable: true,
      },
      style: {
        enable: true,
      },
      theme: {
        enable: true,
      }
    },
  },

  spec: {
    property: {
      title: String.label('标题').default('秒杀倒计时'),

      format: Enum.label('时间格式').option({
        enums: [ { label: '按天', value: 'day'}, { label: '小时', value: 'hour'}]
      }).default('day'),

      toTime: DateTime.label('截止时间').default('2023-07-20 00:00:00'),
    },

    theme: {
      colors: ColorSet.label('颜色')
        .color({ label: '标题色', default: '#333333'})
        .color({ label: '数字色', default: '#ffffff'})
        .color({ label: '背景色', default: '#333333'})
        .color({ label: '单位色', default: '#333333'})
        .defaultColors()
    }
  },
}