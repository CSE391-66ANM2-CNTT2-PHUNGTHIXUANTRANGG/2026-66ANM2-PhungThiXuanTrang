let students = []
let filteredStudents = []

let sortAsc = true

function getRank(score){

if(score >= 8) return "Giỏi"
if(score >= 6.5) return "Khá"
if(score >= 5) return "Trung bình"
return "Yếu"

}

function addStudent(){

let name = document.getElementById("name").value
let score = parseFloat(document.getElementById("score").value)

if(name === "" || isNaN(score)){
alert("Nhập dữ liệu hợp lệ")
return
}

let student = {
name: name,
score: score,
rank: getRank(score)
}

students.push(student)

applyFilters()

}

function renderTable(){

let body = document.getElementById("tableBody")
body.innerHTML = ""

if(filteredStudents.length === 0){
document.getElementById("noResult").style.display="block"
return
}

document.getElementById("noResult").style.display="none"

filteredStudents.forEach(s=>{

let row = `
<tr>
<td>${s.name}</td>
<td>${s.score}</td>
<td>${s.rank}</td>
</tr>
`

body.innerHTML += row

})

}

function applyFilters(){

let keyword = document.getElementById("search").value.toLowerCase()
let filterValue = document.getElementById("filter").value

filteredStudents = students.filter(s=>{

let matchName = s.name.toLowerCase().includes(keyword)

let matchRank = filterValue === "all" || s.rank === filterValue

return matchName && matchRank

})

filteredStudents.sort((a,b)=>{

if(sortAsc) return a.score - b.score
else return b.score - a.score

})

renderTable()

}

document.getElementById("search").addEventListener("input",function(){

applyFilters()

})

document.getElementById("filter").addEventListener("change",function(){

applyFilters()

})

document.getElementById("scoreHeader").addEventListener("click",function(){

sortAsc = !sortAsc

let arrow = sortAsc ? "▲" : "▼"

this.innerText = "Điểm " + arrow

applyFilters()

})