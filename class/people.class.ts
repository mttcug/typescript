import { todoS } from '../interface/todos.interface';

export class people {
    constructor(age:number,sex:number,hobby:string,schedule:Array[todoS]){
        this.age=age;
        this.sex=sex;
        this.hobby=hobby;
        this.schedule=schedule;
    }

    age:number;
    sex:number;
    hobby:string;
    schedule:Array<todoS>
}