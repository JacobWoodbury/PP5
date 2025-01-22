//let getInput = document.getElementById("user-input");
let output = document.getElementById("output");
let button = document.getElementById("check-button");

button.onclick = function(){
    let getInput = document.getElementById("user-input");
    getInput = getInput.value;
    let flag= true;
    if(getInput.length < 8)
    {
        flag= false;
        console.log("too short");
        //innerhtml for these
    }
    //this feels like it could be shorter, but when I wrote all the symbols togther with || 's it only read !'s 
    if(!(getInput.includes('!') || getInput.includes('@') || getInput.includes('#') || getInput.includes('$') || getInput.includes('%')
         || getInput.includes('^') || getInput.includes('&'))){
        flag= false;
        console.log("needs special Char")
    }
    if((getInput.includes(' '))){
        flag= false;
        console.log("try again with no spaces")
    }

    if (getInput === getInput.toLowerCase()){
        flag= false;
        console.log("needs an uppercase")
    }
    if (getInput === getInput.toUpperCase()){
        flag= false;
        console.log("needs a lowercase")
    }
    if(!(hasDigit(getInput))){
        flag= false;
        console.log("needs a digit")
    }

    function hasDigit(getInput){
        for(let char of getInput){
            if(!isNaN(char)){
                return true;
            }
        }
        return false;
    }
    
}
