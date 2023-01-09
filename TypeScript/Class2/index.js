// import { text } from "stream/consumers";
// interface Student {
//     student_id: number;
//     name: string;
// }
// interface Teacher {
//     teacher_id:number;
//     teacher_name: string;
// }
// type intersected_type = Student & Teacher;
// let obj: intersected_type ={
//     student_id:2332,
//     name: "Rita",
//     teacher_id: 787,
//     teacher_name: "Seema",
// };
// console.log(obj);
// let obj1: Student ={
//     student_id:23232,
//     name:"ashfaq"
// }
// console.log(obj1.name);
// enum color {
//     read,
//     yellow,
//     green
// }
// console.log(color);
// function buildName (firstName: string, lastName = "Khan"): string{
//     if(lastName)
//     return firstName + " " + lastName;
//     else
//         return firstName;
// }
// let result = buildName("Bop");
// let result1 = buildName("Bob", "Adam");
// console.log(result+result1);
// let buildName1:(firstName: string, lastName?: string) => string =
// function(firstName:string, lastName="Khan"): string{
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//     return firstName;
// }
// let result2 = buildName1("asdfasdf");
// let result3 = buildName1("Bob", "Adam");
// console.log(result2);
// console.log(result3);
// function myCalback(text:string){
//     console.log(`inside callback  + ${text}`);
// }
// function callingFunction(intialText: string,callback:(text:string)=>void){
//     callback(intialText);
// }
// callingFunction("myText",myCalback);
// //--------its customary to order overlaods from  most specific to least specific.
// function add(arg1:string, arg2:string) :string;
// function add(arg1:number, arg2:number) :number;
// function add(arg1:boolean, arg2:boolean) :boolean;
// function add(arg1:any, arg2:any):any{
//     return arg1 + arg2;
// }
// interface LabeledValue {
//     label: string;
//   }
//   function printLabel(labeledObj: LabeledValue) {
//     console.log(labeledObj.label);
//   }
//   let myObj = { size: 10, label: "Size 10 Object from ashfaq" };
//   printLabel(myObj);
// console.log(add(1,2));
// console.log(add("Hello","world"));
// console.log(add(true,false));
// let myType = <any> {name:"zia", id:1};
// myType = {id:2,name:"Tom"};
// myType = {id:3, name:"Mike", gender:false}
// myType = {id:3, gender:false};
// let not:any = 4
// not = "stinr";
// not = false;
// const enum Color {Red= 1, Green, Blue =4};
// // var colorName:string = color[2];
// // var c = Color["Blue"];
// var coloName:string = Color[2];
// console.log(coloName);
// var builk :(...rest:string[],fname:string)=>string=
// function(...resOfName:string[],firstName:string){
//     return firstName+""+resOfName.join(" ");
// }
// console.log(buildName("khan","zia","U."));
// function myCalback2(text:string){
//     console.log("instide my call back" + text);
// }
// function callingFunction2222(intialText:string,callback:(text:string)=>void {
//     callback(intialText);
// })
// callingFunction2222("myText",myCalback2);
// function pickcard(x:{suit:string;card:number;}[]):number;
// function pickcard(X:number):{suit:string;card:number;};
// function pickcard(x):any{
//     if(typeof x==="object"){
//         var pickcard= Math.floor(Math.random()*x.length);
//         return pickcard;
//     }
//     else if (typeof x == "number"){
//         var pickedsuit = Math.floor(x/13);
//         return{suit:suits[pickedsuit],card:x%13};
//     }
// }
// var x :any = "t"
// x.unknown()
// var f:(string)=>string;
// f = x=>'('+x+')';
// var h :((string)=>string)[]
// h =[]
// h.push(f);
// console.log(h[0]("h"))
// var a :{foo:number};
// var a1 = {foor:1,baz:2};
let c = ((a, b) => ++a)(1, 2);
console.log(c);
export {};
