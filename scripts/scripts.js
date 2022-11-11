
// Variables //

const teamNum = 6
let firstName = ""

// Full names //

const shavin = "Shavin Singh"
const michelle = "Michelle Parlevliet"
const raymond = "Man View Raymond Lee"
const wenbo = "Wenbo Min"

// Logic //


// Prompts for Team #, in this case it's 6 //

const userNum = prompt("Please enter your team number", "")

if (userNum == teamNum) {
    firstName = prompt("What is your first name?", "")
    validate()
} else {
     validate()
}

// If Team # is correct, the Function validates users firstname (four possibilities) and returns a welcome msg with users fullname, otherwise alerts 'access denied' because the above else statement has no input.//

function validate() {

if (firstName === "" || firstName === null) {
    alert("Access denied!")
} else {
    switch(firstName.toLowerCase()) {
        case "shavin":
            alert("Welcome " + shavin)
            break;

        case "michelle":
            alert("Welcome " + michelle)
            break;
        
        case "raymond":
            alert("Welcome " + raymond)
            break;

        case "wenbo":
            alert("Welcome " + wenbo)
            break;
        
        default:
            alert("Name not on file")
    }
}
}
