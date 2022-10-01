
var personName="Hello Eric\n";
var son = "kaloO heloH";

document.write(personName.toLowerCase());

document.write(personName.toUpperCase());
function titleCase(son) {
    var sentence = son.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 console.log(sentence);
 return sentence;
 }
//  personName.titleCase();
console.log(son);
