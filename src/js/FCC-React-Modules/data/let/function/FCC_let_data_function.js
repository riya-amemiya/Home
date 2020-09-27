let Random = (num) => {
    return Math.floor(Math.random() * num);
};
let Push = (array, text) => {
    let Pushs = array.push(text);
    return Pushs
}
let Com = (num, num2) => {
    let gcdnum = Gcd(3, 4);
    num = (num * num2) / gcdnum;
    return num;
}
let Spt = (num = 1, num2 = 1) => {
    num2 = num + num2;
    num *= 100;
    return num / num2;
}
let nCr = (n = 1, r = 1) => {
    //nCr
    let x, z;
    let y;
    let age = 1;
    y = n;
    z = r;
    x = 0;
    while (x == 0) {
        if (r == 1) {
            y = y * r;
        }
        r--;
        if (r == 0) {
            x++;
        } else {
            n--;
            if (n == 0) {
                x++;
                break;
            }
            y = y * n;
        }
    }
    for (let i = 2; i <= z; i++) {
        age *= i;
    }
    y = y / age;
    return y;
}
let Pow = (num, n) => {
    //xのy乗
    let nums = num;
    for (let i = 2; i <= n; i++) {
        nums *= num;
    }
    return nums;
}
let Repetition = (x = 1) => {
    //階乗
    let age = 1;
    for (let i = 2; i <= x; i++) {
        age *= i;
    }
    return age;
}
let nPr = (n, r) => {
    //nPr
    let y;
    let x = 0;
    y = n;
    while (x == 0) {
        if (r == 1) {
            y = y * r;
        }
        r--;
        if (r == 0) {
            x++;
        } else {
            n--;
            if (n == 0) {
                x++;
                break;
            }
            y = y * n;
        }
    }
    return y;
}
let Gcd = (f = 1, x = 1) => {
    //最大公約数
    let r, tmp;
    if (f < x) {
        tmp = f;
        f = x;
        x = tmp;
    }
    /* ユークリッドの互除法 */
    r = f % x;
    while (r != 0) {
        f = x;
        x = r;
        r = f % x;
    }
    return x;
}
let Ratio = (a, b, x, y) => {
    //比率
    a *= y;
    b *= x;
    if (a < b) {
        if ((b % a) == 0) {
            return b / a;
        } else {
            return `${a}/${b}`;
        }
    } else {
        if ((a % b) == 0) {
            return a / b;
        } else {
            return `${b}/${a}`;
        }
    }
}
export {
    Random,
    Push,
    Com,
    Spt,
    nCr,
    Pow,
    Repetition,
    nPr,
    Gcd,
    Ratio
}