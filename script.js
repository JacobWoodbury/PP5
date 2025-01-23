//let getInput = document.getElementById("user-input");
let output = document.getElementById ("output");
let button = document.getElementById("check-button");
let inputEars = document.getElementById("user-input");


// I found that when I had no input I was passing one test which scared me. 
// I realized later that it's because no text makes the no spaces rule true. I learned that it reads a space as a number though.
inputEars.addEventListener("input", function(){
    output.innerHTML = "Great Password"
    let getInput = document.getElementById("user-input");
    getInput = getInput.value;
    let flag =0;
    flag += passLength(getInput);
        console.log("Length " + passLength(getInput))
    flag += specialChar(getInput);
        console.log("spc Char " + specialChar(getInput))
    flag += noSpace(getInput);
        console.log("no space " + noSpace(getInput))
    flag += allLower(getInput);
        console.log("all lower " + allLower(getInput))
    flag += allUpper(getInput);
        console.log("all upper " + allUpper(getInput))
    flag += !hasDigit(getInput);
        console.log("numbers " + hasDigit(getInput))
    console.log(getInput + " passed " + flag + " tests")
})

function passLength(getInput){
    if(getInput.length < 8){
            output.innerHTML = "Password is too short"
            return false
        }
        return true
}
function specialChar(getInput){
    
    //this feels like it could be shorter, but when I wrote all the symbols togther with || 's it only read !'s 
    if(!(getInput.includes('!') || getInput.includes('@') || getInput.includes('#') || getInput.includes('$') || getInput.includes('%')
        || getInput.includes('^') || getInput.includes('&') || getInput.includes('*'))){
    output.innerHTML = "needs special Char"
    return false
    }
    return true
}

function noSpace(getInput){
    if((getInput.includes(' '))){
        output.innerHTML = "try again with no spaces"
        return false
    }
    return true
}

function allLower(getInput){
    if (getInput === getInput.toLowerCase()){
        output.innerHTML = "needs an uppercase"
        return false
    }
    return true
}
function allUpper(getInput){
    if (getInput === getInput.toUpperCase()){
        output.innerHTML = "needs a lowercase"
        return false
    }
    return true;
}

function hasDigit(getInput){
    for(let char of getInput){
        if(!isNaN(char)){
            return true;
        }
    }
    output.innerHTML = "Add a number please"
    return false;
}




button.onclick = function(){
    //default
    output.innerHTML = "You passed!"
    document.getElementById('comment-box').innerHTML = "";
    let explanation = document.createElement('div');
    let getInput = document.getElementById("user-input");
    getInput = getInput.value;
    let check = []
    
    check[0] = passLength(getInput);
    check[1] = specialChar(getInput);
    check[2] = noSpace(getInput);
    check[3] = allLower(getInput);
    check[4] = allUpper(getInput);
    check[5] = hasDigit(getInput);

    let count =0;
   for(let i=0;i<6;i++)
    {
        if (!check[i]){
            count++
            let testFail = document.createElement('p')
            document.getElementById('comment-box').appendChild(explanation)
            testFail.innerHTML = "You failed test " + (i+1)
            explanation.appendChild(testFail)
        }
    }
    console.log(count + " tests failed")
       
}

