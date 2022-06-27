/*
*
* 给一个十进制数 (假设是 n 位数)，要求从数字中剔除 k 个数字，使得剔除之后形成的 n - k 个数字组成的数最小，并求这个数。
* */

// O(n)
function transformNumberToArray(number) {
    let numString = number + ''; // O(n)
    let numsChars = numString.split(''); // O(n)
    return numsChars.map(n => parseInt(n, 10)); // O(n)
}

// O(n*logN)
function minNumber(nums, k) {
    nums.sort((a,b) => a - b); // n*log(n)
    nums = nums.slice(0, nums.length - k); // O(n)
    return parseInt(nums.join(''), 10); //O(n)
}

// O(n) + O(n*logN)  ==> O( (n+1) * log(n)) => O(n*log(n))
function solve(num, k) {
    const nums = transformNumberToArray(num);
    return minNumber(nums, k);
}
console.log(solve("987654321", 3));