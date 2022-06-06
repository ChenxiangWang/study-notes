/**
 * This is simple loader that can help us load the css file.
 *
 * this loader is simple, but in the process of writing this function,
 * a lot of problems has happened.
 *
 * 1. you're   gona understand what css loader doing, from the first try,
 *    you can find out the the css-loader generat a js module. you need
 *    to somehow to get the content from the css-loader
 *    Also, you can find out css-loader has been cooked in path resolved solution,
 *    That is why we are useing it.
 *
 * 2. style-loader use the pitch method.
 *
 * */

// pitch -> css-loader -> style-loader

module.exports = function (content) {
  // first try
  // 1. 只使用style loader,只能处理样式 不能处理样式中引入的资源
  // 2. 尝试使用 ["my-style-loader", "css-loader"] 无法得到正确的问题
  // 原因是 css-loader传递给 my-style-loader的内容是一个js module
  // const script = `
  //     const styleEl = document.createElement('style');
  //     styleEl.innerHTML = ${JSON.stringify(content)};
  //     document.head.appendChild(styleEl);
  // `
  // return script;
};

module.exports.pitch = function (remainingRequest) {
  // remainingRequest: the rest of loaders
  // 1. in remainingRequest: absolute path to relative path
  const relative_paths = remainingRequest
    .split("!")
    .map((abs_path) => {
      return this.utils.contextify(this.context, abs_path);
    })
    .join("!");

  //   a. import the content that css-loader processed
  //   b. create a style element
  const script = `
        import style from "!!${relative_paths}"
        const styleEl = document.createElement('style');
        styleEl.innerHTML = style;
        document.head.appendChild(styleEl); 
    `;
  // interupt the the process of loading other loaders.
  return script;
};
