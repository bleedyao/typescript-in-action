let add1: (x: number, y: number) => number

// 等价方式
interface Add{
    (x: number, y: number): number
}

// 还可用类型别名表示
type Add1 = (x: number, y: number) => number

// 定义函数库

interface Lib{
    ():void;
    version: string;
    doSomething(): void
}

let lib: Lib =  (() => {}) as Lib
lib.version = '1.0';
lib.doSomething = () => {}