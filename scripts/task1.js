

function displayReverse(){
let input=document.getElementById('inputT').value;
alert(reverse(input));
}


function reverse(string){
    let result="";
    for (let index = string.length-1; index >= 0; index--) {
        result+= string[index]; 
    }
    return result;
}