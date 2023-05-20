let role = null;
let username = null;
let password = null;


function compGrade(role){
	let g1 = prompt("Enter 1st score: ");
    let g2 = prompt("Enter 2nd score: ");
    let g3 = prompt("Enter 3rd score: ");
    let g4 = prompt("Enter 4th score: ");

    sum = parseInt(g1)+parseInt(g2)+parseInt(g3)+parseInt(g4);
    ave = (sum/4);
    
    let gradeResult = null;

    if (ave <= 74) gradeResult = 'F';
    else if (ave >= 75 && ave <= 79) gradeResult = 'D';
    else if (ave >= 80 && ave <= 84) gradeResult = 'C';
    else if (ave >= 85 && ave <= 89) gradeResult = 'B';
    else if (ave >= 90 && ave <= 95) gradeResult = 'A';
    else if (ave >= 96 && ave <= 100) gradeResult = 'A+';

    console.log("Grade Average:", ave);
    console.log("Grade Equivalent:", gradeResult);
}


function login(){
	
	role = prompt("Login as: (ex. student, teacher, admin)");
	if (role == null || role ==""){
        console.log("Field cannot be empty");
        alert("Field cannot be empty");
        return;
    } else {
    	console.log("Role: " + role);
    }


    username = prompt("Please enter your username:" );
    if (username == null || username == ""){ 
        console.log("Field cannot be empty");
        return;
    } else {
    	console.log("Username: " + username);
    }


    password = prompt("Enter your password: ")
    if (password == null || password == ""){ 
        console.log("Field cannot be empty");
        return;
    } else {
    	console.log("Correct Password!");
    }

    console.log(" ");
    switch (role){
    	case "student" || "Student":
    		console.log("Welcome to the Student's Portal!");
    		break;
    	case "teacher" || "Teacher":
    		console.log("Welcome to the Teacher's Portal!");
    		break;
		case "admin" || "Admin" || "Administrator" || "administrator":
			console.log("Welcome to the Admin's Portal!");
			break;
		default:
			console.log("Role out of range.")
			return;
    	}

    compGrade(role);

}


function main(){
	login();
}

main();