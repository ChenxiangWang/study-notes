// 同步loader

module.exports = function(content, map, meta) {
    /* 
    *   p1: error message
    *   p2: the processed content
    *   p3: source map
    *   p4: the parameters to next loaders
    */ var p1 = new Error()
    this.callback(null, content, map, meta);
}