let form = document.getElementById("registerForm")

function showError(id,message){

document.getElementById(id+"Error").innerText = message

}

function clearError(id){

document.getElementById(id+"Error").innerText = ""

}

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

function validateEmail(){

let email = document.getElementById("email").value.trim()

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

function validatePhone(){

let phone = document.getElementById("phone").value.trim()

let regex = /^0\d{9}$/

if(phone === ""){
showError("phone","Không được để trống")
return false
}

if(!regex.test(phone)){
showError("phone","SĐT phải 10 số và bắt đầu bằng 0")
return false
}

clearError("phone")
return true

}

function validatePassword(){

let pass = document.getElementById("password").value

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

if(pass === ""){
showError("password","Không được để trống")
return false
}

if(!regex.test(pass)){
showError("password","≥8 ký tự, có chữ hoa, chữ thường, số")
return false
}

clearError("password")
return true

}

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

function validateTerms(){

let terms = document.getElementById("terms")

if(!terms.checked){

showError("terms","Phải đồng ý điều khoản")
return false

}

clearError("terms")
return true

}

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

document.getElementById("successMessage").innerText =
"Đăng ký thành công! 🎉 Xin chào " + name

}

})