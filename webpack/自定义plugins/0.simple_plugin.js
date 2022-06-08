/**
 * 目的：这一个小节的目的是熟悉API
 * 
 * 1. webpack will automatically configure itself with "webpack.config.js",
 *    at this moment, new TestPlugin() will be executed.
 * 2. webpack will create a 'compiler' 对象
 * 3. webpack will go through all plugins and invoke the 'apply' methods
 * 4. run rest of the process (like a pipline  )
 * 
 * */ 
class TestPlugin {
    constructor() {
        console.log("Test plugin constructor");
    }

    apply(compiler) {
        console.log("apply plugin")
        // environment is a sync hook
        compiler.hooks.environment.tap("TestPlugin", (complilation)=> {
            console.log("Test plugin environment");
        })
        // emit 发射文件之前执行，emit是同步执行的钩子，即处理事件函数是一个接一个的触发
        compiler.hooks.emit.tap("Test emit", (complilation) => {
            console.log("Test plugin emit");
        })
        // 异步串行
        compiler.hooks.emit.tapAsync("TestPlugin", (complilation, callback) => {
            // 可以执行异步操作
            console.log("Test plugin emit async");
            callback();
        })
        // 异步串行
        compiler.hooks.emit.tapPromise("TestPlugin", (complilation) => {
            return new Promise((resolve, reject) => {
                // 可以执行异步操作
                console.log("Test plugin emit promise");
                resolve();
            })
        })

        // 异步 并行的钩子 make，函数全部一起触发，是并行的。
        compiler.hooks.make.tapAsync("TestPlugin", (complilation, callback)=> {
            complilation.hooks.seal.tap("Test plugin seal", () => {
                console.log("Test plugin seal");
            })
            
            setTimeout(() => {
                console.log("Test plugin 3s")
                callback()
            },3000)
        });

        compiler.hooks.make.tapAsync("TestPlugin", (complilation, callback)=> {
            setTimeout(() => {
                console.log("Test plugin 1s")
                callback()
            },1000)
        });

        compiler.hooks.make.tapAsync("TestPlugin", (complilation, callback)=> {
            setTimeout(() => {
                console.log("Test plugin 2s")
                callback()
            },2000)
        });
    }
}
module.exports = TestPlugin;
