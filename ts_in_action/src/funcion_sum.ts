// 可选参数
function a(x: number,y?: number){
    return y? x + y: x;
}

// 可选参数调用
function b(i: number, j = 0, k: number, l = 1){
    return i + j + k + l
}
console.log(b(1,undefined,2));

// 剩余参数
function c(x: number, ...rest: number[]){
    return x + rest.reduce((pre, cur) => pre + cur)
}
console.log(c(1,2,3,4,5))