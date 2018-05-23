


const GenerateAssetPlugin = require('generate-asset-webpack-plugin');

const config = require('../src/config.json');


function createAppConfig(compilation, packageConfig) {
  return JSON.stringify(
    Object.assign({
      version: packageConfig.version,
      _hash:compilation.hash //用于版本校验
    },config)
  )
}

module.exports = (packageConfig) => {
    return new GenerateAssetPlugin({
      filename:'config/config.json',
      fn:(compilation, cb)=> {
        cb(null,createAppConfig(compilation,packageConfig));
      }
    })
}
