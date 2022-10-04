
var personName="hello eric\n";

document.write(personName.toLowerCase());
//Comments this program to change string in upper case or lower case or title case.

document.write(personName.toUpperCase());
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 return sentence;
 }
 titleCase(personName);

//commets this program is just concotinate string to string...
 
var personName="Hello Eric";
var message = ", Would you like to learn some Python today?";
document.write(personName + message);