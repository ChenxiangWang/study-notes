/**
 * 目的： 在即将输出文件之前 将 文件清空
 * 1. 获取输出目录
 * 2. 操作文件
 * */
const { Compilation } = require("webpack");
 

class CleanWebPackPlugin {
    apply(complier) {
        //1. 注册钩子 在打包输出之前 emit
        complier.hooks.emit.tap('CleanWebPackPlugin', (Compilation) => {
             //2. 获取打包输出的目录
            const outputPath =  complier.options.output.path;
            //3. 通过fs删除打包输出的目录下的所有文件
            const fs = complier.outputFileSystem;
            //4. 递归删除目录 + 文件

            removeFile(fs, outputPath);

            function removeFile(fs, filePath) {
                // 读取当前目录下的资源
                const files = fs.readdirSync(filePath);
                // 遍历一个个的删除
                files.forEach(file => {
                    const path = `${filePath}/${file}`;
                    const fileStat = fs.statSync(path);
                    if (fileStat.isDirectory()) {
                        removeFile(fs, path);
                    } else {
                        fs.unlinkSync(path); 
                    }
                })
                // 
            }
        })
    }
}

module.exports = CleanWebPackPlugin;