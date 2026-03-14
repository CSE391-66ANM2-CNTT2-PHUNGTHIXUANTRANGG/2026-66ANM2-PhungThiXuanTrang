let currentStep = 1
let totalSteps = 3

function showStep(step){

document.querySelectorAll(".step").forEach(s=>{
s.classList.remove("active")
})

document.getElementById("step"+step).classList.add("active")

updateProgress()

}

function updateProgress(){

let percent = (currentStep/totalSteps)*100

document.getElementById("progressBar").style.width =
percent+"%"

}

/* ERROR FUNCTIONS */

function showError(id,msg){
document.getElementById(id+"Error").innerText = msg
}

function clearError(id){
document.getElementById(id+"Error").innerText = ""
}

/* VALIDATE STEP 1 */

function validateStep1(){

let name = document.getElementById("fullname").value.trim()
let dob = document.getElementById("dob").value
let genders = document.getElementsByName("gender")

let valid = true

if(name.length < 3){
showError("fullname","Tên ≥ 3 ký tự")
valid=false
}else{
clearError("fullname")
}

if(!dob){
showError("dob","Phải chọn ngày sinh")
valid=false
}else{
clearError("dob")
}

let checked=false

for(let g of genders){
if(g.checked) checked=true
}

if(!checked){
showError("gender","Chọn giới tính")
valid=false
}else{
clearError("gender")
}

return valid

}

/* VALIDATE STEP 2 */

function validateStep2(){

let email = document.getElementById("email").value
let pass = document.getElementById("password").value
let confirm = document.getElementById("confirm").value

let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
let passRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

let valid=true

if(!emailRegex.test(email)){
showError("email","Email không hợp lệ")
valid=false
}else{
clearError("email")
}

if(!passRegex.test(pass)){
showError("password","≥8 ký tự có hoa thường số")
valid=false
}else{
clearError("password")
}

if(confirm!==pass){
showError("confirm","Mật khẩu không khớp")
valid=false
}else{
clearError("confirm")
}

return valid

}

/* NEXT STEP */

function nextStep(){

if(currentStep==1 && !validateStep1()) return

if(currentStep==2 && !validateStep2()) return

currentStep++

if(currentStep==3){

let name=document.getElementById("fullname").value
let dob=document.getElementById("dob").value
let gender=document.querySelector('input[name="gender"]:checked').value
let email=document.getElementById("email").value

document.getElementById("summary").innerHTML=

"Tên: "+name+"<br>"+
"Ngày sinh: "+dob+"<br>"+
"Giới tính: "+gender+"<br>"+
"Email: "+email

}

showStep(currentStep)

}

/* PREV STEP */

function prevStep(){

currentStep--

showStep(currentStep)

}

/* SUBMIT */

document.getElementById("form").addEventListener("submit",function(e){

e.preventDefault()

document.getElementById("form").style.display="none"

document.getElementById("success").innerHTML=
"<h3>Đăng ký thành công 🎉</h3>"

})