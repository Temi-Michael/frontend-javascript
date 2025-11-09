let body = document.getElementById("main")

interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

let student2: student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};


let studentsList : student[] = [student1, student2];

let table = document.createElement("table");
let headerRow = document.createElement("tr");
let header1 = document.createElement("th");
header1.textContent = "First Name";
let header2 = document.createElement("th");
header2.textContent = "Location";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);
studentsList.forEach((student) => {
    let row = document.createElement("tr");
    let firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    let locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

body.appendChild(table);
console.log(table);