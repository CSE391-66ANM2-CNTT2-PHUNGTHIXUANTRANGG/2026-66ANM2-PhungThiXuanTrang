const prices = {
"Áo":150000,
"Quần":200000,
"Giày":500000
}

let form = document.getElementById("orderForm")

function showError(id,msg){

document.getElementById(id+"Error").innerText = msg

}

function clearError(id){

document.getElementById(id+"Error").innerText = ""

}

function validateProduct(){

let product = document.getElementById("product").value

if(product === ""){

showError("product","Phải chọn sản phẩm")
return false

}

clearError("product")
return true

}

function validateQuantity(){

let q = Number(document.getElementById("quantity").value)

if(!Number.isInteger(q) || q < 1 || q > 99){

showError("quantity","Số lượng 1-99")
return false

}

clearError("quantity")
return true

}

function validateDate(){

let input = document.getElementById("date").value

if(!input){

showError("date","Phải chọn ngày")
return false

}

let today = new Date()
today.setHours(0,0,0,0)

let delivery = new Date(input)

let max = new Date()
max.setDate(today.getDate()+30)

if(delivery < today){

showError("date","Không được chọn ngày quá khứ")
return false

}

if(delivery > max){

showError("date","Không quá 30 ngày")
return false

}

clearError("date")
return true

}

function validateAddress(){

let a = document.getElementById("address").value.trim()

if(a.length < 10){

showError("address","Địa chỉ ≥ 10 ký tự")
return false

}

clearError("address")
return true

}

function validateNote(){

let n = document.getElementById("note").value

if(n.length > 200){

showError("note","Tối đa 200 ký tự")
return false

}

clearError("note")
return true

}

function validatePayment(){

let list = document.getElementsByName("payment")

for(let p of list){

if(p.checked){
clearError("payment")
return true
}

}

showError("payment","Phải chọn phương thức")
return false

}

function calculateTotal(){

let product = document.getElementById("product").value
let q = Number(document.getElementById("quantity").value)

if(product && q){

let total = prices[product] * q

document.getElementById("total").innerText =
Number(total).toLocaleString("vi-VN")

}

}

document.getElementById("product").addEventListener("change",calculateTotal)
document.getElementById("quantity").addEventListener("input",calculateTotal)