const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const addBtn = document.getElementById("addBtn");

const tbody = document.getElementById("tableBody");

const totalEl = document.getElementById("total");
const avgEl = document.getElementById("avg");

let students = [];

function getRank(score){

if(score >= 8.5) return "Giỏi";
if(score >= 7) return "Khá";
if(score >= 5) return "Trung bình";
return "Yếu";

}

function addStudent(){

let name = nameInput.value.trim();
let score = parseFloat(scoreInput.value);

if(name === ""){
alert("Họ tên không được trống");
return;
}

if(isNaN(score) || score < 0 || score > 10){
alert("Điểm phải từ 0 đến 10");
return;
}

students.push({
name:name,
score:score
});

renderTable();

nameInput.value="";
scoreInput.value="";

nameInput.focus();

}

function renderTable(){

tbody.innerHTML="";

students.forEach((sv,index)=>{

let tr = document.createElement("tr");

if(sv.score < 5){
tr.classList.add("weak");
}

tr.innerHTML=`
<td>${index+1}</td>
<td>${sv.name}</td>
<td>${sv.score}</td>
<td>${getRank(sv.score)}</td>
<td><button data-index="${index}">Xóa</button></td>
`;

tbody.appendChild(tr);

});

updateStats();

}

function updateStats(){

let total = students.length;

let sum = students.reduce((acc,sv)=> acc + sv.score ,0);

let avg = total ? (sum/total).toFixed(2) : 0;

totalEl.textContent = total;
avgEl.textContent = avg;

}

addBtn.addEventListener("click",addStudent);

scoreInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){
addStudent();
}

});

tbody.addEventListener("click",function(e){

if(e.target.tagName==="BUTTON"){

let index = e.target.dataset.index;

students.splice(index,1);

renderTable();

}

});