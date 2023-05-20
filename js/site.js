//Get the string from the page
//controller function
function getValues(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;
    let reversedString = reverseString(userString);

    displayString(reversedString);

}


//Reverse the string
//logic function
function reverseString(userString){
    let revString = [];

    for (let index = userString.length - 1; index >= 0; index --){
        revString += userString[index];
    }

    return revString
}

//Display reversed string to the user
//display function
function displayString(reversedString){

    //write message to page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${reversedString}`;

    //show alert box
    document.getElementById("alert").classList.remove("invisible");
}