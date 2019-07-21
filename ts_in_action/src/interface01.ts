// 对象类型接口
interface List{
    id: number;
    name: string;
    age?: number; // 可选属性
}
interface Result{
    data: List[];
}
function render(result: Result){
    result.data.forEach((value) => {
        console.log(value.id, value.name)
    })
}
let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B'}
    ]
}
// 这种形式允许 List 类型传入多余的类型
render(result)

// 这种情况是不行的
render({
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B'}
    ]
}as Result)

/* 绕过这种检查的方式有三种
 * 1. 同上面的方式，赋值给变量，传入变量
 * 2. 使用类型断言，在值后面加 as Result，或者在值前面加 <Result>, 推荐第一种
 * 3. 在类型定义是添加字符串签名，[x: sttring]: any
 */

 // 可索引接口，用于接口数量不固定的场景
 interface StringArray{
     [index: number]: string
 }

 let arr: StringArray
 arr = ['a','b']