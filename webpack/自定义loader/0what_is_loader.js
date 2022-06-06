
/**
 * content: the content passed to loader
 * map: the source map help to debug
 * meta: other meta information
 * 
 * This is a loader that return the same content as the passed in
 * 
 * */ 
module.exports = function (content, map, mete) {
    console.log(" hello ~~~~~~~~~~~~~~~~");
    console.log("console.log(1)" + content);
    return content;
}