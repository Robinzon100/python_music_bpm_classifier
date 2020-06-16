var spawn = require("child_process").spawn;

// Parameters passed in spawn - 
// 1. type_of_script 
// 2. list containing Path of the script 
//    and arguments for the script  

// E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
// so, first name = Mike and last name = Will 
var process = spawn('python', ["./main.py", "dubstep.mp3"]);

process.stdout.on('data', function (data) {
    console.log(data.toString());
}) 