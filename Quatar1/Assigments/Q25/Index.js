var alienColor = ["green","yellow","red"];


function getcolor(color){

    if (color === "green"){
        return console.log("player just eraned 05 points");
    }    
    else{
        return false
    }
}
getcolor(alienColor[0]);

// Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)


function getcolor(color){

    if (color === "green"){
        return console.log("player just eraned 05 points");
    }    
    else{
        return console.log("");
    }
}
getcolor(alienColor[2]);
