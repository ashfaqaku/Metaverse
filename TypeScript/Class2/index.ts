import { text } from "stream/consumers";

interface Student {
    student_id: number;
    name: string;
}
interface Teacher {
    teacher_id:number;
    teacher_name: string;
}

type intersected_type = Student & Teacher;

let obj: intersected_type ={
    student_id:2332,
    name: "Rita",
    teacher_id: 787,
    teacher_name: "Seema",
};

console.log(obj);

let obj1: Student ={
    student_id:23232,
    name:"ashfaq"
}

console.log(obj1.name);

enum color {
    read,
    yellow,
    green
}
console.log(color);

function buildName (firstName: string, lastName = "Khan"): string{
    if(lastName)
    return firstName + " " + lastName;
    else
        return firstName;
}

let result = buildName("Bop");
let result1 = buildName("Bob", "Adam");
console.log(result+result1);

let buildName1:(firstName: string, lastName?: string) => string =
function(firstName:string, lastName="Khan"): string{
    if (lastName)
        return firstName + " " + lastName;
    else
    return firstName;

}

let result2 = buildName1("asdfasdf");
let result3 = buildName1("Bob", "Adam");
console.log(result2);
console.log(result3);

function myCalback(text:string){
    console.log(`inside callback  + ${text}`);
}

function callingFunction(intialText: string,callback:(text:string)=>void){
    callback(intialText);
}

callingFunction("myText",myCalback);


//--------its customary to order overlaods from  most specific to least specific.
function add(arg1:string, arg2:string) :string;
function add(arg1:number, arg2:number) :number;
function add(arg1:boolean, arg2:boolean) :boolean;
function add(arg1:any, arg2:any):any{
    return arg1 + arg2;
}

console.log(add(1,2));
console.log(add("Hello","world"));
console.log(add(true,false));
