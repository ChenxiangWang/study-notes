let s = '[[],[1,2],1,2,3,4,[1,2,3,1],[[]]]';

function toArray(s) {
    let stack = [];
    let tmp = ''
    for (let c of s) {
        if (c === '[') {
            stack.push(c);
        } else if ( c === ',') {
            if (tmp) { // ], 这种情况可能会添加多余的空字符
                stack.push(tmp);
                tmp = '';
            }
        } else if (c === ']') {
            if (tmp) { // ,3] 这种情况
                stack.push(tmp);
                tmp = ''
            }
            let l = [];
            while (stack[stack.length-1] !== '[') {
                l.unshift(stack.pop());
            }
            stack.pop();
            stack.push(l);
        } else {
            tmp = tmp+c;
        }
    }
    return stack[0];
}

console.log(toArray(s));