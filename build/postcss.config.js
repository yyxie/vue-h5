module.exports = {
  plugins: [
    require('postcss-px2rem')({ remUnit: 75, propWhiteList: [], baseDpr:2, min: 2})
  ]
}
