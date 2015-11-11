/**
 * @description 移除模板文件上的注释
 * @param  {string} content     文件内容
 * @param  {File}   file        fis 的 File 对象 [fis3/lib/file.js]
 * @param  {object} settings    插件配置属性
 * @return {string}             处理后的文件内容
 */
module.exports = function (content, file, settings) {
  //因为模块化之后的文件注释比较多 这里统一做移除处理

  return content.replace(/<!--[\s\S]*?-->/g,'');
};
