let getInput = document.getElementById("user-input");
let output = document.getElementById("output");
let button = document.getElementById("check-button");

button.onclick = function(){
    getInput = getInput.value;
    let flag= true;
    if(getInput.length < 8)
    {
        flag= false;
        console.log("too short");
        //innerhtml for these
    }
    if(!(getInput.includes('!' || '@' ||'#' || '$' || '^' || '&' || '*'))){
        flag= false;
        console.log("needs special Char")
    }
    if((getInput.includes(' '))){
        flag= false;
        console.log("try again with no spaces")
    }
    if (isLowerCase(getInput)){
        flag= false;
        console.log("needs an uppercase")
    }
    if (isUpperCase(getInput)){
        flag= false;
        console.log("needs a lowercase")
    }
    if(!(hasDigit(getInput))){
        flag= false;
        console.log("needs a digit")
    }

    function isLowerCase(getInput){
        return str === str.toLowerCase();
    }
    
}
