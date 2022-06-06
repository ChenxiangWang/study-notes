/**
 *  In this loder, the features practised are "schema", "async loader",
 *  and "babel"
 *  
 *  This is a simple loader that transform ES6+ to ES5 by using the external
 *  helper from "babel"
 *   
 * */ 

const schema = {
    "type": "object",
    "properties": {
        "presets": {
            "type": "array",
        },
    },
}
const babel = require("@babel/core")
module.exports = function (content) {
    const callback = this.async();    
    const options = this.getOptions(schema);
    babel.transform(content, options, function (err, result) {
         if (err) {
            callback(err);
         } else {
            callback(null, result.code);
         }
    });
}  