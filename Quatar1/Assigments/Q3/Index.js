//Declare Variable

let personName="hello eric\n";

//change to lower case
document.write(personName.toLowerCase());

//Change to upper Case
document.write(personName.toUpperCase());

//Change to Title Case.
function titleCase(string) {
    let sentence = string.toLowerCase().split(" ");
    for(let i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 return sentence;
 }
 titleCase(personName);