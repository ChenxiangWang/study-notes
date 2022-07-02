function f (a, t) {
    let l = 0;
    let r = a.length-1;
    if (a[l] >=t) {
        return 0;
    }
    if (a[r] < t) {
        return a.length;
    }
    // O( lgN )
    while (l < r) {
        let mid = (l+r) >> 1;
        if (a[mid] < t) {
            l = mid + 1; // a[l] > t
        } else {
            r = mid ; // a[r] >= t
        }
    }
    return l;
}

console.log(f([1, 3, 6, 6, 8, 12], 0));
console.log(f([1, 3, 6, 6, 8, 12], 1));
console.log(f([1, 3, 6, 6, 8, 12], 2));
console.log(f([1, 3, 6, 6, 8, 12], 3));
console.log(f([1, 3, 6, 6, 8, 12], 4));
console.log(f([1, 3, 6, 6, 8, 12], 6));
console.log(f([1, 3, 6, 6, 8, 12], 7));
console.log(f([1, 3, 6, 6, 8, 12], 8));
console.log(f([1, 3, 6, 6, 8, 12], 9));
console.log(f([1, 3, 6, 6, 8, 12], 12));
console.log(f([1, 3, 6, 6, 8, 12], 13));
