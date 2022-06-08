/**
 * 作用：给打包输出文件添加作者注释
 * 
 * 开发思路：
 * 需要打包输出前添加注释：需要使用complier.hooks.emit钩子，它是打包输出前触发的
 * 如何获取打包输出的资源？ complier.asserts 可以获取所有即将输出的资源文件
 * 
*/
class BannerWebpackPlugin {

    constructor(options = {}) {
        this.options = options;
    }
    
    apply(complier) {
        complier.hooks.emit.tapAsync('BannerWebpackPlugin', (complilation, callback) => {
            const extensions = ["css", "js"];
            // 获取资源 并 过滤资源
            console.log(Object.keys(complilation.assets));
            const assets = Object.keys(complilation.assets).filter(assetPath => {
                const splitted = assetPath.split('.');
                const enxtension = splitted[splitted.length - 1];
                return extensions.includes(enxtension);
            })
            // 遍历资源 并 添加注释
            const prefix = `
            /**
             * author: ${this.options.author} 
            */
            `;

            assets.forEach(asset => {
                const source = complilation.assets[asset].source();
                const content = prefix + source;
                // 修改资源 内容和大小
                complilation.assets[asset] = {
                    source() {
                        return content;
                    }, 
                    size() {
                        return content.length;
                    } 
                }
            })
            callback();
        })
    }
}

module.exports = BannerWebpackPlugin;