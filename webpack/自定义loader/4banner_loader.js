/**
 *  This is a simple loader for adding author information.
 *  One new feature learned is that "schema", it is an object that
 *  can describe what is inside of an JSON.
 *  schema could be used to validate the input options
 * 
 *  
 *  This also a simple JS loader for understanding how to define your
 *  own loaders.
 * */ 


// new point learned
const schema = {
    "type:": "object",
    "properties": {
        "author": {
            "type": "string",
        }
    },
    "additionalProperties": false,
}


module.exports = function(content) {
    
    const options = this.getOptions(schema);
    const prefix = `
        /**
         *  Author: ${options.author}
        */
    `
    return prefix + content;
}