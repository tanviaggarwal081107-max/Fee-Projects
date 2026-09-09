console.clear();

const prompt = require("prompt-sync")();

let section = "G4";

console.log("\nEnter Students Details");

let students = [];

// Student Details
{
    let id = parseInt(prompt("Enter Id: "));
    let name = prompt("Enter Name: ");
    let cgpa = parseFloat(prompt("Enter CGPA: "));

    let student = {
        id: id,
        name: name,
        cgpa: cgpa
    };

    students = [...students, student];

    console.log("One object entered into Array:");
}

console.log("Master Entry Completed");

// Get first student
var [a] = students;

console.log(
    `\nId: ${a.id} 
Name: ${a.name} 
CGPA: ${a.cgpa}`
);


console.log("\nNon update markbase");

const maxMarks = 100;

let marksbaase = [];

// Marks Details
{
    let idvalues = parseInt(prompt("Enter Id: "));
    let dbmsMarks = parseInt(prompt("Enter DBMS Marks: "));
    let feeMarks = parseInt(prompt("Enter FEE2 Marks: "));

    let Smarks = {
        id: idvalues,
        dbms: dbmsMarks,
        fee: feeMarks
    };

    marksbaase.push(Smarks);

    console.log("\nMarks Base Completed");
}


// Average Function
function fAversge(dbmsMarks, feeMarks) {

    let average = (dbmsMarks + feeMarks) / 2;

    return average;
}


// Grade Function
function fGrade(average) {

    let grade = "";

    if (average >= 90) {
        grade = "O";
    }
    else if (average >= 80) {
        grade = "A+";
    }
    else if (average >= 70) {
        grade = "A";
    }
    else {
        grade = "B";
    }

    return grade;
}


let srNo = 1;

console.log(
    "\nResult\nSrNo.\tId\tName\t\tDBMS\tFEE\tAvg\tGrade"
);


// Compare Student ID with Marks ID
for (let elements1 of students) {

    let dbms = 0;
    let fee = 0;
    let average = 0;
    let grade = "";

    for (let elements2 of marksbaase) {

        if (elements2.id == elements1.id) {

            dbms = elements2.dbms;

            fee = elements2.fee;

            average = fAversge(dbms, fee);

            grade = fGrade(average);

            break;
        }
    }

    console.log(
        `\n${srNo}\t${elements1.id}\t${elements1.name}\t\t${dbms}\t${fee}\t${average}\t${grade}`
    );

    srNo++;
}

console.log();