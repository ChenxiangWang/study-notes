/**
 * This is simple js loader that can be filter out all the 
 * "console.log("xxx")", it is simple but sometimes it is 
 * useful.
 * 
 * A good example to understand what are loaders
 * 
*/

module.exports = function(content) {
    return content.replace(/console\.log\(.*\)\;?/g);
}