console.log("Hello from JavaScript!");

let name = "Trang";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");

let score = 7.5;

if (score >= 8){
    console.log("Giỏi");
}else if(score >= 6.5){
    console.log("Khá");
}else if(score >= 5){
    console.log("Trung bình");
}else{
    console.log("Yếu");
}