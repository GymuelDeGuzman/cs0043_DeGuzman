
function Student(ID, name, avgCP, avgSA, examGrade){
    this.ID = ID;
    this.name = name;
    this.avgCP = avgCP;
    this.avgSA = avgSA;
    this.examGrade = examGrade;

    this.gradeScore = (avgCP * 0.30) + (avgSA * 0.30) + (examGrade * 0.40);

    if (this.gradeScore < 60) this.letter = 'F';
    else if (this.gradeScore >= 60 && this.gradeScore <= 69) this.letter = 'D';
    else if (this.gradeScore >= 70 && this.gradeScore <= 79) this.letter = 'C';
    else if (this.gradeScore >= 80 && this.gradeScore <= 89) this.letter = 'B';
    else if (this.gradeScore >= 90 && this.gradeScore <= 100) this.letter = 'A';
}


function avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return Math.round(sum / array.length);
}


function getName(){
    let name = prompt("Enter student name: ");
    console.log("Student Name: " + name);
    return name;
}


function getCP(){
    console.log("Enter 5 Enabling Assessment scores...")
    let cpGrade = [];
    for (let i = 0; i < 5; i++) {
        let grade = prompt("Enter EA score #" + (i+1).toString() + ":");
        cpGrade.push(grade);
    }

    console.log("  >>> Enabling Assessment scores:", cpGrade.toString(), "\n");
    return avg(cpGrade);
}

function getSA(){
    console.log("Enter 3 Summative Assessment scores...")
    let saGrade = [];
    for (let i = 0; i < 3; i++) {
        let grade = prompt("Enter SA score #" + (i+1).toString() + ":");
        saGrade.push(grade);
    }

    console.log("  >>> Summative Assessment scores:", saGrade.toString())
    return avg(saGrade);
}

function getExam(){
    console.log("Enter Final Exam  score...")
    let examGrade = prompt("Enter Final Exam score:");

    console.log("  >>> Final Exam score:", examGrade.toString())
    return examGrade;
}

studentList = [];
function createStudentList(){
    for (let i = 0; i < 5; i++) {
        console.log("Enter details for Student #" + (i+1).toString() + "...")
        let student = new Student((i+1), getName(), getCP(), getSA(), getExam());
        studentList.push(student);
        console.log("\n")
    }
}

function printStudentList(){
    console.log("===  ===============  ========  ========  ==========  =========  ======")
    console.log("ID#  Name of Student  CP Grade  SA Grade  Exam Grade  AVG Grade  Letter")
    for (let i = 0; i < studentList.length; i++) {
        console.log(" " + studentList[i].ID.toString() + "     " + studentList[i].name + "       " + studentList[i].avgCP + "        " + studentList[i].avgSA + "         " + studentList[i].examGrade.toString() + "        " + studentList[i].gradeScore.toString() + "        " + studentList[i].letter);
    }
}

function main(){
    createStudentList();
    printStudentList();
}

main();