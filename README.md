# vue-project（使用vue-cli脚手架生成项目结构，通过使用rem的方式进行手机端的适配）

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## 用到的技术
``` bash
#postcss-pxtorem
将px转化位rem
remUnit: 75,//rem对应px值
propWhiteList: ['width'],同 propList: ['width']，指定哪些属性可以被转化位rem
minPixelValue: 2,//小于这个值不转化位rem
关于postcss-pxrem见。postcssrc.js
或者在webpack中plugins中添加
 new webpack.LoaderOptionsPlugin({
 // webpack 2.0之后， 此配置不能直接写在自定义配置项中， 必须写在此处
 vue: {
 postcss: [require('postcss-px2rem')({ remUnit: 75, propWhiteList: [] })]
 },
 })
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
