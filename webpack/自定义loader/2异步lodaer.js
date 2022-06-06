module.exports = function(content) {
    const callback = this.async();
    setTimeout(() => {
        callback(null, content, map, meta);
    })
}