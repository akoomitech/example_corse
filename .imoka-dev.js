const RenderMode = {
  development: 'development',
  editor: 'editor',
  running: 'running',
  production: 'production'
}

module.exports = {
  renderMode: RenderMode.development,

  htmlConfig: {
    title: '可视化教程',
    keywords: '',
  },

  devServer: {
    proxy: {
    },
  },

  hotReload: {
    debug: false,
    delay: 1500,
    extraExts: [],
    exclusions: [],
  }
}