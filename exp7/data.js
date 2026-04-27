let students = [
{name:"rahul", dept:"CSE", score:82},
{name:"sita", dept:"CSE", score:91},
{name:"hari", dept:"ECE", score:76},
{name:"rina", dept:"ECE", score:88},
{name:"gita", dept:"ME", score:69},
{name:"kishan", dept:"ME", score:95},
{name:"arjun", dept:"CSE", score:73},
{name:"kunal", dept:"ECE", score:84},
{name:"laxmi", dept:"ME", score:78},
{name:"rohan", dept:"CSE", score:89}
];

/* Display Function */

function display(data){

let table = document.getElementById("table");

/* clear old rows */
table.innerHTML = `
<tr>
<th>Name</th>
<th>Department</th>
<th>Score</th>
</tr>
`;

for(let i=0;i<data.length;i++){
table.innerHTML += `
<tr>
<td>${data[i].name}</td>
<td>${data[i].dept}</td>
<td>${data[i].score}</td>
</tr>
`;
}

}

/* Initial load */
display(students);

/* Search + Filter */

document.getElementById("search").addEventListener("keyup", filter);
document.getElementById("dept").addEventListener("change", filter);

function filter(){

let text = document.getElementById("search").value.toLowerCase();
let dept = document.getElementById("dept").value;

let filtered = students.filter(s => 
(s.name.toLowerCase().includes(text)) &&
(dept === "All Departments" || s.dept === dept)
);

display(filtered);
}

/* Capitalize */

function capitalize(){
students.forEach(s => s.name = s.name.toUpperCase());
display(students);
}

/* Lower */

function lower(){
students.forEach(s => s.name = s.name.toLowerCase());
display(students);
}

/* Topper */

function topper(){
let top = students.filter(s => s.score > 90);
display(top);
}
