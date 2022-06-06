const loaderUtils = require("loader-utils"); 

/**
 * This a loader for loader files, because file loaders are pretty similar,
 * so we only show how to load a image file.
 * 
 * points need to focus on:
 * 1. loaderUtils: this is helper function from webpack that help can us
 *    to generate a hash name for a file.
 * 2. this.emitFile is function that exports a file to output path that we
 *    indicated in the "webpack.config.js"
 * 3. because the output is buffer, so that need to indicate it by
 *    module.exports.raw = true;
 * 
*/
module.exports =  function (content) {
    // 图片 字体 都是buffer数据 需要使用row loader
    // 1. 根据文件内容生成带hash值的文件名
    // 2. 将文件输出出去
    // 3. 返回文件路径
    const interpolatedName = loaderUtils.interpolateName(this, "[hash].[ext][query]", {
        content 
    }); 
    //console.log(interpolatedName, content);
    this.emitFile(interpolatedName, content);
    return `module.exports = "${interpolatedName}"`;
}

module.exports.raw = true; // buffer  data