const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");

btn1.addEventListener("click",()=>{
    // その他のやつをリセット
    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    content1.classList.remove("display");
    content2.classList.remove("display");
    content3.classList.remove("display");



    // 表示選択のやつ
    btn1.classList.add("selected");
    content1.classList.add("display");

});
btn2.addEventListener("click",()=>{
    // その他のやつをリセット
    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    content1.classList.remove("display");
    content2.classList.remove("display");
    content3.classList.remove("display");



    // 表示選択のやつ
    btn2.classList.add("selected");
    content2.classList.add("display");

});
btn3.addEventListener("click",()=>{
    // その他のやつをリセット
    btn1.classList.remove("selected");
    btn2.classList.remove("selected");
    btn3.classList.remove("selected");
    content1.classList.remove("display");
    content2.classList.remove("display");
    content3.classList.remove("display");



    // 表示選択のやつ
    btn3.classList.add("selected");
    content3.classList.add("display");

});