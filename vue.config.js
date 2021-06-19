const px2rem = require('postcss-plugin-px2rem')

function createPageConfig (path, pageMap) {
  const config = {}
  const kebabCase = str => {
    return str.replace(/([A-Z])/g, '-$1')
      .replace(/[_.\- ]+/g, '-')
      .toLowerCase()
  }
  Object.entries(pageMap).forEach(([ entry, pageConfig ]) => {
    config[entry] = {
      entry: `src/pages/${entry==='mobile'?'mobile': 'px/'+ entry}/main.js`,
      template: 'public/index.html',
      filename: `${kebabCase(entry)}/index.html`,
      title: 'swan',
      chunks: ['chunk-vendors', 'chunk-common', entry],
      ...pageConfig
    }
  })
  return config
}
module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "~@/assets/style/color.scss";
            @import "~@/assets/style/fn.scss";
          `
        },
        postcss: {
          plugins: [
            px2rem({
              rootValue: 75,
              exclude: /px|node_modules/,
              include: /mobile/
            })
          ]
        }
      }
    },
    productionSourceMap: false,
    pages: createPageConfig('src/pages', {
      web: {
        template: 'public/web.html'
      },
      mobile: {
        template: 'public/mobile.html'
      },
      console: {
        template: 'public/console.html'
      }
    }),
    lintOnSave: true,
    productionSourceMap: false,
    outputDir: 'build'
  }