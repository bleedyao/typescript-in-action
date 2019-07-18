// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

// 字符串枚举
enum Name{
    PaterK = "PaterV",
    TomK = 'tomV'
}

// 异构枚举
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员
enum Char {
    a,
    b = a,
    c = 1 + 3,
    d = Math.random(),
    e = '123'.length,
    // f 必须赋初始值
}

// 常量枚举
const enum Month{
    Jan,
    Feb,
    Mar
}
const month = [Month.Jan, Month.Feb, Month.Mar]

// 角色判断

let initByRole = (r: Role) => {
    if (r === Role.Reporter || r === Role.Developer) {
        // do something
    }else if(r === Role.Maintainer || r === Role.Owner){
        // do something
    }else if(r === Role.Guest){
        // do something
    }else{
        // do something
    }
}

initByRole(Role.Maintainer)