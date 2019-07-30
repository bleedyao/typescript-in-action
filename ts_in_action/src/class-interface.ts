interface Human{
    name:string;
    eat():void;
}

class Asian implements Human{
    constructor(name: string){
        this.name = name
    }
    name: string;
    eat(){}
    sleep(){}
}

class Auto{
    state = 1
    private state2 = 0
}

interface AutoInterface extends Auto{

}

class C extends Auto implements AutoInterface{
    state = 2
}

class Bus extends Auto implements AutoInterface{

}