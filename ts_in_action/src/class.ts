abstract class Animal{
    abstract sleep(): void
}

class Dog{
    constructor(name: string){
        this.name = name
    }
    name: string
    run(){}
}

console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
// 实例属性必须有初始值

// 类的继承
class Husky extends Dog{
    constructor(name: string, color: string){
        super(name)
        this.color = color;
    }
    color: string
}

// 类的成员修饰符
// public：类的所有属性默认是 public
// private：私有成员
// protected：只能在类和子类中访问，不能再实例中调用
// readonly：只读属性，一定要初始化
// 构造函数的参数也可以加入修饰符 :)
// static：静态成员，只能通过类名调用，可以被继承

class WorkFlow{
    step1(){
        return this;
    }

    step2(){
        return this;
    }
}

new WorkFlow().step1().step2()

class MyFolw extends WorkFlow{
    next(){
        return this;
    }
}s

new MyFolw().next().step1().next()