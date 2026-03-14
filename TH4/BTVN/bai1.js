let form = document.getElementById("form")

function showError(id,message){
document.getElementById(id+"Error").innerText = message
}

function clearError(id){
document.getElementById(id+"Error").innerText = ""
}

/* VALIDATE FULLNAME */

function validateFullname(){

let name = document.getElementById("fullname").value.trim()

let regex = /^[A-Za-zÀ-ỹ\s]+$/

if(name === ""){
showError("fullname","Không được để trống")
return false
}

if(name.length < 3){
showError("fullname","Phải ≥ 3 ký tự")
return false
}

if(!regex.test(name)){
showError("fullname","Chỉ chứa chữ và khoảng trắng")
return false
}

clearError("fullname")
return true

}

/* VALIDATE EMAIL */

function validateEmail(){

let email = document.getElementById("email").value

let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(email === ""){
showError("email","Không được để trống")
return false
}

if(!regex.test(email)){
showError("email","Email không hợp lệ")
return false
}

clearError("email")
return true

}

/* VALIDATE PHONE */

function validatePhone(){

let phone = document.getElementById("phone").value

let regex = /^0\d{9}$/

if(!regex.test(phone)){
showError("phone","SĐT phải 10 số bắt đầu bằng 0")
return false
}

clearError("phone")
return true

}

/* VALIDATE PASSWORD */

function validatePassword(){

let pass = document.getElementById("password").value

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

if(!regex.test(pass)){
showError("password","≥8 ký tự, có hoa, thường, số")
return false
}

clearError("password")
return true

}

/* CONFIRM PASSWORD */

function validateConfirm(){

let pass = document.getElementById("password").value
let confirm = document.getElementById("confirm").value

if(confirm !== pass){
showError("confirm","Mật khẩu không khớp")
return false
}

clearError("confirm")
return true

}

/* VALIDATE GENDER */

function validateGender(){

let genders = document.getElementsByName("gender")

for(let g of genders){
if(g.checked){
clearError("gender")
return true
}
}

showError("gender","Phải chọn giới tính")
return false

}

/* VALIDATE TERMS */

function validateTerms(){

let t = document.getElementById("terms")

if(!t.checked){
showError("terms","Phải đồng ý điều khoản")
return false
}

clearError("terms")
return true

}

/* SUBMIT FORM */

form.addEventListener("submit",function(e){

e.preventDefault()

let valid =
validateFullname() &
validateEmail() &
validatePhone() &
validatePassword() &
validateConfirm() &
validateGender() &
validateTerms()

if(valid){

let name = document.getElementById("fullname").value

form.style.display="none"

document.getElementById("success").innerText =
"Đăng ký thành công! 🎉 Xin chào " + name

}

})

/* PASSWORD STRENGTH */

document.getElementById("password").addEventListener("input",function(){

let pass = this.value
let strength = 0

if(pass.length >= 8) strength++
if(/[A-Z]/.test(pass)) strength++
if(/[a-z]/.test(pass)) strength++
if(/\d/.test(pass)) strength++

let bar = document.getElementById("strengthLevel")

if(strength <= 2){
bar.style.width="33%"
bar.style.background="red"
}
else if(strength == 3){
bar.style.width="66%"
bar.style.background="orange"
}
else{
bar.style.width="100%"
bar.style.background="green"
}

})

/* TOGGLE PASSWORD */

document.getElementById("togglePass").onclick=function(){

let pass = document.getElementById("password")

if(pass.type === "password"){
pass.type="text"
}else{
pass.type="password"
}

}

/* CHARACTER COUNT */

document.getElementById("fullname").addEventListener("input",function(){

let length = this.value.length

document.getElementById("charCount").innerText =
length + "/50"

})