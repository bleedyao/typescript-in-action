// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

//数组类型
let arr1: number[] = [1,2,3]
let arr2: Array<number | string> = [1,2,3,'4']

//元组
let tuple: [number, string] = [0, '1']
tuple.push(3)
console.log(tuple)

//函数
let add = (x:number, y:number): number => x + y
let computer: (x: number, y: number) => number
computer = (a, b) => a + b

//对象
// let obj: object = {x: 1, y: 2}
// 上面这种方法不能改变属性的值
let obj: {x: number,y: number} = {x: 1,y: 2}
obj.x = 3

// symbol：含义为唯一的值
let s1: Symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

// undefined null
let un: undefined = undefined;
let nu: null = null
// 可以修改 tsconfig "strictNullChecks": false 可以赋值
// num = undefined
// num = null 

// void
let noReturn = () => {}

// any
let x

// never
let error = () => {
    throw new Error()
}
let endless = () => {
    while(1){}
}