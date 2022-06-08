const { Compilation } = require("webpack");

/**
 *  分析打包生成的资源的大小
 *  md：
 *  ｜资源名称 ｜ 资源大小 ｜
 *  ｜ ---   ｜ —————— ｜
 *  ｜ xxx   ｜  xxx    ｜
 * */ 

class AnalyzeWebpackPlugin {
    apply(complier) {
        complier.hooks.emit.tap('AnalyzeWebpackPlugin', compilation => {
            // 1. 遍历所有即将输出的文件，得到其大小
            const assets = Object.entries(compilation.assets);
            // 2. 生成一个md文件
            let content = `| 资源名称 | 资源大小 |\n| --- | --- |`;

            assets.forEach(([filename, file]) => {
                 content += `\n| ${filename} | ${file.size()} |`;
            });
            compilation.assets['analyze.md'] = {
                source() {
                    return content;
                },
                size() {
                    return content.length;  
                },
            };
          });    
    }
}
module.exports = AnalyzeWebpackPlugin;