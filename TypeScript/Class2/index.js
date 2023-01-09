let obj = {
    student_id: 2332,
    name: "Rita",
    teacher_id: 787,
    teacher_name: "Seema",
};
console.log(obj);
let obj1 = {
    student_id: 23232,
    name: "ashfaq"
};
console.log(obj1.name);
var color;
(function (color) {
    color[color["read"] = 0] = "read";
    color[color["yellow"] = 1] = "yellow";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
console.log(color);
function buildName(firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result = buildName("Bop");
let result1 = buildName("Bob", "Adam");
console.log(result + result1);
let buildName1 = function (firstName, lastName = "Khan") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
};
let result2 = buildName1("asdfasdf");
let result3 = buildName1("Bob", "Adam");
console.log(result2);
console.log(result3);
function myCalback(text) {
    console.log(`inside callback  + ${text}`);
}
function callingFunction(intialText, callback) {
    callback(intialText);
}
callingFunction("myText", myCalback);
function add(arg1, arg2) {
    return arg1 + arg2;
}
console.log(add(1, 2));
console.log(add("Hello", "world"));
console.log(add(true, false));
export {};
