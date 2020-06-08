var postcss = require('postcss')

module.exports = postcss.plugin('postcss-rpx-loader', function({ fontSize = 100 } = {}) {
  return function(root) {
    root.walkRules(function(rule) {
      rule.walkDecls(function(decl) {
        if (decl.value.includes('rpx')) {
          decl.value = decl.value.replace(/(\d+)(rpx)/g, (match, p1) => {
            const newP1 = (p1 / fontSize).toFixed(2)
            const newP2 = 'rem'
            return newP1 + newP2
          })
        }
      })
    })
  }
})

